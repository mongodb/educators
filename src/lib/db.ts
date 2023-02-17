import * as Sentry from '@sentry/nextjs';
import { Registration } from 'lib/registration';
import { MongoClient } from 'mongodb';

import logger from './logger';

export interface DBRegistration {
  first_name: string;
  last_name: string;
  email: string;
  institution_name: string;
  institution_type: string;
  agree_to_email: boolean;
  instructor_interests: string;
  country: string;
  course_name: string;
  course_syllabus: string;
  submit_date: string;
}

export const getDBRegistration = (reg: Registration): DBRegistration => ({
  first_name: reg.firstName,
  last_name: reg.lastName,
  institution_name: reg.institutionName,
  institution_type: reg.institutionType,
  email: reg.email,
  agree_to_email: reg.agreedToEmails,
  country: reg.location,
  course_name: reg.courseName,
  course_syllabus: reg.courseSyllabus,
  instructor_interests: reg.teachingStatus,
  submit_date: Date(),
});

export const uploadToDB = async (body: DBRegistration): Promise<void> => {
  const url = process.env['MONGODB_URL'];
  if (!url) {
    Sentry.captureException(new Error('MONGODB_URL is not defined'));
    return;
  }

  const extra = { extra: { body } };

  try {
    const client = new MongoClient(url);
    const collection = client.db('devhub').collection('academia');
    await collection.insertOne(body);
  } catch (err) {
    const message = `Failed to upload registration to DB: ${
      (err as Error).message
    }`;
    Sentry.captureException(new Error(message), extra);
    logger.error(message);
    return;
  }
  Sentry.captureMessage('Successfully uploaded registration to DB', extra);
  logger.info('Successfully uploaded registration to DB.');
};
