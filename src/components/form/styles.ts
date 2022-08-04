import { ThemeUICSSObject } from 'theme-ui';
import theme from '@mdb/flora/theme';

const FormModalWrapper: ThemeUICSSObject = {
  backgroundColor: 'rgba(0, 30, 43, 0.6)', // theme.colors.blue80 in RGB
  display: 'flex',
  height: '100%',
  justifyContent: 'center',
  left: 0,
  overflow: 'auto',
  position: 'fixed',
  top: 0,
  width: '100%',
  zIndex: 10,
};

const FormModal: ThemeUICSSObject = {
  height: 'fit-content',
  marginBottom: [0, 'inc40', null, null],
  marginTop: [0, 'inc40', null, null],
  // hack to center align modal title
  '[aria-label="panel-title"]': {
    textAlign: 'center',
  },
};

const FormErrorMessage: ThemeUICSSObject = {
  color: theme.colors.red30,
  marginBottom: '-inc30', // negates spacing from gridGap
};

const styles = {
  FormModal,
  FormModalWrapper,
  FormErrorMessage,
};

export default styles;
