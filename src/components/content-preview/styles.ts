import { ThemeUICSSObject } from 'theme-ui';

const ContentPreviewWrapper: ThemeUICSSObject = {
	marginBottom: ['inc70', null, null, 'inc100'],
};

const ContentPreviewLayoutGrid: ThemeUICSSObject = {
	gridColumn: ['span 6', 'span 6', 'span 8', 'span 12'],
};

const ContentPreviewGrid: ThemeUICSSObject = {
	rowGap: ['inc30', null, null, 'inc40'],
	columnGap: ['0', 'inc40', null, null],
	gridColumn: ['span 6', 'span 6', 'span 8', 'span 12'],
};

const styles = {
	ContentPreviewGrid,
	ContentPreviewWrapper,
	ContentPreviewLayoutGrid,
};

export default styles;
