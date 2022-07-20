import { Link } from '@mdb/flora';
import CourseAsideProps from './types';
import styles from './styles';

export default function CourseList({
  lessons,
  wrapperStyles,
}: CourseAsideProps): JSX.Element {
  return (
    <section
      sx={{
        ...styles.CourseListWrapper,
        ...wrapperStyles,
      }}
    >
      <h2>Lessons</h2>
      <ol>
        {lessons.map(lesson => (
          <li key={lesson.title}>
            <Link sx={styles.CourseListLinks}>{lesson.title}</Link>
          </li>
        ))}
      </ol>
      <p>
        The materials are freely available for non-commercial use and are
        licensed under
        <a>
          {' '}
          Creative Commons Attribution-Non-Commercial-ShareAlike 3.0 Unported
          License
        </a>
        .
      </p>
    </section>
  );
}
