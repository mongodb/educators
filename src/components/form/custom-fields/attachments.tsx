import theme from '@mdb/flora/theme';
import { ChangeEvent, useState } from 'react';
import { TypographyScale } from '@mdb/flora';

import { Attachments } from '../types';

import styles from './styles';

const AttachmentsField = ({ label, hasError, setValue }: Attachments) => {
  const [field, setField] = useState<'fileUpload' | 'webUrl' | ''>('');
  const [inputFocus, setInputFocus] = useState(false);

  function onUploadDocClick() {
    setField('fileUpload');
    setValue({ value: '', error: false });
  }

  function onEnterUrlClick() {
    setField('webUrl');
    setValue({ value: '', error: false });
  }

  function onFileInputChange({
    target: { files },
  }: ChangeEvent<HTMLInputElement>) {
    if (files) {
      setValue({ value: files[0], error: false });
    }
  }

  function onTextInputBlur({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) {
    setInputFocus(false);
    setValue({ value, error: false });
  }

  return (
    <div>
      <TypographyScale inverse sx={styles.AttachmentsTitle}>
        {label}
      </TypographyScale>
      <button
        type="button"
        onClick={onUploadDocClick}
        sx={{
          ...styles.AttachmentsBtn,
          ...(hasError && { color: theme.colors.red30 }),
        }}
      >
        Upload a document
      </button>
      <TypographyScale
        inverse
        variant="body3"
        sx={styles.AttachmentsPromptText}
      >
        or
      </TypographyScale>
      <button
        type="button"
        onClick={onEnterUrlClick}
        sx={{
          ...styles.AttachmentsBtn,
          ...(hasError && { color: theme.colors.red30 }),
        }}
      >
        Enter a Web URL
      </button>
      {field === 'fileUpload' && (
        <label htmlFor="syllabus-upload">
          <input
            type="file"
            accept=".pdf, .doc, .docx"
            id="file-syllabus-upload"
            name="file-syllabus-upload"
            data-testid="file-syllabus-upload"
            sx={styles.AttachmentsFileUpload}
            onChange={onFileInputChange}
          />
        </label>
      )}
      {field === 'webUrl' && (
        <div
          sx={{
            ...styles.AttachmentsWebUrlInput,
            ...(inputFocus && { ...styles.AttachmentsWebUrlInputFocus }),
          }}
        >
          <input
            type="text"
            placeholder="Enter Web URL"
            id="url-syllabus-upload"
            name="url-syllabus-upload"
            data-testid="url-syllabus-upload"
            onFocus={() => setInputFocus(true)}
            onBlur={onTextInputBlur}
          />
        </div>
      )}
      {hasError && (
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
