import theme from '@mdb/flora/theme';
import { ThemeUICSSObject } from 'theme-ui';

const AccordionHeader = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  py: ['inc40', null, null, 'inc50'],
  backgroundColor: 'inherit',
  border: 'none',
  borderTop: `1px solid ${theme.colors.black30}`,
  svg: {
    minHeight: 24,
    minWidth: 24,
  },
  '&:hover': {
    cursor: 'pointer',
  },
};

const AccordionHeaderText: ThemeUICSSObject = {
  textAlign: 'left',
  paddingRight: 'inc30',
};

const AccordionBody = {
  fontSize: 'inc30',
  lineHeight: 'inc30',
  color: theme.colors.black50,
  paddingBottom: 'inc50',

  ul: {
    marginLeft: 'inc50',
    marginBottom: 'inc50',
  },
  p: {
    marginBottom: 0,
  },
};

const styles = {
  AccordionBody,
  AccordionHeader,
  AccordionHeaderText,
};

export default styles;
