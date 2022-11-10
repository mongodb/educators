import { Link } from '@mdb/flora';
import CourseListProps from './types';
import styles from './styles';

export default function CourseList({ lessons }: CourseListProps): JSX.Element {
  return (
    <>
      <h2>Lesson Slides</h2>
      <ol sx={styles.CourseList}>
        {lessons.map(({ id, link, title }) => (
          <li key={id}>
            <h3>
              <Link href={link} target="_blank" sx={styles.CourseListLinks}>
                {title}
              </Link>
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
    </>
  );
}
