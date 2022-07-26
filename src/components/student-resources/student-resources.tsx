import { GridLayout, TypographyScale } from '@mdb/flora';
import FeaturedCard from 'components/featured-card';
import Image from 'components/image';
import styles from './styles';

export default function StudentResources(): JSX.Element {
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
          Resources for Students
        </TypographyScale>
        {/* @ts-ignore */}
        <TypographyScale
          color="secondary"
          sx={styles.StudentResourcesDescription}
        >
          MongoDB offers resources and opportunities to empower students to make
          the most of MongoDB
        </TypographyScale>
        <FeaturedCard
          noBorder
          fullWidth
          cta={{
            type: 'button',
            text: 'Learn More',
          }}
          imgSrc="/academia/desk.svg"
          imgSizes={{
            width: ['202px', '340px', null, '431px'],
            height: ['202px', '340px', null, '431px'],
          }}
          title="Get $200 of Benefits with the MongoDB Student Pack"
          subtitle="Access free Certification and $50 in Atlas Credits with the Github Student Pack"
        />
        <div sx={styles.StudentResourcesSecondaryCardsWrapper}>
          <FeaturedCard
            title="MongoDB Internships"
            subtitle="Work on teams and projects that will be used by thousands of developers and organizations across the world."
            imgSrc="/academia/computer.svg"
            imgSizes={{
              width: ['119px', null, '168px', '179px'],
              height: ['129px', null, '182px', '194px'],
            }}
          />
          <FeaturedCard
            title="Student Demo Apps"
            subtitle="Inspire your students with Demo Apps that students have created with the power of MongoDB."
            imgSrc="/academia/directory.svg"
            imgSizes={{
              width: ['119px', null, '168px', '179px'],
              height: ['129px', null, '182px', '194px'],
            }}
          />
        </div>
      </section>
    </GridLayout>
  );
}
