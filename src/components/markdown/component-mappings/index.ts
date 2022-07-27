import P from './p';
import H2 from './h2';
import A from './a';
import Youtube from './youtube';
import { Components } from 'react-markdown';

const componentMappings = {
  p: P,
  a: A,
  h2: H2,
  youtube: Youtube,
} as Components;

export default componentMappings;
