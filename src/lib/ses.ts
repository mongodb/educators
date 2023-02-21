import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';
import * as Sentry from '@sentry/nextjs';
import { DBRegistration } from './db';
import logger from './logger';

// SES user is on the 10gen-noc AWS account.

export const sendEmail = async (body: DBRegistration) => {
  const accessKeyId = process.env.SES_USER_ACCESS_KEY_ID;
  const secretAccessKey = process.env.SES_USER_SECRET_ACCESS_KEY;
  if (!accessKeyId || !secretAccessKey) {
    Sentry.captureException(
      new Error(
        'SES_USER_ACCESS_KEY_ID or SES_USER_SECRET_ACCESS_KEY is not defined, unable to send emails'
      )
    );
    return;
  }
  const extra = { extra: { body } };
  try {
    const client = new SESClient({
      region: 'us-east-1',
      credentials: {
        accessKeyId,
        secretAccessKey,
      },
    });
    const command = new SendEmailCommand({
      Source: 'DevHub Platform <devhubplatform@mongodb.com>',
      Destination: { ToAddresses: ['academia@mongodb.com'] },
      Message: {
        Body: {
          Html: {
            Charset: 'UTF-8',
            Data: `
            <h1>DevHub: New Academia Registration</h1>
            <p><strong>First Name:</strong> ${body.first_name}</p>
            <p><strong>Last Name:</strong> ${body.last_name}</p>
            <p><strong>Email:</strong> ${body.email}</p>
            <p><strong>Institution Name:</strong> ${body.institution_name}</p>
            <p><strong>Institution Type:</strong> ${body.institution_type}</p>
            <p><strong>I am :</strong> ${body.instructor_interests}</p>
            <p><strong>Country</strong>${body.country}</p>
            <p><strong>Course Name</strong>${body.course_name}</p>
            <p><strong>Course Syllabus</strong>${body.course_syllabus}</p>
            <p><strong>Submitted At:</strong> ${body.submit_date}</p>
            <p><strong>Agree to Email:</strong> ${body.agree_to_email}</p>
            `,
          },
        },
        Subject: {
          Charset: 'UTF-8',
          Data: '[DevHub] Academia Registration',
        },
      },
    });

    await client.send(command);
  } catch (err) {
    const message = `Failed to send email for registration: ${
      (err as Error).message
    }`;
    Sentry.captureException(new Error(message), extra);
    logger.error(message);
    return;
  }
  Sentry.captureMessage('Successfully sent email for registration', extra);
  logger.info('Successfully sent email for registration.');
};
