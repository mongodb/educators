import { Link } from '@mdb/flora';
import CourseListProps from './types';
import styles from './styles';

export default function CourseList({
  lessons,
  wrapperStyles,
}: CourseListProps): JSX.Element {
  return (
    <section
      sx={{
        ...styles.CourseListWrapper,
        ...wrapperStyles,
      }}
    >
      <h2>Lesson Slides</h2>
      <ol data-testid="lesson-list">
        {lessons.map(lesson => (
          <li key={lesson.title}>
            <h3>
              {/* @ts-ignore */}
              <Link sx={styles.CourseListLinks}>{lesson.title}</Link>
            </h3>
          </li>
        ))}
      </ol>
      <p>
        The materials are freely available for non-commercial use and are
        licensed under
        <a
          target="_blank"
          rel="noreferrer"
          href="https://creativecommons.org/licenses/by-nc-sa/3.0/"
          sx={styles.CourseListLegalLink}
        >
          {' '}
          Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported
          License
        </a>
        .
      </p>
    </section>
  );
}
