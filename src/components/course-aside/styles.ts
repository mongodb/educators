import { ThemeUICSSObject } from 'theme-ui';
import theme from '@mdb/flora/theme';

const TEXT_OVERLAY: {
  [key: string]: string | number;
} = {
  position: 'relative',
  zIndex: 2,
};

const CourseAsideSection: ThemeUICSSObject = {
  display: 'flex',
  flexDirection: ['column', 'row', null, 'column'],
  '&:last-of-type': {
    marginTop: [null, 'inc50', null, 0],
    marginBottom: ['inc30', 'inc60', null, 0],
  },
};

const CourseAsideWidget: ThemeUICSSObject = {
  width: ['100%', '50%', null, '100%'],
  marginBottom: ['inc40', 0, null, 'inc60'],
  '&:first-of-type': {
    paddingRight: [null, 'inc40', 0],
  },
};

const CourseAsideLabel: ThemeUICSSObject = {
  fontSize: 'inc30',
};

const CourseAsideDetail: ThemeUICSSObject = {
  fontSize: 'inc50',
  fontWeight: 500,
  color: theme.colors.green60,
};

const CourseAsidePrompt: ThemeUICSSObject = {
  display: ['none', null, null, 'block'],
  position: 'relative',
  paddingTop: 'inc40',
  paddingBottom: '28px',
  paddingRight: 'inc40',
  paddingLeft: 'inc40',
  borderRadius: 'inc50',
  overflow: 'hidden',
  backgroundColor: theme.colors.green80,
  '> span': {
    display: 'block',
    ...TEXT_OVERLAY,
  },
};

const CourseAsidePromptBody: ThemeUICSSObject = {
  marginTop: 'inc30',
  marginBottom: 'inc30',
};

const CourseAsidePromptLink: ThemeUICSSObject = {
  ...TEXT_OVERLAY,
};

const CourseAsidePromptBG: ThemeUICSSObject = {
  position: 'absolute',
  bottom: 0,
  right: 0,
  zIndex: 0,
};

const styles = {
  CourseAsideLabel,
  CourseAsideWidget,
  CourseAsideDetail,
  CourseAsidePrompt,
  CourseAsideSection,
  CourseAsidePromptBG,
  CourseAsidePromptLink,
  CourseAsidePromptBody,
};

export default styles;
