import type { NextApiRequest, NextApiResponse } from 'next';
import { wrapApiWithSentry } from '@sentry/nextjs';

import { Registration, validateRegistrationBody } from 'lib/registration';
import { uploadToAirtable } from 'lib/airtable';
import { getDBRegistration, uploadToDB } from 'lib/db';
import { parseForm, FormidableField, FormidableFile } from 'lib/parse-form';
import rateLimit, { getIP, MAX_POSTS_PER_PERIOD } from 'lib/rate-limit';
import { responseWrapper } from 'lib/utils';
import { sendEmail } from 'lib/ses';
import logger from 'lib/logger';
import { googleDriveFileUpload } from 'lib/google-drive-uploads';

const limiter = rateLimit({
  max: 600, // cache limit of 600 per 30 second period.
  ttl: 30 * 1000,
});

const endpoint = '/api/educator-program/registration';

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
    const message = 'This is a POST-only endpoint.';
    return responseWrapper(res, endpoint, 405, method, { message });
  }

  try {
    const IP = getIP(req);
    await limiter.check(res, MAX_POSTS_PER_PERIOD, IP || '');
  } catch {
    const message = 'Rate limit exceeded';
    return responseWrapper(res, endpoint, 429, method, { message });
  }

  const { fields, files } = (await parseForm(req)) as {
    fields: FormidableField | { [field: string]: boolean };
    files: { courseSyllabus: FormidableFile };
  };

  // If a file is present in Form, it will always come through as "courseSyllabus" since that is the name of the field in the body's Form Data
  if (files?.courseSyllabus) {
    const { filepath, mimetype, originalFilename } = files.courseSyllabus;

    const fileUrl = await googleDriveFileUpload(
      filepath,
      originalFilename || new Date().toJSON(),
      mimetype || 'application/pdf',
      process.env['EDUCATOR_GOOGLE_DRIVE_FOLDER_ID'] || ''
    );

    fields.courseSyllabus = fileUrl; // add fileUrl to courseSyllabus field so it can be linked in AirTable
  }

  // Typecast agreedToEmails back to boolean since "new FormData()" only sends strings or Blobs
  fields.agreedToEmails = fields.agreedToEmails === 'true';

  try {
    validateRegistrationBody(fields);
  } catch (err) {
    const message = (err as Error).message;
    return responseWrapper(res, endpoint, 400, method, { message });
  }

  const registrationToUpload = getDBRegistration(
    fields as unknown as Registration
  );

  // TODO: should really have error handling if form doesnt submit at least to Airtable?
  if (
    process.env['APP_ENV'] === 'staging' ||
    process.env['APP_ENV'] === 'production'
  ) {
    // Don't need to await these since they can fail gracefully.
    uploadToAirtable(registrationToUpload);
    uploadToDB(registrationToUpload);
    sendEmail(registrationToUpload);
  } else {
    logger.info(
      'Bypassed DB/Airtable upload and email in non-production environment.'
    );
  }

  return responseWrapper(res, endpoint, 200, method, { message: 'Success' });
};

export default wrapApiWithSentry(registrationHandler);
