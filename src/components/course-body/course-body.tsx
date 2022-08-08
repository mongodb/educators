import Markdown from 'components/markdown';
import CourseBodyProps from './types';
import styles from './styles';

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
        ...styles.CourseBodyWrapper,
        ...wrapperStyles,
      }}
    >
      <Markdown text={text} />
    </section>
  );
}
