import { ThemeUICSSObject } from 'theme-ui';

const FormModal: ThemeUICSSObject = {
  display: 'flex',
  justifyContent: 'center',
  position: 'fixed',
  zIndex: 10,
  paddingTop: 'inc40',
  paddingBottom: 'inc40',
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
  overflow: 'auto',
  backgroundColor: 'rgba(0, 30, 43, 0.6)', // theme.colors.blue80 in RGB
  // hack to center align modal title
  '[aria-label="panel-title"]': {
    textAlign: 'center',
  },
};

const styles = {
  FormModal,
};

export default styles;
