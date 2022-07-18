import { ThemeUICSSObject } from 'theme-ui';

/* -- BASE CARD STYLES --- */
const FeaturedCardWrapper: ThemeUICSSObject = {
  marginRight: [0, null, null, 'inc40'],
  '&:last-of-type': {
    marginRight: 0
  },
  color: 'inherit',
	textDecoration: 'none',
	display: 'flex',
  flexWrap: 'nowrap',
  flexDirection: ['column', 'row', null, null],
	width: '100%',
	alignItems: 'center',
	paddingTop: ['inc50', 'inc70', null, 'inc80'],
  paddingBottom: ['inc70', null, null, 'inc80'],
  paddingLeft: ['inc70', null, null, 'inc100'],
  paddingRight: ['inc70', null, null, 'inc100'],
	boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  border: '1px solid #E7EEEC',
	borderRadius: '40px',
  backgroundColor: '#FFFFFF',
  marginBottom: ['inc40', null, null, 0],
};

const FeaturedCardText: ThemeUICSSObject = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
};

const FeaturedCardTitle: ThemeUICSSObject = {
  color: '#023430',
  marginBottom: 'inc40',
};

const FeaturedCardSubtitle: ThemeUICSSObject = {
  marginBottom: 'inc60',
  lineHeight: ['inc20', 'inc30', null, null],
};

const FeaturedCardContent: ThemeUICSSObject = {
  order: [2, 1, null, null],
  height: '100%',
  width: [null, '50%', '50%', '50%'],
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
  marginRight: [null, null, '-22px', '-72px'] // moves icon over to fit text/icon in card
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
  color: '#023430',
};

const FeaturedCardSubtitle_FullWidth: ThemeUICSSObject = {
  fontSize: ['16px', '16px', null, '18px !important'],
  lineHeight: ['32px', '32px', null, null],
  marginBottom: '24px !important',
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
