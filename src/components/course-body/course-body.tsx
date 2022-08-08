import Markdown from 'components/markdown';
import CourseBodyProps from './types';

/*
  TODO: Youtube Markdown Component Integration
  ::youtube[Test]{#testeoiwejoewfij}
*/

export default function CourseBody({
  text,
  wrapperStyles = {},
}: CourseBodyProps): JSX.Element {
  return (
    <section
      sx={{
        ...wrapperStyles,
      }}
    >
      <Markdown text={text} />
    </section>
  );
}
