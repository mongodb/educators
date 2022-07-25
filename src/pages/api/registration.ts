import type { NextApiRequest, NextApiResponse } from 'next';

import { Registration, validateRegistrationBody } from 'src/lib/registration';
import { uploadToAirtable } from 'src/lib/airtable';
import { uploadToAppServices } from 'src/lib/app-services';

const registrationHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  if (req.method !== 'POST') {
    return res.status(405).send('This is a POST-only endpoint.');
  }
  try {
    validateRegistrationBody(req.body);
  } catch (err: any) {
    return res.status(400).send(err.message);
  }

  // Don't need to await these since they can fail gracefully.
  uploadToAirtable(req.body as Registration);
  uploadToAppServices(req.body as Registration);

  return res.status(200).json({});
};

export default registrationHandler;
