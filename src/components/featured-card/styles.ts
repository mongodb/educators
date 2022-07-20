import { ThemeUICSSObject } from 'theme-ui';
import {
  COLOR_WHITE,
  COLOR_DARK_SECONDARY,
  COLOR_DARK_PRIMARY,
} from 'styles/variables';

/* -- BASE CARD STYLES --- */
const FeaturedCardWrapper: ThemeUICSSObject = {
  width: '100%',
  display: 'flex',
  flexWrap: 'nowrap',
  flexDirection: ['column', 'row', null, null],
  alignItems: 'center',
  paddingTop: ['inc50', 'inc70', null, 'inc80'],
  paddingBottom: ['inc70', null, null, 'inc80'],
  paddingLeft: ['inc70', null, null, 'inc100'],
  paddingRight: ['inc70', null, null, 'inc100'],
  marginRight: [null, null, null, 'inc40'],
  marginBottom: ['inc40', null, null, 0],
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  border: '1px solid #E7EEEC',
  borderRadius: '40px',
  backgroundColor: COLOR_WHITE,
  '&:last-of-type': {
    marginRight: 0,
    marginBottom: 0,
  },
};

const FeaturedCardText: ThemeUICSSObject = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
};

const FeaturedCardTitle: ThemeUICSSObject = {
  color: COLOR_DARK_PRIMARY,
  marginBottom: 'inc40',
};

const FeaturedCardSubtitle: ThemeUICSSObject = {
  color: COLOR_DARK_SECONDARY,
  marginBottom: 'inc60',
  lineHeight: [null, null, null, 'inc30'],
};

const FeaturedCardContent: ThemeUICSSObject = {
  order: [2, 1, null, null],
  height: '100%',
  width: [null, '50%', null, '50%'],
  alignItems: 'start',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
};

const FeaturedCardImageWrapper: ThemeUICSSObject = {
  order: [1, 2, null, null],
  width: [null, '50%', null, '50%'],
  display: [null, 'flex', null, null],
  justifyContent: [null, 'center', null, null],
  marginBottom: ['inc40', 0, null, null],
};

const FeaturedCardImage: ThemeUICSSObject = {
  position: 'relative',
  marginRight: [null, null, '-22px', '-72px'],
};

/* --- fullWidth PROP CARD STYLES --- */
const FeaturedCardWrapper_FullWidth: ThemeUICSSObject = {
  paddingTop: '0 !important',
  paddingBottom: '0 !important',
  paddingLeft: ['0', null, null, 'inc100'],
  paddingRight: ['0', null, null, 'inc100'],
  marginTop: ['inc70', null, null, 'inc130'],
  marginBottom: ['inc70', null, null, 'inc130'],
  marginRight: 0,
};

const FeaturedCardContent_FullWidth: ThemeUICSSObject = {
  width: ['100%', '50%', null, '45%'],
};

const FeaturedCardTitle_FullWidth: ThemeUICSSObject = {
  color: COLOR_DARK_SECONDARY,
};

const FeaturedCardSubtitle_FullWidth: ThemeUICSSObject = {
  color: COLOR_DARK_PRIMARY,
  fontSize: ['inc20', 'inc20', null, 'inc30'],
  lineHeight: ['inc30', 'inc30', null, 'inc30'],
  marginBottom: '24px',
};

const FeaturedCardImage_FullWidth: ThemeUICSSObject = {
  // negative margins negates whitespace in SVG adding whitespace height
  marginTop: ['-12px', '-24px', null, '-48px'],
  marginBottom: ['-12px', '-24px', null, '-48px'],
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
};

export default styles;
