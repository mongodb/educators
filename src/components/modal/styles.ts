import theme from '@mdb/flora/theme';
import { ThemeUICSSObject } from 'theme-ui';

const ModalWrapper: ThemeUICSSObject = {
  zIndex: 1001,
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
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: theme.colors.black00,
  zIndex: 10000,
  borderRadius: 'inc70',
  padding: ['inc40', null, null, 'inc50'],
  height: 'fit-content',
  maxHeight: ['100%', null, null, '95vh'],
};

const ModalCloseBtn: ThemeUICSSObject = {
  alignSelf: 'flex-end',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'transparent',
  border: `1px solid ${theme.colors.blue80}`,
  minHeight: ['24px', null, null, '32px'],
  width: ['24px', null, null, '32px'],
  borderRadius: '50px',

  svg: {
    stroke: theme.colors.blue80,
  },

  '&:hover': {
    cursor: 'pointer',
  },
};

const ModalContent: ThemeUICSSObject = {
  overflowY: 'scroll',
};

const styles = {
  ModalWrapper,
  ModalBody,
  ModalContent,
  ModalCloseBtn,
};

export default styles;
