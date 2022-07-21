import { ThemeUICSSObject } from 'theme-ui';
import theme from '@mdb/flora/theme';

const CourseListWrapper: ThemeUICSSObject = {
  gridColumn: ['span 12', null, null, 'span 7'],
  ol: {
    marginLeft: 'inc30',
    marginBottom: 'inc60',
    color: theme.colors.blue80,
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

const CourseListLegalLink: ThemeUICSSObject = {
  lineHeight: 'inc30',
  fontWeight: 400,
  color: theme.colors.blue60,
  '&:hover': {
    cursor: 'pointer',
    borderBottom: `2px solid ${theme.colors.black80}`,
  }
};

const styles = {
  CourseListLinks,
  CourseListWrapper,
  CourseListLegalLink,
};

export default styles;
