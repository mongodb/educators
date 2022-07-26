import { Button, Field, FormGeneric, FormPanel } from '@mdb/flora';
import {
  jobFunctions,
  institutionTypes,
  teachingStatuses,
} from 'src/lib/registration';
import FormProps from './types';
import styles from './styles';

interface FieldInterface {
  name: string;
  label: string;
  options?: Array<string>;
  component: 'text-input' | 'select' | 'text-area' | 'checkbox';
}

const fields: Array<FieldInterface> = [
  {
    name: 'firstName',
    label: 'First Name',
    component: 'text-input',
  },
  {
    name: 'lastName',
    label: 'Last Name',
    component: 'text-input',
  },
  {
    name: 'email',
    label: 'Email',
    component: 'text-input',
  },
  {
    name: 'jobFunction',
    label: 'Your Job Function',
    component: 'select',
    options: jobFunctions,
  },
  {
    name: 'teachingStatus',
    label: 'Teaching Status',
    component: 'select',
    options: teachingStatuses,
  },
  {
    name: 'institutionName',
    label: 'Name of Institution',
    component: 'text-input',
  },
  {
    name: 'institutionType',
    label: 'Institution Type',
    component: 'select',
    options: institutionTypes,
  },
  {
    name: 'location',
    label: 'Country',
    component: 'select',
    options: ['United States of America', 'Canada', 'Mexico'], // TODO: proper list of these - fetched data?
  },
  {
    name: 'courseName',
    label: 'Course Name',
    component: 'text-input',
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
  },
];

export default function Form({
  isOpen,
  onClose,
}: FormProps): JSX.Element | null {
  return isOpen ? (
    <div data-testid="form-modal" sx={styles.FormModalWrapper}>
      <div sx={styles.FormModal}>
        {/* @ts-ignore */}
        <FormPanel
          onClose={onClose}
          title="Join the MongoDB Educator Community"
        >
          <FormGeneric
            inverse
            customStyles={{
              width: ['100%', '440px', null, '100%'],
            }}
          >
            {fields.map(({ name, label, component, options }) => (
              <Field
                key={name}
                name={name}
                label={label}
                component={component}
                options={options || []}
              />
            ))}
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
