import ReactPlayer from 'react-player/lazy';
import styles from './styles';

// Standard Elements
export const A = ({
  href,
  children,
}: {
  href: string;
  children: JSX.Element;
}): JSX.Element => (
  <a href={href} target="_blank" rel="noreferrer" sx={styles.AStyles}>
    {children}
  </a>
);

export const P = ({ children }: { children: JSX.Element }) => (
  <div sx={styles.PStyles}>{children}</div>
);

// Heading Elements
export const H2 = ({ children }: { children: JSX.Element }) => (
  <h2 sx={styles.H2Styles}>{children}</h2>
);

// Custom Elements
export const Youtube = ({ vid }: { vid: string }) => (
  <div sx={styles.YoutubeWrapper}>
    <ReactPlayer
      height="100%"
      width="100%"
      sx={styles.Youtube}
      url={`https://www.youtube.com/watch?v=${vid}`}
    />
  </div>
);
