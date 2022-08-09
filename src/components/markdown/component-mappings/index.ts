import dynamic from 'next/dynamic';
import { Components } from 'react-markdown';
import { A, P, H2 } from './elements';

// React-Player component can't use SSR or will result in Hydration error
const Youtube = dynamic(
  () => import('./elements').then(({ Youtube }): any => Youtube), // eslint-disable-line
  { ssr: false }
);

const componentMappings = {
  p: P,
  a: A,
  h2: H2,
  youtube: Youtube,
} as Components;

export default componentMappings;
