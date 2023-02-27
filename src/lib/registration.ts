// These are just arrays to be used by the form.
export const teachingStatuses = [
  'Currently Teaching MongoDB',
  'Interested in Teaching MongoDB',
  'Just Curious',
];

export const institutionTypes = [
  'Bootcamp',
  'High School',
  'University / College',
];

export interface Registration {
  firstName: string;
  lastName: string;
  institutionName: string;
  institutionType: string;
  email: string;
  facultyProfile: string;
  agreedToEmails: boolean;
  location: string;
  courseName: string;
  courseSyllabus: string;
  teachingStatus: string;
}

const registrationFieldsToTypes: { [key: string]: string } = {
  firstName: 'string',
  lastName: 'string',
  institutionName: 'string',
  institutionType: 'string',
  email: 'string',
  facultyProfile: 'string',
  agreedToEmails: 'boolean',
  location: 'string',
  courseName: 'string',
  courseSyllabus: 'string',
  teachingStatus: 'string',
};

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export const validateRegistrationBody = (body: any) => {
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
