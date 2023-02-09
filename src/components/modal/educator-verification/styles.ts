import { ThemeUICSSObject } from 'theme-ui';

const EduVerificationWrapper = {
  paddingTop: ['inc20', 'inc40', null, 'inc60'],
  paddingBottom: ['inc40', 'inc70', null, 'inc100'],
  px: ['inc40', 'inc70', null, 'inc90'],
  width: ['100%', null, null, '456px'],
};

const EduVerficationTitle: ThemeUICSSObject = {
  textAlign: 'center',
  marginBottom: ['inc50', null, null, 'inc50'],
};

const EduVerificationRadioGroupLabel = {
  display: 'block',
  marginBottom: 'inc30',
};

const EduVerficationRadioGroup = {
  marginBottom: ['inc40', null, null, 'inc60'],
};

const EduVerficationBtn = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  button: {
    width: '100% !important', // needed to override Flora responsive styling
  },
};

const styles = {
  EduVerficationBtn,
  EduVerficationTitle,
  EduVerificationWrapper,
  EduVerficationRadioGroup,
  EduVerificationRadioGroupLabel,
};

export default styles;
