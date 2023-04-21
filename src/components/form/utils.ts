import axios from 'axios';
import countryList from 'react-select-country-list';

import universities from 'data/universities.json';
import { institutionTypes, teachingStatuses } from 'lib/registration';

import { AttachmentsType, FieldInterface } from './types';

// CONSTANTS
export const FORM_INIT_STATE = {
  isOpen: false,
  fields: [],
  multiFileUpload: false,
  texts: {
    title: '',
    postSubmissionTitle: '',
    postSubmissionDescription: '',
    button: '',
  },
  submitForm: () => null,
};

export const EDUCATOR_PROGRAM_FORM_TEXTS = {
  title: 'MongoDB for Educators Program Application',
  postSubmissionTitle: 'Thanks for applying to MongoDB for Educators!',
  postSubmissionDescription:
    'We will review your application and email you within 5-7 business days.',
  button: 'Submit my Application',
};

export const EDUCATOR_PROGRAM_FORM_FIELDS: Array<FieldInterface> = [
  {
    name: 'firstName',
    label: 'First Name',
    type: 'text',
    component: 'text-input',
    validators: [isRequired()],
  },
  {
    name: 'lastName',
    label: 'Last Name',
    type: 'text',
    component: 'text-input',
    validators: [isRequired()],
  },
  {
    name: 'email',
    label: 'Your School or Institution Email',
    type: 'email',
    component: 'text-input',
    validators: [isRequired(), emailPattern()],
  },
  {
    name: 'teachingStatus',
    label: 'Teaching Status',
    component: 'select',
    options: teachingStatuses,
    validators: [isRequired()],
  },
  {
    name: 'facultyProfile',
    label: 'Faculty profile/Google scholar profile URL',
    component: 'text-input',
  },
  {
    name: 'institutionName',
    label: 'Name of Institution',
    type: 'text',
    component: 'text-input',
    validators: [isRequired()],
  },
  {
    name: 'institutionType',
    label: 'Institution Type',
    component: 'select',
    options: institutionTypes,
    validators: [isRequired()],
  },
  {
    name: 'location',
    label: 'Country',
    component: 'select',
    options: countryList().getLabels() || [],
    validators: [isRequired()],
  },
  {
    name: 'courseName',
    label: 'Course Name',
    type: 'text',
    component: 'text-input',
    validators: [isRequired()],
  },
  {
    name: 'attachments',
    label: 'Course Syllabus',
  },
  {
    name: 'agreedToEmails',
    label: 'I agree to receive emails from MongoDB, Inc.',
    component: 'checkbox',
    validators: [isRequired()],
  },
];

export const PHD_FELLOWSHIP_FIELDS: Array<FieldInterface> = [
  {
    name: 'firstName',
    label: 'First Name',
    type: 'text',
    component: 'text-input',
    // validators: [isRequired()],
  },
  {
    name: 'lastName',
    label: 'Last Name',
    type: 'text',
    component: 'text-input',
    // validators: [isRequired()],
  },
  {
    name: 'address',
    label: 'Address',
    type: 'text',
    component: 'text-input',
    // validators: [isRequired()],
  },
  {
    name: 'apartment',
    label: 'Apartment, Suite, etc. (optional)',
    type: 'text',
    component: 'text-input',
  },
  {
    name: 'city',
    label: 'City',
    type: 'text',
    component: 'text-input',
    // validators: [isRequired()],
  },
  {
    name: 'state',
    label: 'State',
    component: 'select',
    options: [
      'Alabama',
      'Alaska',
      'Arizona',
      'Arkansas',
      'California',
      'Colorado',
      'Connecticut',
      'Delaware',
      'Florida',
      'Georgia',
      'Hawaii',
      'Idaho',
      'Illinois',
      'Indiana',
      'Iowa',
      'Kansas',
      'Kentucky',
      'Louisiana',
      'Maine',
      'Maryland',
      'Massachusetts',
      'Michigan',
      'Minnesota',
      'Mississippi',
      'Missouri',
      'MontanaNebraska',
      'Nevada',
      'New Hampshire',
      'New Jersey',
      'New Mexico',
      'New York',
      'North Carolina',
      'North Dakota',
      'Ohio',
      'Oklahoma',
      'Oregon',
      'PennsylvaniaRhode Island',
      'South Carolina',
      'South Dakota',
      'Tennessee',
      'Texas',
      'Utah',
      'Vermont',
      'Virginia',
      'Washington',
      'West Virginia',
      'Wisconsin',
      'Wyoming',
    ],
    // validators: [isRequired()],
  },
  {
    name: 'zipcode',
    label: 'ZIP Code',
    type: 'text',
    component: 'text-input',
    // validators: [isRequired()],
  },
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    component: 'text-input',
    // validators: [isRequired(), emailPattern()],
  },
  {
    name: 'university',
    label: 'University',
    component: 'select',
    options: universities,
    // validators: [isRequired()],
  },
  {
    name: 'program',
    label: 'Degree Program',
    type: 'text',
    component: 'text-input',
    // validators: [isRequired()],
  },
  {
    name: 'advisorName',
    label: 'Doctoral Advisor Name',
    type: 'text',
    component: 'text-input',
    // validators: [isRequired()],
  },
  {
    name: 'advisorEmail',
    label: 'Doctoral Advisor Email',
    type: 'text',
    component: 'text-input',
    // validators: [isRequired()],
  },
  {
    name: 'topic',
    label: 'Research Topic',
    type: 'text',
    component: 'text-input',
    // validators: [isRequired()],
  },
  {
    name: 'attachments',
    label: 'Attachments:',
  },
  {
    name: 'agreedToEmails',
    label: 'I agree to receive emails from MongoDB, Inc.',
    component: 'checkbox',
    // validators: [isRequired()],
  },
];

const DISALLOWED_EMAIL_DOMAINS = [
  'gmail.com',
  'icloud.com',
  'outlook.com',
  'yahoo.com',
  'yandex.ru',
  'proton.me',
  'zohomail.com',
  'rocketmail.com',
  'hotmail.com',
];

// Helper functions
export function isRequired() {
  return function (value: string): string {
    return !value || value === '' ? 'This field is required' : '';
  };
}

export function emailPattern(checkDomains = true) {
  return function (value: string): string {
    if (value) {
      if (!value.match(/^\S+@\S+\.\S+$/)) {
        return 'Please enter a valid email address';
      } else if (
        checkDomains &&
        DISALLOWED_EMAIL_DOMAINS.find(domain => value.split('@')[1] === domain)
      ) {
        return 'School or Institution email is required';
      }
      return '';
    }
    return '';
  };
}

export async function submitEducatorProgramForm(
  formData: FormData,
  attachments: AttachmentsType
) {
  // append file or text from CourseSyllabus component to formData since it doesn't come thru in form callback from Flora
  formData.append(
    'courseSyllabus',
    attachments.docs ? attachments.docs[0] : attachments.urls[0].value
  );

  return await axios.post(
    '/academia/api/educator-program/registration',
    formData,
    {
      headers: { 'Content-Type': 'multipart/form-data' },
    }
  );
}

export async function submitPhdFellowshipForm(formData: FormData) {
  // eslint-disable-next-line
  console.log('form data in phd fellowship submit func', formData);
  return await axios.post(
    '/academia/api/phd-fellowship/application',
    formData,
    {
      headers: { 'Content-Type': 'multipart/form-data' },
    }
  );
}
