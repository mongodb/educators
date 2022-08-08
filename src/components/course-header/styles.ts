import { ThemeUICSSObject } from 'theme-ui';
import theme from '@mdb/flora/theme';

const CourseHeaderWrapper: ThemeUICSSObject = {
  paddingTop: ['inc40', null, null, 'inc70'],
  paddingBottom: ['inc60', 'inc50', null, 'inc70'],
  paddingLeft: ['inc50', null, null, 'inc110'],
  paddingRight: ['inc50', null, null, 'inc110'],
  backgroundColor: theme.colors.blue80,
};

const CourseHeaderGrid: ThemeUICSSObject = {
  gridGap: 0,
  columnGap: [0, null, null, 'inc50'],
};

const CourseHeaderBreadcrumb: ThemeUICSSObject = {
  marginBottom: 'inc40',
  gridColumn: 'span 12',
  'span.textlink-link-icon-class': {
    lineHeight: ['inc20', 'inc30', null, null],
  },
};

const CourseHeaderTitle: ThemeUICSSObject = {
  gridColumn: ['span 12', null, null, 'span 7'],
  marginBottom: ['inc40', null, null, 0],
};

const CourseHeaderActions: ThemeUICSSObject = {
  display: 'flex',
  flexDirection: ['column', null, 'row', 'column'],
  alignItems: ['flex-start', null, 'center', 'initial'],
  alignSelf: 'flex-end',
  gridColumnStart: ['span 12', null, null, '9'],
  gridColumnEnd: ['span 12', null, null, '12'],
};

const CourseHeaderDownload: ThemeUICSSObject = {
  marginTop: ['inc50', null, 0, 'inc50'],
  marginLeft: [0, 'inc30', null, 0],
};

const styles = {
  CourseHeaderGrid,
  CourseHeaderTitle,
  CourseHeaderWrapper,
  CourseHeaderActions,
  CourseHeaderDownload,
  CourseHeaderBreadcrumb,
};

export default styles;
