import { ThemeUICSSObject } from 'theme-ui';
import theme from '@mdb/flora/theme';

/* -- BASE CARD STYLES --- */
const FeaturedCardWrapper: ThemeUICSSObject = {
  width: '100%',
  display: 'flex',
  flexWrap: 'nowrap',
  flexDirection: ['column', 'row', null, 'column'],
  alignItems: 'center',
  paddingTop: ['inc50', 'inc70', null, 'inc80'],
  paddingBottom: ['inc70', null, null, 'inc80'],
  paddingLeft: ['inc70', null, null, 'inc100'],
  paddingRight: ['inc70', null, null, 'inc100'],
  marginRight: [null, null, null, 'inc40'],
  marginBottom: ['inc40', null, null, 0],
  boxShadow: 'level01',
  border: `1px solid ${theme.colors.card.default.border}`,
  borderRadius: 'inc70',
  backgroundColor: theme.colors.black00,
  '&:last-of-type': {
    marginRight: 0,
    marginBottom: 0,
  },
};

const FeaturedCardContent: ThemeUICSSObject = {
  height: '100%',
  width: [null, '50%', null, '100%'],
  order: [2, 1, null, 2],
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: ['start', null, null, 'center'],
};

const FeaturedCardText: ThemeUICSSObject = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: ['start', null, null, 'center'],
};

const FeaturedCardTitle: ThemeUICSSObject = {
  color: theme.colors.blue80,
  marginBottom: 'inc40',
  textAlign: ['left', null, null, 'center'],
};

const FeaturedCardSubtitle: ThemeUICSSObject = {
  marginBottom: 'inc60',
  color: theme.colors.green80,
  textAlign: ['left', null, null, 'center'],
  lineHeight: [null, null, null, 'inc30'],
};

const FeaturedCardLink: ThemeUICSSObject = {
  whiteSpace: ['initial', null, 'nowrap'],
};

const FeaturedCardImageWrapper: ThemeUICSSObject = {
  order: [1, 2, null, 1],
  width: [null, '50%', null, '100%'],
  display: [null, 'flex'],
  justifyContent: [null, 'center'],
  marginBottom: ['inc40', 0, null, 'inc40'],
};

const FeaturedCardImage: ThemeUICSSObject = {
  height: '100%',
  width: '100%',
};

/* --- fullWidth PROP CARD STYLES --- */
const FeaturedCardWrapper_FullWidth: ThemeUICSSObject = {
  flexDirection: ['column', 'row'],
  paddingTop: '0 !important',
  paddingBottom: '0 !important',
  paddingLeft: ['0', null, null, 'inc100'],
  paddingRight: ['0', null, null, 'inc100'],
  marginTop: ['inc80', null, null, 'inc130'],
  marginBottom: ['inc90', null, null, 'inc130'],
  marginRight: 0,
};

const FeaturedCardContent_FullWidth: ThemeUICSSObject = {
  order: [2, 1],
  alignItems: 'start',
  marginRight: [null, 'inc20', 0, 0],
  width: ['100%', '50%', null, '45%'],
};

const FeaturedCardTitle_FullWidth: ThemeUICSSObject = {
  color: theme.colors.green80,
  textAlign: 'left',
};

const FeaturedCardSubtitle_FullWidth: ThemeUICSSObject = {
  color: theme.colors.blue80,
  textAlign: 'left',
  fontSize: ['inc20', 'inc20', null, 'inc30'],
  lineHeight: ['inc30', 'inc30', null, 'inc30'],
  marginBottom: 'inc40',
};

const FeaturedCardImageWrapper_FullWidth: ThemeUICSSObject = {
  order: [1, 2],
  width: [null, '50%'],
  marginBottom: ['inc70', 0],
};

const FeaturedCardImage_FullWidth: ThemeUICSSObject = {
  // negative margins negates whitespace in SVG adding whitespace height
  marginTop: ['-inc30', '-inc40', null, '-inc70'],
  marginBottom: ['-inc30', '-inc40', null, '-inc70'],
  marginRight: [null, null, '-inc40', '-inc100'],
};

/* --- noBorder PROP CARD STYLES --- */
const FeaturedCardWrapper_NoBorder: ThemeUICSSObject = {
  border: 'none',
  boxShadow: 'none',
  background: 'transparent',
  borderRadius: 0,
};

const styles = {
  FeaturedCardText,
  FeaturedCardLink,
  FeaturedCardImage,
  FeaturedCardTitle,
  FeaturedCardContent,
  FeaturedCardWrapper,
  FeaturedCardSubtitle,
  FeaturedCardImageWrapper,
  FeaturedCardImage_FullWidth,
  FeaturedCardTitle_FullWidth,
  FeaturedCardWrapper_NoBorder,
  FeaturedCardWrapper_FullWidth,
  FeaturedCardContent_FullWidth,
  FeaturedCardSubtitle_FullWidth,
  FeaturedCardImageWrapper_FullWidth,
};

export default styles;
