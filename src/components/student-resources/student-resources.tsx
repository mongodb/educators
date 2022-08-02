import { GridLayout, TypographyScale } from '@mdb/flora';

import Image from 'components/image';
import FeaturedCard from 'components/featured-card';

import StudentResourcesProps from './types';
import styles from './styles';

export default function StudentResources({
  mainCard,
  subCards,
}: StudentResourcesProps): JSX.Element {
  return (
    // @ts-ignore
    <GridLayout>
      <section sx={styles.StudentResourcesWrapper}>
        <Image
          src="/academia/brand-shape-large.svg"
          alt="mongoDB brand icon"
          styles={styles.StudentResourcesBG}
        />
        {/* @ts-ignore */}
        <TypographyScale variant="heading2" sx={styles.StudentResourcesTitle}>
          Student Resources
        </TypographyScale>
        {/* @ts-ignore */}
        <TypographyScale
          color="secondary"
          sx={styles.StudentResourcesDescription}
        >
          MongoDB offers resources and opportunities to prepare and empower
          students with in-demand skills and resume-worthy certifications.
        </TypographyScale>
        <FeaturedCard
          noBorder
          fullWidth
          title="Get $200 of Benefits with the MongoDB Student Pack"
          subtitle="Access free Certification and $50 in Atlas Credits with the Github Student Pack"
          cta={{
            type: 'button',
            text: 'Learn More',
            href: mainCard.href,
          }}
          imgSrc={mainCard.imgSrc}
          imgSizes={{
            width: ['202px', '340px', null, '431px'],
            height: ['202px', '340px', null, '431px'],
          }}
        />
        <div sx={styles.StudentResourcesSecondaryCardsWrapper}>
          {subCards.map(card => (
            <FeaturedCard
              key={card.title}
              title={card.title}
              subtitle={card.subtitle}
              cta={{
                type: 'link',
                text: card.cta || '',
                href: card.href,
              }}
              imgSrc={card.imgSrc}
              imgSizes={{
                width: ['119px', null, '168px', '179px'],
                height: ['129px', null, '182px', '194px'],
              }}
            />
          ))}
        </div>
      </section>
    </GridLayout>
  );
}
