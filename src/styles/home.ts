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

const HomePageStatsSection: ThemeUICSSObject = {
  display: 'flex',
  flexDirection: ['column', 'row', null, null],
  justifyContent: 'center',
  marginBottom: ['inc70', null, null, 'inc90'],
};

export default {
  HomePageMainStyles,
  HomePageHeroButton,
  HomePageStatsSection,
};
