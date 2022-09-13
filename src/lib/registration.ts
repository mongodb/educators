// These are just arrays to be used by the form.
export const jobFunctions = [
  'Professor',
  'Teaching Assistant',
  'Bootcamp Instructor',
  'Other',
];

export const teachingStatuses = [
  'Currently Teaching MongoDB',
  'Interested in Teaching MongoDB',
  'Just Curious',
];

export const institutionTypes = [
  'Bootcamp',
  'Online Course',
  'High School',
  'University / College',
];

export interface Registration {
  firstName: string;
  lastName: string;
  institutionName: string;
  institutionType: string;
  email: string;
  agreedToEmails: boolean;
  location: string;
  courseName: string;
  courseSyllabus: string;
  jobFunction: string;
  teachingStatus: string;
}

const registrationFieldsToTypes: { [key: string]: string } = {
  firstName: 'string',
  lastName: 'string',
  institutionName: 'string',
  institutionType: 'string',
  email: 'string',
  agreedToEmails: 'boolean',
  location: 'string',
  courseName: 'string',
  courseSyllabus: 'string',
  jobFunction: 'string',
  teachingStatus: 'string',
};

/* eslint-disable  @typescript-eslint/no-explicit-any */
export const validateRegistrationBody = (body: any) => {
  /* eslint-enable  @typescript-eslint/no-explicit-any */
  body.courseSyllabus = body.courseSyllabus || ''; // unrequired textarea value can be undefined. If so we convert it to a blank string.
  const bodyKeys = Object.keys(body);
  for (const key in registrationFieldsToTypes) {
    if (!bodyKeys.includes(key)) {
      throw Error(`${key} is missing from the registration body`);
    }
    if (typeof body[key] !== registrationFieldsToTypes[key]) {
      throw Error(
        `${key} must be of type ${
          registrationFieldsToTypes[key]
        }, not ${typeof body[key]}`
      );
    }
    if (['firstName', 'lastName', 'email'].includes(key) && !body[key]) {
      throw Error(`${key} is required`);
    }
  }

  if (!teachingStatuses.includes(body.teachingStatus)) {
    throw Error(
      `${body.teachingStatus} is not a valid value for teachingStatus`
    );
  }

  if (!institutionTypes.includes(body.institutionType)) {
    throw Error(
      `${body.institutionType} is not a valid value for institutionType`
    );
  }
};
