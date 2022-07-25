import { ThemeUICSSObject } from 'theme-ui';

const FormModalWrapper: ThemeUICSSObject = {
  display: 'flex',
  justifyContent: 'center',
  position: 'fixed',
  zIndex: 10,
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
  overflow: 'auto',
  backgroundColor: 'rgba(0, 30, 43, 0.6)', // theme.colors.blue80 in RGB
};

const FormModal: ThemeUICSSObject = {
  height: 'fit-content',
  marginTop: [0, 'inc40', null, null],
  marginBottom: [0, 'inc40', null, null],
  // hack to center align modal title
  '[aria-label="panel-title"]': {
    textAlign: 'center',
  },
};

const styles = {
  FormModal,
  FormModalWrapper,
};

export default styles;
