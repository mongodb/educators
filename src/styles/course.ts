import { ThemeUICSSObject } from 'theme-ui';

const CoursePageMain: ThemeUICSSObject = {
  overflow: 'hidden',
  lineHeight: 'inc30', // the entire page across all viewports has 32px line height
  color: '#000000',
  paddingTop: ['inc50', null, null, 'inc80'],
  paddingBottom: ['inc80', null, null, 'inc130'],
  paddingLeft: ['inc50', null, null, 'inc110'],
  paddingRight: ['inc50', null, null, 'inc110'],
};

const CoursePageGrid: ThemeUICSSObject = {
  rowGap: 0,
};

const CoursePageBody: ThemeUICSSObject = {
  order: [2, null, null, 1],
};

const CoursePageAside: ThemeUICSSObject = {
  order: [1, null, null, 2],
};

const CoursePageList: ThemeUICSSObject = {
  order: 3,
};

const styles = {
  CoursePageMain,
  CoursePageBody,
  CoursePageGrid,
  CoursePageList,
  CoursePageAside,
};

export default styles;
