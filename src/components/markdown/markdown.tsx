import ReactMarkdown from 'react-markdown';
import remarkDirective from 'remark-directive';
import { customDirective } from './utils';
import componentMappings from './component-mappings';

interface MarkdownProps {
  text: string;
}

const Markdown = ({ text }: MarkdownProps) => (
  <ReactMarkdown
    remarkPlugins={[remarkDirective, customDirective]}
    components={componentMappings}
  >
    {text}
  </ReactMarkdown>
);

export default Markdown;
