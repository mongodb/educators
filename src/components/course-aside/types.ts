import { ThemeUICSSObject } from 'theme-ui';

export default interface CourseAsideProps {
  level: string;
  title: string;
  duration: number;
  wrapperStyles?: ThemeUICSSObject;
  openForm: () => void;
}
