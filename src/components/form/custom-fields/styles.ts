import theme from '@mdb/flora/theme';

const AttachmentsTitle = {
  display: 'block',
  marginBottom: 'inc20',
};

const AttachmentsBtn = {
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

const AttachmentsPromptText = {
  display: 'block',
  marginBottom: 'inc30',
};

const AttachmentsOptionText = {
  mx: 'inc20',
};

const AttachmentsFileUpload = {
  display: 'block',
  color: theme.colors.black00,
  marginTop: 'inc30',
  fontFamily: theme.fonts['euclid-circular-a'],
};

const AttachmentsWebUrlInputWrapper = {
  display: 'flex',
  alignItems: 'center',
  marginTop: 'inc30',
};

const AttachmentsWebUrlInput = {
  backgroundColor: theme.colors.black70,
  borderTopLeftRadius: 'inc20',
  borderTopRightRadius: 'inc20',
  flex: 1,
  input: {
    backgroundColor: 'transparent !important',
    border: 'none',
    outline: 'none',
    width: '100%',
    fontSize: 'inc40',
    fontFamily: theme.fonts['euclid-circular-a'],
    color: theme.colors.black00,
    borderBottom: `4px solid ${theme.colors.black00}`,
    py: 'inc40',
    px: 'inc40',
    '::placeholder': {
      color: theme.colors.black30,
    },
    '&:autofill': {
      boxShadow: `0 0 0 100px ${theme.colors.black70} inset`,
      textFillColor: theme.colors.black00,
    },
    '&:focus': {
      borderBottom: `4px solid ${theme.colors.blue40}`,
    },
  },
};

const AttachmentsRemoveInput = {
  border: 'none',
  backgroundColor: 'transparent',
  marginLeft: 'inc20',

  '&:hover': {
    cursor: 'pointer',
  },
};

const AttachmentsAddInput = {
  border: 'none',
  backgroundColor: 'transparent',
  color: theme.colors.black00,
  display: 'flex',
  alignItems: 'center',
  fontFamily: 'inherit',
  marginTop: 'inc30',
  paddingBottom: 'inc10',
  borderBottom: '1px solid transparent',
  svg: {
    fill: theme.colors.black00,
    marginRight: 'inc20',
  },
  '&:hover': {
    cursor: 'pointer',
    borderBottom: `1px solid ${theme.colors.black00}`,
  },
};

const AttachmentsErrorMsg = {
  display: 'block',
  marginTop: 'inc20',
  marginLeft: 'inc40',
};

const styles = {
  AttachmentsBtn,
  AttachmentsTitle,
  AttachmentsErrorMsg,
  AttachmentsAddInput,
  AttachmentsFileUpload,
  AttachmentsOptionText,
  AttachmentsPromptText,
  AttachmentsRemoveInput,
  AttachmentsWebUrlInput,
  AttachmentsWebUrlInputWrapper,
};

export default styles;
