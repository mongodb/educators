import CourseBodyProps from './types';
import styles from './styles';

/* 
  TODO: this can be combined into one section that just loops through 2 items,
  revist this once getting an idea of data structure
*/

export default function CourseBody({
  outlineText,
  formatText,
  wrapperStyles,
}: CourseBodyProps): JSX.Element {
  return (
    <section
      sx={{
        ...styles.CourseBodyWrapper,
        ...wrapperStyles,
      }}
    >
      <section sx={styles.CourseBodySection}>
        <h2 sx={styles.CourseBodyTitles}>Course Outline</h2>
        {outlineText.map(text => (
          <p key={text} sx={styles.CourseBodyText}>
            {text}
          </p>
        ))}
      </section>
      <section>
        <h2 sx={styles.CourseBodyTitles}>Course Format</h2>
        {formatText.map(text => (
          <p key={text} sx={styles.CourseBodyText}>
            {text}
          </p>
        ))}
      </section>
    </section>
  );
}
