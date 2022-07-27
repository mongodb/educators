import styles from './styles';

const P = ({ children }: { children: JSX.Element }) => (
  <p sx={styles.CourseBodyText}>{children}</p>
);

export default P;
