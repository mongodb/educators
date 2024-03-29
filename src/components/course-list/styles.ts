import { ThemeUICSSObject } from 'theme-ui';
import theme from '@mdb/flora/theme';

const CourseList: ThemeUICSSObject = {
  marginLeft: 'inc40',
  marginBottom: 'inc60',
  color: theme.colors.blue80,
  listStyleType: 'decimal-leading-zero',
  li: {
    marginTop: 'inc30',
  },
  h3: {
    display: 'inline-block',
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
  },
};

const styles = {
  CourseList,
  CourseListLinks,
  CourseListLegalLink,
};

export default styles;
