import { visit } from 'unist-util-visit';

export const customDirective = () => {
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
