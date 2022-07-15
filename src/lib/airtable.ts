import Airtable, { FieldSet } from 'airtable';
import { Registration } from 'src/lib/registration';

// Using field IDs as recommended by the Airtable API docs in case of changes to field names.
export interface AirtableRegistration extends FieldSet {
	fldYmXYcslTbizpfS: string; // First Name
	fldIONH4fC6lue54Y: string; // Last Name
	fldSmiHwvKFiPNtKn: string; // Insitution Name
	fldEdsAy7JOR4WqOj: string; // Institution Type
	fldRCWRElfBvOrIH8: string; // Email
	flddAXoswHGxn7NzY: boolean; // Agreed to receive emails
	fld16FhTciYWYb3pp: string; // Date registration (CEST)
	fldTARrXnDThWtF8w: string; // Location
	fldzkKlcSXWSIKLS6: string; // Course Name
	fldHcAvfcjxozmQlG: string; // Course Syllabus
	fldZ3KwWPX16ZXwTl: string; // Job Function
	fld5o6nNVtTkyOKNM: string; // Teaching Status
}

const getAirtableRegistration = (reg: Registration): AirtableRegistration => ({
	fldYmXYcslTbizpfS: reg.firstName,
	fldIONH4fC6lue54Y: reg.lastName,
	fldSmiHwvKFiPNtKn: reg.institutionName,
	fldEdsAy7JOR4WqOj: reg.institutionType,
	fldRCWRElfBvOrIH8: reg.email,
	flddAXoswHGxn7NzY: reg.agreedToEmails,
	fld16FhTciYWYb3pp: new Date().toISOString().split('T')[0],
	fldTARrXnDThWtF8w: reg.location,
	fldzkKlcSXWSIKLS6: reg.courseName,
	fldHcAvfcjxozmQlG: reg.courseSyllabus,
	fldZ3KwWPX16ZXwTl: reg.jobFunction,
	fld5o6nNVtTkyOKNM: reg.teachingStatus,
});

export const uploadToAirtable = async (
	body: Registration
): Promise<string | undefined> => {
	if (!process.env['IS_PROD']) {
		console.log('Bypassed Airtable upload in non-production environment.');
		return;
	}

	const baseId = process.env['AIRTABLE_BASE_ID'];
	if (!baseId) {
		throw Error('AIRTABLE_BASE_ID is not defined');
	}

	const key = process.env['AIRTABLE_API_KEY'];
	if (!key) {
		throw Error('AIRTABLE_API_KEY is not defined');
	}

	const payload = getAirtableRegistration(body);
	const base = new Airtable({ apiKey: key }).base(baseId);
	base('DevHub Registrations').create(payload, (err, record) => {
		if (err) {
			console.error(err); // Would be nice to have some alert for this scenario.
			return;
		}
		console.log(`Successfully uploaded to Airtable, record ${record?.getId()}`);
	});
};
