import { useState } from 'react';
import { Button, Field, FormGeneric, FormPanel, FormValues } from '@mdb/flora';

import Attachments from './custom-fields/attachments';
import { AttachmentsType, FormProps } from './types';

import styles from './styles';

export default function Form({
  texts,
  isOpen,
  fields,
  closeForm,
  submitForm,
  multiFileUpload = false,
}: FormProps): JSX.Element | null {
  const [formError, setFormError] = useState<boolean>(false);
  const [formSuccess, setFormSuccess] = useState<boolean>(false);
  const [attachments, setAttachments] = useState<AttachmentsType>({
    docs: null,
    urls: [],
    error: false,
  });

  async function onSubmit(form: FormValues): Promise<void> {
    // clear out existing error state if present
    if (formError) {
      setFormError(false);
    }

    // we have to do a specific check for attachments since it's not a Flora field (those have their own validators)
    if (
      multiFileUpload &&
      !attachments.docs &&
      !attachments.urls.some(({ value }) => value)
    ) {
      return setAttachments(prev => ({ ...prev, error: true }));
    } else if (
      !multiFileUpload &&
      !attachments.docs &&
      !attachments.urls[0].value
    ) {
      return setAttachments(prev => ({ ...prev, error: true }));
    }

    const formData = new FormData();
    Object.keys(form).forEach(key => formData.append(key, form[key] || ''));

    try {
      await submitForm(formData, attachments);
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
          title={texts.title}
          subtitle={texts.subtitle || ''}
          postSubmissionState={formSuccess}
          onPostSubmissionButtonClick={onClose}
          postSubmissionTitle={texts.postSubmissionTitle}
          postSubmissionDescription={texts.postSubmissionDescription}
          postSubmissionButtonText={texts.postSubmissionButtonText || ''}
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
                if (name === 'attachments') {
                  return (
                    <Attachments
                      key={name}
                      label={label}
                      prompt={texts.attachments}
                      multiFile={multiFileUpload}
                      attachments={attachments}
                      setAttachments={setAttachments}
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
              {texts.button}
            </Button>
          </FormGeneric>
        </FormPanel>
      </div>
    </div>
  ) : null;
}
