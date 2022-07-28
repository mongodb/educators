import { ThemeUICSSObject } from 'theme-ui';
import theme from '@mdb/flora/theme';

const AStyles: ThemeUICSSObject = {
  lineHeight: 'inc30',
  color: theme.colors.blue60,
  '&:hover': {
    cursor: 'pointer',
    borderBottom: `2px solid ${theme.colors.black80}`,
  },
};

const styles = { AStyles };

export default styles;
