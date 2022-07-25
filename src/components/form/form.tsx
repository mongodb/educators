import { Button, Field, FormGeneric, FormPanel } from '@mdb/flora';
import FormProps from './types';
import styles from './styles';

export default function Form({
  isOpen,
  onClose,
}: FormProps): JSX.Element | null {
  return isOpen ? (
    <div sx={styles.FormModal}>
      {/* @ts-ignore */}
      <FormPanel title="Join the MongoDB Educator Community" onClose={onClose}>
        <FormGeneric inverse>
          <Field
            component="text-input"
            // validators={[isRequired(), minLength(3), maxLength(10)]}
            name="firstName"
            label="First Name"
          />
          <Field
            component="text-input"
            // validators={[isRequired(), minLength(3), maxLength(20)]}
            name="lastName"
            label="Last Name"
          />
          <Field
            component="text-input"
            // validators={[isRequired(), minLength(3), pattern('email')]}
            name="email"
            label="email"
          />
          <Field
            component="select"
            name="job"
            inverse
            label="Your job function"
            options={[
              'Developer',
              'Designer',
              'Tech Lead',
              'Product Manager',
              'Recruiter',
            ]}
          />
          <Field
            component="select"
            name="teachingStatus"
            label="Teaching Status"
            options={['Full Time', 'Part Time']}
          />
          <Field
            component="text-input"
            // validators={[isRequired(), minLength(3), pattern('email')]}
            name="institution"
            label="Name of Institution"
          />
          <Field
            component="select"
            name="institutiontype"
            label="Institution Type"
            options={['College', 'High School']}
          />
          <Field
            component="select"
            name="country"
            label="Country"
            options={['United States of America', 'Canada', 'Mexico']}
          />
          <Field
            component="text-input"
            // validators={[isRequired(), minLength(3), maxLength(20)]}
            name="coursename"
            label="Course Name"
          />
          <Field
            component="text-area"
            // validators={[isRequired(), minLength(3), maxLength(100)]}
            name="courseSyllabus"
            label="Course Syllabus"
          />
          <Field
            component="checkbox"
            // validators={[mustConsent()]}
            name="terms"
            label="I agree to receive emails from MongoDB, Inc."
          />
        </FormGeneric>
        <Button
          type="submit"
          // we need to add width 100% to both elements for button to fill entire width
          customStyles={{
            width: '100%',
          }}
          customWrapperStyles={{
            width: '100%',
            marginTop: 'inc60',
            marginBottom: 'inc60',
          }}
        >
          Submit
        </Button>
      </FormPanel>
    </div>
  ) : null;
}
