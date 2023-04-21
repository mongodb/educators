import { Dispatch, SetStateAction } from 'react';

export interface FieldInterface {
  name: string;
  label: string;
  options?: Array<string>;
  type?: 'text' | 'email';
  component?: 'text-input' | 'select' | 'text-area' | 'checkbox';
  validators?: Array<{
    rule?: string;
    (value: string): string;
  }>;
}

export interface AttachmentsType {
  docs: FileList | null;
  urls: Array<{ id: number; value: string }>;
  error: boolean;
}

export interface FormState {
  isOpen: boolean;
  texts: {
    title: string;
    subtitle?: string;
    postSubmissionTitle: string;
    postSubmissionDescription: string;
    postSubmissionButtonText?: string;
    attachments?: string;
    button: string;
  };
  multiFileUpload?: boolean;
  fields: Array<FieldInterface>;
  submitForm: (formData: FormData, attachments: AttachmentsType) => void;
}

export interface FormProps extends FormState {
  closeForm: () => void;
}

export interface AttachmentsProps {
  label: string;
  prompt?: string;
  attachments: AttachmentsType;
  multiFile?: boolean;
  setAttachments: Dispatch<SetStateAction<AttachmentsType>>;
}
