import { ThemeUICSSObject } from 'theme-ui';
import { COLOR_DARK_PRIMARY } from 'styles/variables';

const HERO_BORDER_RADIUS = ['80px', null, null, '180px'];
const HERO_DEFAULT_SPACING = ['inc70', null, null, 'inc100'];

const HeroWrapper: ThemeUICSSObject = {
  paddingTop: HERO_DEFAULT_SPACING,
  paddingBottom: HERO_DEFAULT_SPACING,
  paddingLeft: '24px',
  paddingRight: '24px',
  borderBottomLeftRadius: HERO_BORDER_RADIUS,
  borderBottomRightRadius: HERO_BORDER_RADIUS,
  backgroundColor: COLOR_DARK_PRIMARY,
};

const HeroTitle: ThemeUICSSObject = {
  textAlign: 'center',
  marginBottom: ['inc40', null, null, 'inc50'],
};

const HeroContent: ThemeUICSSObject = {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  width: [null, '80%', null, '60%'],
  margin: '0 auto',
};

const styles = {
  HeroWrapper,
  HeroTitle,
  HeroContent,
};

export default styles;
