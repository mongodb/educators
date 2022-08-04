import { TypographyScale } from '@mdb/flora';
import { StatisticProps } from './types';
import styles from './styles';

export default function Statistic({
  count,
  description,
}: StatisticProps): JSX.Element {
  return (
    <div sx={styles.StatisticWrapper}>
      {/* @ts-ignore */}
      <TypographyScale
        variant="heading1"
        customElement="span"
        sx={styles.StatisticCount}
      >
        {count}
      </TypographyScale>
      <span sx={styles.StatisticDesc}>{description}</span>
    </div>
  );
}
