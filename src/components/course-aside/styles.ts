import { ThemeUICSSObject } from 'theme-ui';
import { COLOR_DARK_SECONDARY, COLOR_GREEN_PRIMARY } from 'styles/variables';

const TEXT_OVERLAY: {
  [key: string]: string | number;
} = {
  position: 'relative',
  zIndex: 2,
};

const CourseAsideWrapper: ThemeUICSSObject = {
  gridColumnStart: ['span 12', null, null, '9'],
  gridColumnEnd: ['span 12', null, null, '13'],
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
};

const CourseAsideLabel: ThemeUICSSObject = {
  fontSize: 'inc30',
};

const CourseAsideDetail: ThemeUICSSObject = {
  fontSize: 'inc50',
  fontWeight: 500,
  color: COLOR_GREEN_PRIMARY,
};

const CourseAsideReqList: ThemeUICSSObject = {
  color: '#3D4F58',
  marginLeft: '18px', // lines up bullet points from <ul /> with label
  '> li': {
    fontSize: 'inc30',
  },
};

const CourseAsidePrompt: ThemeUICSSObject = {
  display: ['none', null, null, 'block'],
  position: 'relative',
  padding: '24px 24px 28px',
  borderRadius: 'inc50',
  overflow: 'hidden',
  backgroundColor: COLOR_DARK_SECONDARY,
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
  CourseAsideReqList,
  CourseAsideSection,
  CourseAsideWrapper,
  CourseAsidePromptBG,
  CourseAsidePromptLink,
  CourseAsidePromptBody,
};

export default styles;
