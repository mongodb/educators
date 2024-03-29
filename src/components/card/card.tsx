import { Pill, HorizontalRule, TypographyScale } from '@mdb/flora';
import CardProps from './types';
import styles from './styles';

export default function Card({
  tag,
  title,
  count,
  description,
  actions = <></>,
}: CardProps): JSX.Element {
  return (
    <div sx={styles.CardWrapper}>
      <div sx={styles.CardContent}>
        <Pill text={tag} variant="identifier" sx={styles.CardPill} />
        <TypographyScale
          customElement="h4"
          variant="heading6"
          sx={styles.CardTitle}
        >
          {title}
        </TypographyScale>
        <TypographyScale variant="body3" color="secondary">
          {description}
        </TypographyScale>
        {!!count && (
          <TypographyScale
            variant="body3"
            color="secondary"
            sx={styles.CardLessonCount}
          >
            {count} {count === 1 ? 'Lesson' : 'Lessons'}
          </TypographyScale>
        )}
      </div>
      <HorizontalRule
        sx={{
          ...styles.CardDivider,
          marginTop: !count ? '30px' : 'inc40',
        }}
      />
      {actions}
    </div>
  );
}
