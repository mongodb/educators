import { ThemeUICSSObject } from 'theme-ui';

const HomePageMainStyles: ThemeUICSSObject = {
	paddingTop: ['inc70', null, null, 'inc100'],
	paddingBottom: ['inc70', null, null, 'inc90'],
	paddingLeft: ['inc30', null, null, 'inc70'],
	paddingRight: ['inc30', null, null, 'inc70'],
};

const HomePageHeroButton: ThemeUICSSObject = {
	marginTop: ['inc40', null, null, 'inc50'],
	width: ['78%', null, null, null],
};

const HomePageStatsSection: ThemeUICSSObject = {
	display: 'flex',
	flexDirection: ['column', 'row', null, null],
	justifyContent: 'space-between',
	maxWidth: ['100%', '580px', '700px', '1120px'], // TODO: clean up/verify
	margin: '0 auto',
};

export default {
	HomePageMainStyles,
	HomePageHeroButton,
	HomePageStatsSection,
};
