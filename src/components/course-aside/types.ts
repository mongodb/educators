import { ThemeUICSSObject } from 'theme-ui';

export default interface CourseAsideProps {
  level: string;
  title: string;
  duration: number;
  openForm: () => void;
  wrapperStyles?: ThemeUICSSObject;
}
