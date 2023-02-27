import { useState } from 'react';
import axios from 'axios';
import { Button, Field, FormGeneric, FormPanel, FormValues } from '@mdb/flora';
import countryList from 'react-select-country-list';
import { institutionTypes, teachingStatuses } from 'lib/registration';
import CourseSyllabusField from './sub-components/CourseSyllabus';
import FormProps from './types';
import styles from './styles';

export function isRequired() {
  return function (value: string): string {
    return !value || value === '' ? 'This field is required' : '';
  };
}

const disallowedEmailDomains = [
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

export function emailPattern(checkDomains = true) {
  return function (value: string): string {
    if (value) {
      if (!value.match(/^\S+@\S+\.\S+$/)) {
        return 'Please enter a valid email address';
      } else if (
        checkDomains &&
        disallowedEmailDomains.find(domain => value.split('@')[1] === domain)
      ) {
        return 'School or Institution email is required';
      }
      return '';
    }
    return '';
  };
}

interface FieldInterface {
  name: string;
  label: string;
  options?: Array<string>;
  type?: 'text' | 'email';
  component: 'text-input' | 'select' | 'text-area' | 'checkbox';
  validators?: Array<{
    rule?: string;
    (value: string): string;
  }>;
}

const fields: Array<FieldInterface> = [
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
    name: 'courseSyllabus',
    label: 'Course Syllabus',
    component: 'text-area',
  },
  {
    name: 'agreedToEmails',
    label: 'I agree to receive emails from MongoDB, Inc.',
    component: 'checkbox',
    validators: [isRequired()],
  },
];

export default function Form({
  isOpen,
  closeForm,
}: FormProps): JSX.Element | null {
  const [formError, setFormError] = useState<boolean>(false);
  const [formSuccess, setFormSuccess] = useState<boolean>(false);
  const [courseSyllabusValue, setCourseSyllabusValue] = useState<string | File>(
    ''
  );

  async function onSubmit(form: FormValues): Promise<void> {
    // clear out existing error state if present
    if (formError) {
      setFormError(false);
    }

    const formData = new FormData();

    Object.keys(form).forEach(key => formData.append(key, form[key] || ''));
    // append file or text from CourseSyllabus component to formData since it doesn't come thru in form callback from Flora
    formData.append('courseSyllabus', courseSyllabusValue || '');

    try {
      await axios.post('/academia/api/registration', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setFormSuccess(true);
    } catch (e) {
      setFormError(true);
    }
  }

  function onClose() {
    setFormSuccess(false);
    setFormError(false);
    closeForm();
  }

  return isOpen ? (
    <div data-testid="form-modal" sx={styles.FormModalWrapper}>
      <div sx={styles.FormModal}>
        <FormPanel
          onClose={onClose}
          title="MongoDB for Educators Program Application"
          postSubmissionState={formSuccess}
          postSubmissionTitle="Thanks for joining the MongoDB Educator Community!"
          postSubmissionDescription="You have been added to our mailing list and will receive updates regarding new curriculum and relevant opportunities moving forward."
        >
          <FormGeneric
            inverse
            onSubmit={onSubmit}
            customStyles={{
              width: ['100%', '440px', null, '100%'],
            }}
          >
            {fields.map(
              ({ component, label, name, options, type, validators }) => {
                if (name === 'courseSyllabus') {
                  return (
                    <CourseSyllabusField
                      key={name}
                      setValue={setCourseSyllabusValue}
                    />
                  );
                }

                return (
                  <Field
                    key={name}
                    name={name}
                    type={type}
                    label={label}
                    component={component}
                    options={options || []}
                    validators={validators || []}
                  />
                );
              }
            )}
            {formError && (
              <span sx={styles.FormErrorMessage}>
                There was an error submitting your request. Please try again.
              </span>
            )}
            <Button
              type="submit"
              // we need to add width 100% to both elements for button to fill entire width
              customStyles={{
                width: '100%',
                marginBottom: 'inc80',
              }}
              customWrapperStyles={{
                width: '100%',
              }}
            >
              Submit my Application
            </Button>
          </FormGeneric>
        </FormPanel>
      </div>
    </div>
  ) : null;
}
