import { ThemeUICSSObject } from 'theme-ui';
import { COLOR_BLACK } from 'styles/variables';

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
  color: COLOR_BLACK,
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
  StudentResourcesBG,
  StudentResourcesTitle,
  StudentResourcesWrapper,
  StudentResourcesDescription,
  StudentResourcesSecondaryCardsWrapper,
};

export default styles;