import type { NextApiRequest, NextApiResponse } from 'next';
import { withSentry } from '@sentry/nextjs';

import { Registration, validateRegistrationBody } from 'lib/registration';
import { uploadToAirtable } from 'lib/airtable';
import { getDBRegistration, uploadToDB } from 'lib/db';

import rateLimit, { getIP, MAX_POSTS_PER_PERIOD } from 'lib/rate-limit';
import { responseWrapper } from 'lib/utils';
import { sendEmail } from 'lib/ses';
import logger from 'lib/logger';

const limiter = rateLimit({
  max: 600, // cache limit of 600 per 30 second period.
  ttl: 30 * 1000,
});

const endpoint = '/api/registration';

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

  try {
    validateRegistrationBody(req.body);
  } catch (err) {
    const message = (err as Error).message;
    return responseWrapper(res, endpoint, 400, method, { message });
  }
  const registrationToUpload = getDBRegistration(req.body as Registration);

  const message = 'Success';

  if (process.env['APP_ENV'] === 'production') {
    // Don't need to await these since they can fail gracefully.
    uploadToAirtable(registrationToUpload);
    uploadToDB(registrationToUpload);
    sendEmail(registrationToUpload);
  } else {
    logger.info(
      'Bypassed DB/Airtable upload and email in non-production environment.'
    );
  }

  return responseWrapper(res, endpoint, 200, method, { message });
};

export default withSentry(registrationHandler);
