import theme from '@mdb/flora/theme';

// const SyllabusOptionsWrapper = {
//   marginBottom: ['inc20', null, null, 'inc30'] // TODO: responsivess
// };

const SyllabusTitle = {
  display: 'block',
  marginBottom: 'inc20',
};

const SyllabusBtn = {
  background: 'transparent',
  border: 'none',
  color: theme.colors.green40,
  fontSize: 'inc20',
  lineHeight: 'inc30',
  borderBottom: '2px solid transparent',
  fontWeight: 500,
  fontFamily: theme.fonts['euclid-circular-a'],

  '&:hover': {
    cursor: 'pointer',
    borderBottom: `2px solid ${theme.colors.black00}`,
  },
};

const SyllabusPromptText = {
  mx: 'inc20',
};

const SyllabusFileUpload = {
  display: 'block',
  color: theme.colors.black00,
  marginTop: ['inc20', null, null, 'inc30'], // responsivess check
  // fontSize: 'inc10', // 16
  // lineHeight: '32px', // 32
  // borderBottom: '2px solid transparent',
  // fontWeight: 500,
  // fontFamily: theme.fonts['euclid-circular-a'],
};

const SyllabusWebUrlInput = {
  backgroundColor: theme.colors.black70,
  borderTopLeftRadius: 'inc20',
  borderTopRightRadius: 'inc20',
  borderBottom: `4px solid ${theme.colors.black00}`,
  marginTop: ['inc20', null, null, 'inc30'], // responsivess check
  input: {
    backgroundColor: 'transparent',
    border: 'none',
    outline: 'none',
    width: '100%',
    fontSize: 'inc40',
    fontFamily: theme.fonts['euclid-circular-a'],
    color: theme.colors.black00,
    py: ['inc20', null, null, 'inc40'],
    px: ['inc20', null, null, 'inc40'], // check responsiveness
    '::placeholder': {
      color: theme.colors.black30,
    },
  },
};

const SyllabusWebUrlInputFocus = {
  borderBottom: `4px solid ${theme.colors.blue40}`,
};

const styles = {
  SyllabusBtn,
  SyllabusTitle,
  SyllabusWebUrlInput,
  SyllabusFileUpload,
  SyllabusPromptText,
  SyllabusWebUrlInputFocus,
};

export default styles;
