import { ThemeUICSSObject } from 'theme-ui';

const StatisticWrapper: ThemeUICSSObject = {
	display: 'flex',
	flexDirection: 'column',
	textAlign: 'center',
	maxWidth: ['100%', '200px', null, '336px'], // TODO: more dynamic
	paddingLeft: ['0', '24px', null, null],
	paddingRight: ['0', '24px', null, null],
	paddingBottom: ['24px', '0', null, null],
	'&:last-of-type': {
		paddingBottom: '0',
	},
};

const StatisticCount: ThemeUICSSObject = {
	color: '#00684A',
	marginBottom: '8px',
	fontFamily: 'euclid-circular-a',
};

const StatisticDesc: ThemeUICSSObject = {
	lineHeight: '24px',
};

const styles = {
	StatisticDesc,
	StatisticCount,
	StatisticWrapper,
};

export default styles;
