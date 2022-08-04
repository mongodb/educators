import { CSSInterpolation } from '@emotion/css';
import theme from '@mdb/flora/theme';

export const GlobalStyles: CSSInterpolation = {
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  body: {
    fontFamily: theme.fonts['euclid-circular-a'],
  },
  'h1, h2, h3, h4, h5, h6': {
    fontWeight: 'normal',
    fontStyle: 'normal',
  },
  a: {
    color: 'inherit',
    textDecoration: 'none',
  },
};
