import { FormState } from 'components/form/types';
import { ThemeUICSSObject } from 'theme-ui';

export default interface CourseAsideProps {
  level: string;
  title: string;
  duration: number;
  wrapperStyles?: ThemeUICSSObject;
  setFormState: (form: FormState) => void;
}
