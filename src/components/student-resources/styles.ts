import { ThemeUICSSObject } from 'theme-ui';

const StudentResourcesWrapper: ThemeUICSSObject = {
  position: 'relative',
  paddingTop: ['inc70', null, null, 'inc100'],
  gridColumn: ['span 6', 'span 6', 'span 8', 'span 12'],
};

const StudentResourcesBG: ThemeUICSSObject = {
  position: 'absolute',
  zIndex: '-1',
  top: 0,
  left: ['-290px', '-170px', '-190px', '200px'],
};

const StudentResourcesTitle: ThemeUICSSObject = {
  color: '#000000',
  textAlign: 'center',
  marginBottom: 'inc30',
};

const StudentResourcesDescription: ThemeUICSSObject = {
  display: 'block',
  textAlign: 'center',
  width: ['100%', '90%', '70%', '56%'],
  margin: '0 auto',
};

const StudentResourcesSecondaryCardsWrapper: ThemeUICSSObject = {
  display: 'flex',
  flexDirection: ['column', null, null, 'row'],
};

const styles = {
  StudentResourcesBG,
  StudentResourcesTitle,
  StudentResourcesWrapper,
  StudentResourcesDescription,
  StudentResourcesSecondaryCardsWrapper,
};

export default styles;
