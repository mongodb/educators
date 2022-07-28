import styles from './styles';

interface AProps {
  href: string;
  children: JSX.Element;
}

const A = ({ href, children }: AProps): JSX.Element => (
  <a href={href} target="_blank" rel="noreferrer" sx={styles.AStyles}>
    {children}
  </a>
);

export default A;
