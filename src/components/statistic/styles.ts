import { ThemeUICSSObject } from 'theme-ui';
import theme from '@mdb/flora/theme';

const StatisticWrapper: ThemeUICSSObject = {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  width: ['100%', '206px', null, '400px'],
  paddingLeft: ['0', 'inc40', null, 'inc50'],
  paddingRight: ['0', 'inc40', null, 'inc50'],
  paddingBottom: ['inc40', '0', null, null],
  '&:last-of-type': {
    paddingBottom: '0',
  },
};

const StatisticCount: ThemeUICSSObject = {
  color: theme.colors.green60,
  marginBottom: 'inc20',
  fontFamily: 'euclid-circular-a',
};

const StatisticDesc: ThemeUICSSObject = {
  lineHeight: 'inc20',
  color: theme.colors.blue80,
};

const styles = {
  StatisticDesc,
  StatisticCount,
  StatisticWrapper,
};

export default styles;
