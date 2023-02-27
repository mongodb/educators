import { ChangeEvent, useState } from 'react';
import { TypographyScale } from '@mdb/flora';

import styles from './styles';

type FieldType = 'fileUpload' | 'webUrl' | '';

const CourseSyllabusField = ({
  setValue,
}: {
  setValue: (val: string | File) => void;
}) => {
  const [field, setField] = useState<FieldType>('');
  const [inputFocus, setInputFocus] = useState(false);

  function onUploadDocClick() {
    setField('fileUpload');
  }

  function onEnterUrlClick() {
    setField('webUrl');
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
        <label htmlFor="syllabus-upload">
          <input
            type="file"
            accept=".pdf, .doc, .docx"
            id="file-syllabus-upload"
            name="file-syllabus-upload"
            sx={styles.SyllabusFileUpload}
            onChange={({
              target: { files },
            }: ChangeEvent<HTMLInputElement>) => {
              if (files) {
                setValue(files[0]);
              }
            }}
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
            id="url-syllabus-upload"
            name="url-syllabus-upload"
            placeholder="Enter Web URL"
            onFocus={() => setInputFocus(true)}
            onBlur={({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
              setInputFocus(false);
              setValue(value);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default CourseSyllabusField;
