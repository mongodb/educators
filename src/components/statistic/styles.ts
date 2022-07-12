import { ThemeUICSSObject } from 'theme-ui';

const StatisticWrapper: ThemeUICSSObject = {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  width: ['100%', '206px', null, '400px'],
  paddingLeft: ['0', 'inc40', null, 'inc50'],
  paddingRight: ['0', 'inc40', null, 'inc50'],
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
