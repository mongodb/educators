import type { NextApiRequest, NextApiResponse } from 'next';
import { withSentry } from '@sentry/nextjs';

import { parseForm, FormidableField, FormidableFile } from 'lib/parse-form';
import rateLimit, { getIP, MAX_POSTS_PER_PERIOD } from 'lib/rate-limit';
import { responseWrapper } from 'lib/utils';
import googleSheetFileUpload from 'lib/google-sheet-upload';
import {
  googleDriveFileUpload,
  googleDriveFolderUpload,
} from 'lib/google-drive-uploads';

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
            files.uploads[i].originalFilename || new Date().toJSON(),
            files.uploads[i].mimetype || 'application/pdf',
            applicantFolderId
          );
        }
      } else {
        await googleDriveFileUpload(
          files.uploads.filepath,
          files.uploads.originalFilename || new Date().toJSON(),
          files.uploads.mimetype || 'application/pdf',
          applicantFolderId
        );
      }
    }
  }

  await googleSheetFileUpload(
    process.env['PHD_FELLOWSHIP_SPREADSHEET_ID'],
    'Applications',
    // explicitly map fields so we can have control of the order of columns in the Google Sheet
    [
      fields.firstName,
      fields.lastName,
      fields.address,
      fields.apartment,
      fields.city,
      fields.state,
      fields.zipcode,
      `=HYPERLINK(mailto:${fields.email})`,
      fields.university,
      fields.program,
      fields.advisorName,
      `=HYPERLINK(mailto:${fields.advisorEmail})`,
      fields.topic,
      applicantFolderId
        ? `https://drive.google.com/drive/folders/${applicantFolderId}`
        : '',
      Array.isArray(fields.urls)
        ? fields.urls.join(',')
        : `=HYPERLINK(${fields.urls})`, // TODO: figure out how to hyperlink multiple
    ] as string[]
  );

  await googleSheetFileUpload(
    process.env['PHD_FELLOWSHIP_SPREADSHEET_ID'],
    'Applicants Status',
    [fields.firstName, fields.lastName] as string[]
  );

  return responseWrapper(res, endpoint, 200, 'POST', { message: 'Success' });
};

export default withSentry(registrationHandler);
