import { Registration } from 'lib/registration';
import axios from 'axios';

import logger from './logger';

interface AppServicesRegistration {
  first_name: string;
  last_name: string;
  _email: string;
  institution_name: string;
  institution_type: string;
  agree_to_email: boolean;
  instructor_type: string;
  instructor_interests: string;
  country: string;
  course_name: string;
  course_syllabus: string;
}

const getAppServicesRegistration = (
  reg: Registration
): AppServicesRegistration => ({
  first_name: reg.firstName,
  last_name: reg.lastName,
  institution_name: reg.institutionName,
  institution_type: reg.institutionType,
  _email: reg.email,
  agree_to_email: reg.agreedToEmails,
  country: reg.location,
  course_name: reg.courseName,
  course_syllabus: reg.courseSyllabus,
  instructor_type: reg.jobFunction,
  instructor_interests: reg.teachingStatus,
});

export const uploadToAppServices = async (
  body: Registration
): Promise<void> => {
  if (process.env['APP_ENV'] !== 'production') {
    logger.info('Bypassed App Services upload in non-production environment.');
    return;
  }

  const url = process.env['REGISTRATION_API_URL'];
  if (!url) {
    throw Error('REGISTRATION_API_URL is not defined');
  }

  const key = process.env['REGISTRATION_API_KEY'];
  if (!key) {
    throw Error('REGISTRATION_API_KEY is not defined');
  }

  const headers = { 'Content-Type': 'application/json', 'api-key': key };
  const payload = getAppServicesRegistration(body);
  try {
    await axios.post(url, payload, { headers });
  } catch (err) {
    logger.error(
      `Failed to upload registration to App Services: ${(err as Error).message}`
    );
    return;
  }
  logger.info('Successfully uploaded registration to App Services.');
};
