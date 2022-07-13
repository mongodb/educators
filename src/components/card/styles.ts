import { ThemeUICSSObject } from 'theme-ui';
import theme from '@mdb/flora/theme';

const CardWrapper: ThemeUICSSObject = {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: ['100%', null, null, '432px'],
  padding: ['inc40', null, null, 'inc50'],
  fill: theme.colors.panels.card.bg,
  border: `1px solid ${theme.colors.card.default.border}`,
  borderRadius: 'inc50',
  boxShadow: '0px 4px 10px -4px rgba(0, 30, 43, 0.3)',
  '&:hover': {
    border: '1px solid #023430',
    boxShadow: '0px 3px 20px rgba(0, 0, 0, 0.15)'
  }
};

const CardContent: ThemeUICSSObject = {
  flex: '1 1 auto',
};

const CardPill: ThemeUICSSObject = {
  marginBottom: 'inc30',
  fontSize: ['9px', null, null, '12px'],
};

const CardTitle: ThemeUICSSObject = {
  marginBottom: 'inc30',
};

const CardLessonCount: ThemeUICSSObject = {
  display: 'block',
  marginTop: 'inc10',
};

const CardDivider: ThemeUICSSObject = {
  marginBottom: 'inc30',
};

const CardActions: ThemeUICSSObject = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};

const CardLink: ThemeUICSSObject = {
  height: '28px',
};

const styles = {
  CardPill,
  CardLink,
  CardTitle,
  CardContent,
  CardActions,
  CardWrapper,
  CardDivider,
  CardLessonCount,
};

export default styles;