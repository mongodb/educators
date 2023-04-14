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

export interface FormState {
  isOpen: boolean;
  texts: {
    title: string;
    postSubmissionTitle: string;
    postSubmissionDescription: string;
    button: string;
  };
  fields: Array<FieldInterface>;
  submitForm: (formData: FormData, attachments: any) => void; // TODO: proper type
}

export default interface FormProps extends FormState {
  closeForm: () => void;
}

export interface Attachments {
  label: string;
  hasError: boolean;
  setValue: ({
    value,
    error,
  }: {
    value: string | File;
    error: boolean;
  }) => void;
}
