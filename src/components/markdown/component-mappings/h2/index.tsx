import styles from './styles';

const H2 = ({ children }: { children: JSX.Element }) => (
  <h2 sx={styles.CourseBodyTitles}>{children}</h2>
);

export default H2;
