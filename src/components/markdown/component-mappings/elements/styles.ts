import theme from '@mdb/flora/theme';
import { ThemeUICSSObject } from 'theme-ui';

const AStyles: ThemeUICSSObject = {
  lineHeight: 'inc30',
  color: theme.colors.blue60,
  '&:hover': {
    cursor: 'pointer',
    borderBottom: `2px solid ${theme.colors.black80}`,
  },
};

const PStyles: ThemeUICSSObject = {
  fontSize: 'inc30',
  marginBottom: 'inc60',
};

const H2Styles: ThemeUICSSObject = {
  marginBottom: 'inc30',
};

const YoutubeWrapper: ThemeUICSSObject = {
  position: 'relative',
  paddingTop: '56.25%',
};

const Youtube: ThemeUICSSObject = {
  position: 'absolute',
  top: 0,
  left: 0,
};

const styles = {
  AStyles,
  PStyles,
  H2Styles,
  Youtube,
  YoutubeWrapper,
};

export default styles;
