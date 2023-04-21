import theme from '@mdb/flora/theme';
import { ChangeEvent, useState } from 'react';
import { ESystemIconNames, SystemIcon, TypographyScale } from '@mdb/flora';

import { AttachmentsProps } from '../types';

import styles from './styles';

const AttachmentsField = ({
  label,
  prompt,
  multiFile,
  setAttachments,
  attachments: { urls, error },
}: AttachmentsProps) => {
  const [showDocUpload, setShowDocUpload] = useState(false);

  function onUploadDocClick() {
    if (error) {
      setAttachments(prev => ({ ...prev, error: false }));
    }

    if (!multiFile && urls.length) {
      setAttachments(prev => ({ ...prev, urls: [] }));
    }

    if (!showDocUpload) {
      setShowDocUpload(prev => !prev);
    }
  }

  function onEnterUrlClick() {
    if (error) {
      setAttachments(prev => ({ ...prev, error: false }));
    }

    if (!multiFile && showDocUpload) {
      setShowDocUpload(false);
      setAttachments(prev => ({ ...prev, docs: null }));
    }

    if (!urls.length) {
      setAttachments(prev => ({ ...prev, urls: [{ id: 1, value: '' }] }));
    }
  }

  function onFileInputChange({
    target: { files },
  }: ChangeEvent<HTMLInputElement>) {
    if (files) {
      setAttachments(prev => ({ ...prev, docs: files, error: false }));
    }
  }

  function onTextInputBlur(e: ChangeEvent<HTMLInputElement>, inputId: number) {
    if (error) {
      setAttachments(prev => ({ ...prev, error: false }));
    }

    setAttachments(prev => ({
      ...prev,
      urls: prev.urls.map(url => {
        if (url.id === inputId) {
          url.value = e.target.value;
        }
        return url;
      }),
    }));
  }

  function onRemoveTextInput(inputId: number) {
    setAttachments(prev => ({
      ...prev,
      urls: prev.urls.filter(({ id }) => id !== inputId),
    }));
  }

  return (
    <div>
      <TypographyScale inverse sx={styles.AttachmentsTitle}>
        {label}
      </TypographyScale>
      {prompt && (
        <TypographyScale
          inverse
          variant="body3"
          sx={styles.AttachmentsPromptText}
        >
          {prompt}
        </TypographyScale>
      )}
      <button
        type="button"
        onClick={onUploadDocClick}
        sx={{
          ...styles.AttachmentsBtn,
          ...(error && { color: theme.colors.red30 }),
        }}
      >
        {multiFile ? 'Upload documents' : 'Upload a document'}
      </button>
      <TypographyScale
        inverse
        variant="body3"
        sx={styles.AttachmentsOptionText}
      >
        {multiFile ? 'and/or' : 'or'}
      </TypographyScale>
      <button
        type="button"
        onClick={onEnterUrlClick}
        sx={{
          ...styles.AttachmentsBtn,
          ...(error && { color: theme.colors.red30 }),
        }}
      >
        {multiFile ? 'Enter Web URL(s)' : 'Enter a Web URL'}
      </button>
      {showDocUpload && (
        <label htmlFor="syllabus-upload">
          <input
            type="file"
            multiple={multiFile}
            accept=".pdf, .doc, .docx"
            name="document-upload"
            data-testid="document-upload"
            sx={styles.AttachmentsFileUpload}
            onChange={onFileInputChange}
          />
        </label>
      )}
      {urls.map(({ id }) => {
        return (
          <div key={id} sx={styles.AttachmentsWebUrlInputWrapper}>
            <div sx={styles.AttachmentsWebUrlInput}>
              <input
                type="text"
                placeholder="Enter Web URL"
                name={`url-upload-${id}`}
                data-testid={`url-upload-${id}`}
                onBlur={e => onTextInputBlur(e, id)}
              />
            </div>
            <button
              type="button"
              sx={styles.AttachmentsRemoveInput}
              onClick={() => onRemoveTextInput(id)}
            >
              <SystemIcon
                inverse
                size="medium"
                name={ESystemIconNames.CIRCLE_CLOSE}
              />
            </button>
          </div>
        );
      })}
      {multiFile && urls.length >= 1 && urls.length < 6 && (
        <button
          type="button"
          sx={styles.AttachmentsAddInput}
          onClick={() =>
            setAttachments(prev => ({
              ...prev,
              urls: [...prev.urls, { id: prev.urls.length + 1, value: '' }],
            }))
          }
        >
          <SystemIcon name={ESystemIconNames.PLUS} /> Add Another URL
        </button>
      )}
      {error && (
        <TypographyScale
          inverse
          color="secondary"
          variant="body4"
          sx={styles.AttachmentsErrorMsg}
        >
          This field is required
        </TypographyScale>
      )}
    </div>
  );
};

export default AttachmentsField;
