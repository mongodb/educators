import { TypographyScale } from '@mdb/flora';
import HeroProps from './types';
import styles from './styles';

export default function Hero({
  title,
  subtitle,
  cta = <></>,
}: HeroProps): JSX.Element {
  return (
    <header sx={styles.HeroWrapper}>
      <TypographyScale inverse variant="heading1" sx={styles.HeroTitle}>
        {title}
      </TypographyScale>
      <div sx={styles.HeroContent}>
        <TypographyScale inverse variant="body1">
          {subtitle}
        </TypographyScale>
        {cta}
      </div>
    </header>
  );
}
