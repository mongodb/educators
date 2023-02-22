import { useState } from 'react';
import { TypographyScale } from '@mdb/flora';

import styles from './styles';

type FieldType = 'fileUpload' | 'webUrl' | '';

export default function CourseSyllabusField() {
  const [field, setField] = useState<FieldType>('');
  const [inputFocus, setInputFocus] = useState(false);

  function onUploadDocClick() {
    setField('fileUpload');
  }

  function onEnterUrlClick() {
    setField('webUrl');
  }

  function handleOnChange(e) {
    console.log('hello', e.target.files);
  }

  return (
    <div>
      <TypographyScale inverse sx={styles.SyllabusTitle}>
        Course Syllabus
      </TypographyScale>
      <button type="button" onClick={onUploadDocClick} sx={styles.SyllabusBtn}>
        Upload a document
      </button>
      <TypographyScale inverse variant="body3" sx={styles.SyllabusPromptText}>
        or
      </TypographyScale>
      <button type="button" onClick={onEnterUrlClick} sx={styles.SyllabusBtn}>
        Enter a Web URL
      </button>
      {field === 'fileUpload' && (
        // TODO: need to add what types of files are allowed to be uploaded
        <label htmlFor="syllabus-upload" sx={styles.SyllabusFileUpload}>
          <input
            id="syllabus-upload"
            type="file"
            name="my-name-dux"
            onChange={handleOnChange}
          />
        </label>
      )}
      {field === 'webUrl' && (
        <div
          sx={{
            ...styles.SyllabusWebUrlInput,
            ...(inputFocus && { ...styles.SyllabusWebUrlInputFocus }),
          }}
        >
          <input
            type="text"
            name="my-name"
            id="my-name"
            placeholder="Enter Web URL"
            onFocus={() => setInputFocus(true)}
            onBlur={() => setInputFocus(false)}
          />
        </div>
      )}
    </div>
  );
}
