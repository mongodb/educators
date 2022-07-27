import type { NextApiRequest, NextApiResponse } from 'next';

import { Registration, validateRegistrationBody } from 'lib/registration';
import { uploadToAirtable } from 'lib/airtable';
import { uploadToAppServices } from 'lib/app-services';

import rateLimit, { getIP, MAX_POSTS_PER_PERIOD } from 'lib/rate-limit';

const limiter = rateLimit({
  max: 600, // cache limit of 600 per 30 second period.
  ttl: 30 * 1000,
});

const registrationHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  if (req.method !== 'POST') {
    return res.status(405).send('This is a POST-only endpoint.');
  }

  try {
    const IP = getIP(req);
    await limiter.check(res, MAX_POSTS_PER_PERIOD, IP || '');
  } catch {
    return res.status(500).json({ error: { message: 'Something went wrong' } });
  }

  try {
    validateRegistrationBody(req.body);
  } catch (err) {
    return res.status(400).send((err as Error).message);
  }

  // Don't need to await these since they can fail gracefully.
  uploadToAirtable(req.body as Registration);
  uploadToAppServices(req.body as Registration);

  return res.status(200).json({});
};

export default registrationHandler;
