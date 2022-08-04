import { ThemeUICSSObject } from 'theme-ui';

export default interface ImageProps {
  src: string;
  alt: string;
  type?: string;
  styles?: ThemeUICSSObject;
}
