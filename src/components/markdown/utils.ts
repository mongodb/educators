import { visit } from 'unist-util-visit';

export const customDirective = () => {
  // eslint-disable-next-line
  return (tree: any) => {
    visit(
      tree,
      ['textDirective', 'leafDirective', 'containerDirective'],
      node => {
        node.data = {
          hName: node.name,
          hProperties: node.attributes,
          ...node.data,
        };
        return node;
      }
    );
  };
};
