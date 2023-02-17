import { validateRegistrationBody } from './registration';

describe('Registration', () => {
  it('validates correct registration form input', () => {
    const body = {
      firstName: 'string',
      lastName: 'string',
      institutionName: 'string',
      institutionType: 'Bootcamp',
      email: 'string',
      agreedToEmails: false,
      location: 'string',
      courseName: 'string',
      courseSyllabus: 'string',
      teachingStatus: 'Just Curious',
    };
    expect(() => validateRegistrationBody(body)).not.toThrow();
  });
  it('invalidates wrong types', () => {
    const body = {
      firstName: false,
      lastName: 'string',
      institutionName: 'string',
      institutionType: 'Bootcamp',
      email: 'string',
      agreedToEmails: false,
      location: 'string',
      courseName: 'string',
      courseSyllabus: 'string',
      teachingStatus: 'Just Curious',
    };
    expect(() => validateRegistrationBody(body)).toThrowError(
      'firstName must be of type string, not boolean'
    );
  });
  it('invalidates missing entry', () => {
    const body = {
      lastName: 'string',
      institutionName: 'string',
      institutionType: 'Bootcamp',
      email: 'string',
      agreedToEmails: false,
      location: 'string',
      courseName: 'string',
      courseSyllabus: 'string',
      teachingStatus: 'Just Curious',
    };
    expect(() => validateRegistrationBody(body)).toThrowError(
      'firstName is missing from the registration body'
    );
  });
  it('invalidates bad entry', () => {
    const body = {
      firstName: 'string',
      lastName: 'string',
      institutionName: 'string',
      institutionType: 'foo',
      email: 'string',
      agreedToEmails: false,
      location: 'string',
      courseName: 'string',
      courseSyllabus: 'string',
      teachingStatus: 'Just Curious',
    };
    expect(() => validateRegistrationBody(body)).toThrowError(
      'foo is not a valid value for institutionType'
    );
  });
});
