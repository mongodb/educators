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

const CoursePageContent: ThemeUICSSObject = {
  gridColumn: ['span 12', null, null, 'span 7'],
  order: [2, null, null, 1],
};

const CoursePageGrid: ThemeUICSSObject = {
  rowGap: 0,
};

const CoursePageAside: ThemeUICSSObject = {
  gridColumnStart: ['span 12', null, null, '9'],
  gridColumnEnd: ['span 12', null, null, '13'],
  order: [1, null, null, 2],
};

const styles = {
  CoursePageMain,
  CoursePageGrid,
  CoursePageAside,
  CoursePageContent,
};

export default styles;
