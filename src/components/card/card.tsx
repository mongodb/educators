import {
  Link,
  Pill,
  SystemIcon,
  HorizontalRule,
  TypographyScale,
} from '@mdb/flora';
import CardProps from './types';
import styles from './styles';

export default function Card({
  tag,
  title,
  count,
  description,
}: CardProps): JSX.Element {
  return (
    <div sx={styles.CardWrapper}>
      <div sx={styles.CardContent}>
        <Pill text={tag} variant="identifier" sx={styles.CardPill} />
        {/* @ts-ignore */}
        <TypographyScale variant="heading6" sx={styles.CardTitle}>
          {title}
        </TypographyScale>
        {/* @ts-ignore */}
        <TypographyScale variant="body3" color="secondary">
          {description}
        </TypographyScale>
        {count && (
          /* @ts-ignore */
          <TypographyScale
            variant="body3"
            color="secondary"
            sx={styles.CardLessonCount}
          >
            {count} Lessons
          </TypographyScale>
        )}
      </div>
      <HorizontalRule
        sx={{
          ...styles.CardDivider,
          marginTop: !count ? '30px' : 'inc40',
        }}
      />
      <div sx={styles.CardActions}>
        {/* @ts-ignore */}
        <SystemIcon name="external" />
        {/* @ts-ignore */}
        <Link sx={styles.CardLink} linkIcon="chevron">
          Learn More
        </Link>
      </div>
    </div>
  );
}
