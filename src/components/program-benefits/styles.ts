import theme from '@mdb/flora/theme';
import { ThemeUICSSObject } from 'theme-ui';

const ProgramBenefitsTitle: ThemeUICSSObject = {
  textAlign: 'center',
  marginBottom: 'inc60',
  gridColumn: ['span 6', 'span 6', 'span 8', 'span 12'],
};

const ProgramBenefitsWidgetsWrapper = {
  mx: '-inc70',
  backgroundColor: theme.colors.purple10,
  gridColumn: ['span 6', 'span 6', 'span 8', 'span 12'],
};

const ProgramBenefitsWidget: ThemeUICSSObject = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  py: 'inc50',
  px: 'inc110',
};

const ProgramBenefitsWidgetTitle: ThemeUICSSObject = {
  display: 'block',
  textAlign: 'center',
  fontWeight: 500,
  marginTop: 'inc40',
  marginBottom: 'inc20',
};

const ProgramBenefitsWidgetSubtitle: ThemeUICSSObject = {
  display: 'block',
  textAlign: 'center',
};

const styles = {
  ProgramBenefitsTitle,
  ProgramBenefitsWidget,
  ProgramBenefitsWidgetTitle,
  ProgramBenefitsWidgetsWrapper,
  ProgramBenefitsWidgetSubtitle,
};

export default styles;
