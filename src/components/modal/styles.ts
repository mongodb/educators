import theme from '@mdb/flora/theme';
import { ThemeUICSSObject } from 'theme-ui';

const ModalWrapper: ThemeUICSSObject = {
  zIndex: 999,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  '&::after': {
    content: '""',
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: theme.colors.background.containerInverseDarker,
    opacity: theme.opacity.inc50,
  },
};

const ModalBody: ThemeUICSSObject = {
  position: 'relative',
  backgroundColor: theme.colors.black00,
  zIndex: 10000,
  borderRadius: 'inc70',
  padding: ['inc20', null, null, 'inc140'],
};

const ModalCloseBtn: ThemeUICSSObject = {
  position: 'absolute',
  top: 32,
  right: 32,
  backgroundColor: 'transparent',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: `1px solid ${theme.colors.blue80}`,
  height: '32px',
  width: '32px',
  borderRadius: '50px',

  svg: {
    stroke: theme.colors.blue80,
  },

  '&:hover': {
    cursor: 'pointer',
  },
};

const styles = {
  ModalWrapper,
  ModalBody,
  ModalCloseBtn,
};

export default styles;
