import { ThemeUICSSObject } from 'theme-ui';

const ContentPreviewWrapper: ThemeUICSSObject = {
  marginBottom: ['inc70', null, null, 'inc100'],
};

const ContentPreviewTitle: ThemeUICSSObject = {
  color: '#000000',
  gridColumn: ['span 6', 'span 6', 'span 8', 'span 12'],
};

const ContentPreviewGrid: ThemeUICSSObject = {
  rowGap: ['inc30', null, null, 'inc40'],
  columnGap: ['0', 'inc40', null, null],
  gridColumn: ['span 6', 'span 6', 'span 8', 'span 12'],
};

const ContentPreviewCardMultiActions: ThemeUICSSObject = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};

const ContentPreviewCardSingleAction: ThemeUICSSObject = {
  display: 'flex',
  justifyContent: 'flex-end',
};

const ContentPreviewCardExternalBtn: ThemeUICSSObject = {
  marginTop: 'inc20', // helps with center alignment
  '&:hover': {
    stroke: '#000000',
    cursor: 'pointer',
  },
};

const ContentPreviewCardLinkBtn: ThemeUICSSObject = {
  height: '28px',
};

const styles = {
  ContentPreviewGrid,
  ContentPreviewTitle,
  ContentPreviewWrapper,
  ContentPreviewCardLinkBtn,
  ContentPreviewCardExternalBtn,
  ContentPreviewCardSingleAction,
  ContentPreviewCardMultiActions,
};

export default styles;
