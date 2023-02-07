import ReactMarkdown from 'react-markdown';
import ReyhpeRaw from 'rehype-raw';
import remarkDirective from 'remark-directive';
import { customDirective } from './utils';
import componentMappings from './component-mappings';

interface MarkdownProps {
  text: string;
}

const Markdown = ({ text }: MarkdownProps) => (
  <ReactMarkdown
    components={componentMappings}
    rehypePlugins={[ReyhpeRaw]}
    remarkPlugins={[remarkDirective, customDirective]}
  >
    {text}
  </ReactMarkdown>
);

export default Markdown;
