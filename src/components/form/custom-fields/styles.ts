import theme from '@mdb/flora/theme';

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
  marginTop: 'inc30',
  fontFamily: theme.fonts['euclid-circular-a'],
};

const SyllabusWebUrlInput = {
  backgroundColor: theme.colors.black70,
  borderTopLeftRadius: 'inc20',
  borderTopRightRadius: 'inc20',
  borderBottom: `4px solid ${theme.colors.black00}`,
  marginTop: 'inc30',
  input: {
    backgroundColor: 'transparent !important',
    border: 'none',
    outline: 'none',
    width: '100%',
    fontSize: 'inc40',
    fontFamily: theme.fonts['euclid-circular-a'],
    color: theme.colors.black00,
    py: 'inc40',
    px: 'inc40',
    '::placeholder': {
      color: theme.colors.black30,
    },
    '&:autofill': {
      boxShadow: `0 0 0 100px ${theme.colors.black70} inset`,
      textFillColor: theme.colors.black00,
    },
  },
};

const SyllabusWebUrlInputFocus = {
  borderBottom: `4px solid ${theme.colors.blue40}`,
};

const SyllabusErrorMsg = {
  display: 'block',
  marginTop: 'inc20',
  marginLeft: 'inc40',
};

const styles = {
  SyllabusBtn,
  SyllabusTitle,
  SyllabusWebUrlInput,
  SyllabusFileUpload,
  SyllabusPromptText,
  SyllabusWebUrlInputFocus,
  SyllabusErrorMsg,
};

export default styles;
