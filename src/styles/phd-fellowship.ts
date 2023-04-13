import theme from '@mdb/flora/theme';
import { ThemeUICSSObject } from 'theme-ui';

const HeroWrapper: ThemeUICSSObject = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: theme.colors.blue80,
  paddingTop: ['inc90', null, 'inc100', 'inc130'],
  paddingBottom: 'inc70',
  px: 'inc80',
  borderBottomLeftRadius: ['80px', null, 0],
  borderBottomRightRadius: ['80px', null, 0],
  h2: {
    textAlign: 'center',
    paddingBottom: ['inc70', null, 'inc50', 'inc40'],
  },
};

const Main = {
  gridColumn: ['span 6', 'span 6', 'span 8', 'span 12'],
  px: ['inc40', null, 'inc50', 'inc70'],
  paddingBottom: ['inc100', null, null, 'inc130'],
};

const Section = {
  marginTop: ['inc70', null, null, 'inc60'],
  marginBottom: ['inc80', null, null, 'inc90'],
};

const InfoSection = {
  borderBottom: `1px solid ${theme.colors.black30}`,
  marginBottom: ['inc40', null, null, 'inc50'],
  '&:last-of-type': {
    marginBottom: 0,
    borderBottom: 'none',
  },
};

const InfoSectionText = {
  display: 'block',
  paddingTop: ['inc30', null, 'inc40'],
  paddingBottom: 'inc40',
};

const OrderedList = {
  marginLeft: 'inc40',
  paddingTop: ['inc30', null, 'inc40'],
};

const TextBtn = {
  border: 'none',
  backgroundColor: 'transparent',
  color: theme.colors.blue60,
  fontSize: 'inherit',
  fontFamily: 'inherit',
  '&:hover': {
    cursor: 'pointer',
    borderBottom: `2px solid ${theme.colors.black80}`,
  },
};

const EmailLink = {
  color: theme.colors.blue60,
  '&:hover': {
    cursor: 'pointer',
    borderBottom: `2px solid ${theme.colors.black80}`,
  },
};

const FAQTitle: ThemeUICSSObject = {
  textAlign: 'center',
  marginBottom: ['inc50', null, 'inc70', 'inc80'],
};

const FAQStyles = {
  ul: {
    marginTop: ['inc30', null, 'inc40'],
    marginBottom: 0,
  },
};

const styles = {
  Main,
  TextBtn,
  Section,
  FAQTitle,
  FAQStyles,
  EmailLink,
  InfoSection,
  OrderedList,
  HeroWrapper,
  InfoSectionText,
};

export default styles;
