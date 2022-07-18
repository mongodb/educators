import { ThemeUICSSObject } from 'theme-ui';

const StudentResourcesWrapper: ThemeUICSSObject = {
  position: 'relative',
  paddingTop: ['inc70', null, null, 'inc100'],
  gridColumn: ['span 6', 'span 6', 'span 8', 'span 12'],
};

const StudentResourcesTitle: ThemeUICSSObject = {
  textAlign: 'center',
  marginBottom: 'inc30',
};

const StudentResourcesDescription: ThemeUICSSObject = {
  display: 'block',
  textAlign: 'center',
  width: ['94%', '74%', null, '54%'],
  margin: '0 auto',
};

const StudentResourcesSecondaryCardsWrapper: ThemeUICSSObject = {
  display: 'flex',
  flexDirection: ['column', null, null, 'row'],
};

const styles = {
  StudentResourcesTitle,
  StudentResourcesWrapper,
  StudentResourcesDescription,
  StudentResourcesSecondaryCardsWrapper,
};

export default styles;
