import { ContentItem } from 'lib/cms-content';

export default interface ContentPreviewProps {
  title: JSX.Element;
  subtitle?: JSX.Element;
  content: Array<ContentItem>;
}
