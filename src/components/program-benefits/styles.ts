import theme from '@mdb/flora/theme';
import { ThemeUICSSObject } from 'theme-ui';

const ProgramBenefitsWrapper = {
  marginBottom: 'inc80',
};

const ProgramBenefitsTitle: ThemeUICSSObject = {
  textAlign: 'center',
  marginBottom: 'inc60',
  gridColumn: ['span 6', 'span 6', 'span 8', 'span 12'],
};

const ProgramBenefitsWidgetWrapper = {
  backgroundColor: theme.colors.purple10,
  mx: ['-inc30', '-inc50', null, '-inc70'], // offset home page container's padding so background color can span full width
};

const ProgramBenefitsGrid = {
  py: ['inc30', null, 'inc50'],
  gridGap: 0,
  gridColumn: ['span 6', 'span 6', 'span 8', 'span 12'],
};

const ProgramBenefitsWidget: ThemeUICSSObject = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  py: ['inc30', null, 0],
  px: ['inc50', null, null, 'inc70', 'inc110'],
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

const ProgramBenefitsCTA: ThemeUICSSObject = {
  marginTop: 'inc30',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
};

const styles = {
  ProgramBenefitsCTA,
  ProgramBenefitsGrid,
  ProgramBenefitsTitle,
  ProgramBenefitsWidget,
  ProgramBenefitsWrapper,
  ProgramBenefitsWidgetTitle,
  ProgramBenefitsWidgetWrapper,
  ProgramBenefitsWidgetSubtitle,
};

export default styles;
