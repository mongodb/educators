import type { NextApiRequest, NextApiResponse } from 'next';
import { wrapApiHandlerWithSentry } from '@sentry/nextjs';

import { parseForm, FormidableField, FormidableFile } from 'lib/parse-form';
import rateLimit, { getIP, MAX_POSTS_PER_PERIOD } from 'lib/rate-limit';
import { responseWrapper } from 'lib/utils';
import googleSheetFileUpload from 'lib/google-sheet-upload';
import {
  googleDriveFileUpload,
  googleDriveFolderUpload,
} from 'lib/google-drive-uploads';
import axios from 'axios';

const limiter = rateLimit({
  max: 600, // cache limit of 600 per 30 second period.
  ttl: 30 * 1000,
});

const endpoint = '/api/phd-fellowship/application';

// This is needed by Next.js when receiving 'Content-Type': 'multipart/form-data'
export const config = {
  api: {
    bodyParser: false,
  },
};

const registrationHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const method = req.method;

  if (method !== 'POST') {
    return responseWrapper(res, endpoint, 405, method, {
      message: 'This is a POST-only endpoint.',
    });
  }

  try {
    const IP = getIP(req);
    await limiter.check(res, MAX_POSTS_PER_PERIOD, IP || '');
  } catch {
    return responseWrapper(res, endpoint, 429, method, {
      message: 'Rate limit exceeded',
    });
  }

  const { fields, files } = (await parseForm(req)) as {
    fields: FormidableField | { [field: string]: boolean };
    files: { uploads: FormidableFile };
  };

  let applicantFolderId;
  const date = new Date();

  if (files?.uploads) {
    applicantFolderId = await googleDriveFolderUpload(
      process.env['PHD_FELLOWSHIP_GOOGLE_DRIVE_FOLDER_ID'],
      `${fields.firstName} ${fields.lastName} - ${fields.university}`
    );

    if (applicantFolderId) {
      if (Array.isArray(files.uploads)) {
        for (let i = 0; i < files.uploads.length; i++) {
          await googleDriveFileUpload(
            files.uploads[i].filepath,
            files.uploads[i].originalFilename || date.toJSON(),
            files.uploads[i].mimetype || 'application/pdf',
            applicantFolderId
          );
        }
      } else {
        await googleDriveFileUpload(
          files.uploads.filepath,
          files.uploads.originalFilename || date.toJSON(),
          files.uploads.mimetype || 'application/pdf',
          applicantFolderId
        );
      }
    }
  }

  // Creates a markdown table of all fields.
  const fieldsTable =
    Object.entries(fields)
      .filter(([key, _]) => key !== 'uploads' && key !== 'urls')
      .reduce(
        (acc, [key, value]) => acc + `\r\n||${key || ' '}|${value || ' '}|`,
        ''
      ) +
    `\r\n||URLs|${fields?.urls?.toString() || ' '}|\r\n||Uploaded Documents|${
      applicantFolderId
        ? `https://drive.google.com/drive/folders/${applicantFolderId}`
        : ''
    }|`;

  const acceptanceCriteriaTable = `
  | ||Yes||Maybe||No||
  ||Research Applicability|The candidate’s research is directly applicable and high value to MongoDB.|The candidate’s research is applicable to MongoDB.|The candidate’s research is not applicable to MongoDB.
  ||Research Contributions|The candidate’s research is likely to lead to novel contributions in computer science and to MongoDB.|The candidate’s research may lead to novel contributions in computer science and to MongoDB.|The candidate’s research will not lead to novel contributions in computer science and to MongoDB.
  ||Future Researcher|The candidate demonstrates promise as a future contributor to innovative and impactful research in computer science.|The candidate somewhat demonstrates promise as a future contributor to innovative and impactful research in computer science.|The candidate does not demonstrate promise as a future contributor to innovative and impactful research in computer science.
  `;

  const description = `
  *Application Data*

  ${fieldsTable}

  *Acceptance Criteria*

  ${acceptanceCriteriaTable}
  `;

  const jiraBody = {
    fields: {
      summary: `PhD Fellowship Application: ${fields.firstName} ${fields.lastName} - ${fields.university}`,
      issuetype: {
        id: 15300,
      },
      reporter: {
        name: 'eliza.spang@mongodb.com',
      },
      assignee: {
        name: 'eliza.spang@mongodb.com',
      },
      project: {
        key: 'ACADEMIA',
      },
      description,
      // Required Voters
      customfield_23670: [
        { name: 'david.daly@mongodb.com' },
        { name: 'rachelle.palmer@mongodb.com' },
        { name: 'seny.kamara@mongodb.com' },
      ],
    },
  };

  const resp = await axios.post(
    `${process.env.JIRA_URL}/rest/api/latest/issue`,
    jiraBody,
    { headers: { Authorization: `Bearer ${process.env.JIRA_AUTH_TOKEN}` } }
  );

  const ticketKey = resp.data?.key;
  const jiraTicketURL = ticketKey
    ? `${process.env.JIRA_URL}/browse/${ticketKey}`
    : 'FAILED TO CREATE JIRA TICKET';

  if (fields.urls) {
    if (Array.isArray(fields.urls)) {
      fields.urls = fields.urls.map(url => `=HYPERLINK("${url}")`);
    } else {
      fields.urls = [`=HYPERLINK("${fields.urls}")`];
    }
  } else {
    fields.urls = [];
  }

  await googleSheetFileUpload(
    process.env['PHD_FELLOWSHIP_SPREADSHEET_ID'],
    'Applications',
    // explicitly map fields so we can have control of the order of columns in the Google Sheet
    [
      `${date.toLocaleDateString()}`,
      jiraTicketURL,
      fields.firstName,
      fields.lastName,
      fields.address,
      fields.apartment,
      fields.city,
      fields.state,
      fields.zipcode,
      fields.country,
      fields.email,
      fields.university,
      fields.program,
      fields.advisorName,
      fields.advisorEmail,
      fields.topic,
      applicantFolderId
        ? `https://drive.google.com/drive/folders/${applicantFolderId}`
        : '',
      ...fields.urls,
    ] as string[]
  );

  await googleSheetFileUpload(
    process.env['PHD_FELLOWSHIP_SPREADSHEET_ID'],
    'Applicants Status',
    [
      fields.firstName,
      fields.lastName,
      `${date.toLocaleDateString()}`,
    ] as string[]
  );

  return responseWrapper(res, endpoint, 200, 'POST', { message: 'Success' });
};

export default wrapApiHandlerWithSentry(registrationHandler, endpoint);
