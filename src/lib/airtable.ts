import * as Sentry from '@sentry/nextjs';
import Airtable, { FieldSet } from 'airtable';
import { DBRegistration } from './db';

import logger from './logger';

// Using field IDs as recommended by the Airtable API docs in case of changes to field names.
interface AirtableRegistration extends FieldSet {
  fldYmXYcslTbizpfS: string; // First Name
  fldIONH4fC6lue54Y: string; // Last Name
  fldSmiHwvKFiPNtKn: string; // Insitution Name
  fldEdsAy7JOR4WqOj: string; // Institution Type
  fldRCWRElfBvOrIH8: string; // Email
  fld43QElxh5HlXOqA: string; // Faculuty Profile URL
  flddAXoswHGxn7NzY: boolean; // Agreed to receive emails
  fld16FhTciYWYb3pp: string; // Date registration (CEST)
  fldTARrXnDThWtF8w: string; // Location
  fldzkKlcSXWSIKLS6: string; // Course Name
  fldHcAvfcjxozmQlG: string; // Course Syllabus
  fld5o6nNVtTkyOKNM: string; // Teaching Status
}

const getAirtableRegistration = (
  reg: DBRegistration
): AirtableRegistration => ({
  fldYmXYcslTbizpfS: reg.first_name,
  fldIONH4fC6lue54Y: reg.last_name,
  fldSmiHwvKFiPNtKn: reg.institution_name,
  fldEdsAy7JOR4WqOj: reg.institution_type,
  fldRCWRElfBvOrIH8: reg.email,
  fld43QElxh5HlXOqA: reg.faculty_profile,
  flddAXoswHGxn7NzY: reg.agree_to_email,
  fld16FhTciYWYb3pp: new Date(reg.submit_date).toISOString().split('T')[0],
  fldTARrXnDThWtF8w: reg.country,
  fldzkKlcSXWSIKLS6: reg.course_name,
  fldHcAvfcjxozmQlG: reg.course_syllabus,
  fld5o6nNVtTkyOKNM: reg.instructor_interests,
});

export const uploadToAirtable = async (body: DBRegistration): Promise<void> => {
  const baseId = process.env['AIRTABLE_BASE_ID'];
  if (!baseId) {
    Sentry.captureException(new Error('AIRTABLE_BASE_ID is not defined'));
    return;
  }

  const key = process.env['AIRTABLE_API_KEY'];
  if (!key) {
    Sentry.captureException(new Error('AIRTABLE_API_KEY is not defined'));
    return;
  }

  const payload = getAirtableRegistration(body);
  const base = new Airtable({ apiKey: key }).base(baseId);

  const extra = { extra: { body: payload } };
  base('DevHub Registrations').create(payload, (err, record) => {
    if (err) {
      const message = `Failed to upload registration to Airtable: ${
        (err as Error).message
      }`;
      Sentry.captureException(new Error(message), extra);
      logger.error(err);
      return;
    }
    Sentry.captureMessage(`Successfully uploaded to Airtable`, extra);
    logger.info(`Successfully uploaded to Airtable, record ${record?.getId()}`);
  });
};
