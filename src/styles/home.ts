import { ThemeUICSSObject } from 'theme-ui';

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
  HomePageMainStyles,
  HomePageHeroButton,
  HomePageStatsSection,
  HomePageResourcesTitle,
  HomePageCurriculumTitle,
  HomePageCurriculumSubtitle,
};

export default styles;
