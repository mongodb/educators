import { useState } from 'react';
import axios from 'axios';
import { Button, Field, FormGeneric, FormPanel, FormValues } from '@mdb/flora';
import countryList from 'react-select-country-list';
import {
  Registration,
  jobFunctions,
  institutionTypes,
  teachingStatuses,
} from 'lib/registration';
import FormProps from './types';
import styles from './styles';

export function isRequired() {
  return function (value: string): string {
    return !value || value === '' ? 'This field is required' : '';
  };
}

export function emailPattern() {
  return function (value: string): string {
    if (value) {
      return value.match(/^\S+@\S+\.\S+$/)
        ? ''
        : 'Please enter a valid email address';
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
    label: 'Email',
    type: 'email',
    component: 'text-input',
    validators: [isRequired(), emailPattern()],
  },
  {
    name: 'jobFunction',
    label: 'Your Job Function',
    component: 'select',
    options: jobFunctions,
    validators: [isRequired()],
  },
  {
    name: 'teachingStatus',
    label: 'Teaching Status',
    component: 'select',
    options: teachingStatuses,
    validators: [isRequired()],
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

  async function onSubmit(form: FormValues): Promise<void> {
    // clear out existing error state if present
    if (formError) {
      setFormError(false);
    }

    const body = form as unknown as Registration; // converts required formValues arg type to required Registration type for POST

    try {
      await axios.post('/academia/api/registration', body);
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
          title="Join the MongoDB Educator Community"
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
              ({ component, label, name, options, type, validators }) => (
                <Field
                  key={name}
                  name={name}
                  type={type}
                  label={label}
                  component={component}
                  options={options || []}
                  validators={validators || []}
                />
              )
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
              Submit
            </Button>
          </FormGeneric>
        </FormPanel>
      </div>
    </div>
  ) : null;
}
