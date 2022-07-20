import { ThemeUICSSObject } from 'theme-ui';
import { COLOR_DARK_PRIMARY } from 'styles/variables';

const CourseListWrapper: ThemeUICSSObject = {
  gridColumn: ['span 12', null, null, 'span 7'],
  ol: {
    marginLeft: 'inc30',
    marginBottom: 'inc60',
    color: COLOR_DARK_PRIMARY,
  },
  li: {
    marginTop: 'inc30',
  },
};

const CourseListLinks: ThemeUICSSObject = {
  'span.textlink-default-text-class': {
    fontSize: 'inc30',
    fontWeight: 400,
  },
};

const styles = {
  CourseListLinks,
  CourseListWrapper,
};

export default styles;
