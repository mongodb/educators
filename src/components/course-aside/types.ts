import { ThemeUICSSObject } from "theme-ui";

export default interface CourseAsideProps {
  length: string;
  level: string;
  prerequisites: Array<string>;
  wrapperStyles?: ThemeUICSSObject;
}
