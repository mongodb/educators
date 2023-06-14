import theme from '@mdb/flora/theme';
import { ThemeUICSSObject } from 'theme-ui';

const HERO_BORDER_RADIUS = ['80px', null, null, '180px'];
const HERO_DEFAULT_SPACING = ['inc70', null, null, 'inc100'];

const HomePageHeroWrapper: ThemeUICSSObject = {
  paddingTop: HERO_DEFAULT_SPACING,
  paddingBottom: HERO_DEFAULT_SPACING,
  paddingLeft: 'inc40',
  paddingRight: 'inc40',
  borderBottomLeftRadius: HERO_BORDER_RADIUS,
  borderBottomRightRadius: HERO_BORDER_RADIUS,
  backgroundColor: theme.colors.blue80,
};

const HomePageHeroTitle: ThemeUICSSObject = {
  textAlign: 'center',
  marginBottom: ['inc40', null, null, 'inc50'],
};

const HomePageHeroContent: ThemeUICSSObject = {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  width: [null, '80%', null, '60%'],
  margin: '0 auto',
};

const HomePageMainStyles: ThemeUICSSObject = {
  overflow: 'hidden',
  paddingTop: ['inc70', null, null, 'inc100'],
  paddingBottom: ['inc70', null, null, 'inc90'],
  paddingLeft: ['inc30', 'inc50', null, 'inc70'],
  paddingRight: ['inc30', 'inc50', null, 'inc70'],
};

const HomePageHeroButton: ThemeUICSSObject = {
  marginTop: ['inc40', null, null, 'inc50'],
  width: ['78%', null, null, null],
};

const HomePageCurriculumTitle: ThemeUICSSObject = {
  textAlign: 'center',
  gridColumn: ['span 6', 'span 6', 'span 8', 'span 12'],
};

const HomePageCurriculumSubtitle: ThemeUICSSObject = {
  ...HomePageCurriculumTitle,
  width: ['100%', '90%', '70%'],
  margin: '0 auto',
  paddingTop: 'inc30',
  paddingBottom: 'inc40',
};

const HomePageResourcesTitle: ThemeUICSSObject = {
  color: '#000000',
  gridColumn: ['span 6', 'span 6', 'span 8', 'span 12'],
  marginBottom: 'inc40',
};

const HomePageStatsSection: ThemeUICSSObject = {
  display: 'flex',
  flexDirection: ['column', null, 'row', null],
  justifyContent: 'center',
  marginBottom: ['inc70', null, null, 'inc90'],
};

const HomePageFAQTitle: ThemeUICSSObject = {
  textAlign: 'center',
  marginTop: ['inc80', null, null, 'inc130'],
  marginBottom: ['inc50', null, null, 'inc80'],
};

const HomePageFAQs: ThemeUICSSObject = {
  gridColumn: ['span 6', 'span 6', 'span 8', 'span 12'],
};

const styles = {
  HomePageFAQs,
  HomePageFAQTitle,
  HomePageHeroTitle,
  HomePageMainStyles,
  HomePageHeroButton,
  HomePageHeroWrapper,
  HomePageHeroContent,
  HomePageStatsSection,
  HomePageResourcesTitle,
  HomePageCurriculumTitle,
  HomePageCurriculumSubtitle,
};

export default styles;
