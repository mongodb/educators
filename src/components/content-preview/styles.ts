import { ThemeUICSSObject } from 'theme-ui';
import { COLOR_BLACK } from 'styles/variables';

const ContentPreviewWrapper: ThemeUICSSObject = {
  marginBottom: ['inc70', null, null, 'inc100'],
};

const ContentPreviewTitle: ThemeUICSSObject = {
  color: COLOR_BLACK,
  gridColumn: ['span 6', 'span 6', 'span 8', 'span 12'],
};

const ContentPreviewGrid: ThemeUICSSObject = {
  rowGap: ['inc30', null, null, 'inc40'],
  columnGap: ['0', 'inc40', null, null],
  gridColumn: ['span 6', 'span 6', 'span 8', 'span 12'],
};

const styles = {
  ContentPreviewGrid,
  ContentPreviewTitle,
  ContentPreviewWrapper,
};

export default styles;
