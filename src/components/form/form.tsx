import { useState } from 'react';
import { Button, Field, FormGeneric, FormPanel, FormValues } from '@mdb/flora';

import Attachments from './custom-fields/attachments';
import { AttachmentsType, FormProps } from './types';

import styles from './styles';

function isOnlyWhitespace(str: string) {
  return !str.replace(/\s/g, '').length;
}

export default function Form({
  texts,
  isOpen,
  fields,
  closeForm,
  submitForm,
  multiFileUpload = false,
  onFieldChange = () => null,
}: FormProps): JSX.Element | null {
  const [isSubmitting, setIsSubmitting] = useState(false);
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

    setIsSubmitting(true);

    // we have to do a specific check for attachments since it's not a Flora field (those have their own validators)
    if (
      multiFileUpload &&
      !attachments.docs &&
      !attachments.urls.some(({ value }) => value)
    ) {
      setIsSubmitting(false);
      return setAttachments(prev => ({ ...prev, error: true }));
    } else if (
      !multiFileUpload &&
      !attachments.docs &&
      (!attachments.urls.length ||
        !attachments.urls[0]?.value ||
        isOnlyWhitespace(attachments.urls[0]?.value))
    ) {
      setIsSubmitting(false);
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

    setIsSubmitting(false);
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
              ({
                component,
                label,
                hidden,
                name,
                options,
                type,
                validators,
              }) => {
                /*
                  Ugly workaround to hide State field for any non-US country: https://jira.mongodb.org/browse/UP-6077
                  
                  This is needed because it seems like "formData" in <FormGeneric /> is only set on initial render
                  and does update when children (in this case, "fields") updates, so when the form goes to validate formData upon submission,
                  it still has the state field present in its formData (and it is required when country === "United States"), so it fails validation and does not submit.
                */
                if (hidden) {
                  return (
                    <div key={name} sx={{ display: 'none' }}>
                      <Field key={name} name={name} validators={[]} />
                    </div>
                  );
                }

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
                    onChange={({ target: { value } }) =>
                      onFieldChange(value, name)
                    }
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
              disabled={isSubmitting}
            >
              {texts.button}
            </Button>
          </FormGeneric>
        </FormPanel>
      </div>
    </div>
  ) : null;
}
