import {
  GridLayout,
  TypographyScale,
} from '@mdb/flora';
import FeaturedCard from 'components/featured-card';
import styles from './styles';

function PurpleBlobSVG() {
  return (
    <svg
      width="1317"
      height="1317"
      viewBox="0 0 1317 1317"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      sx={{
        position: 'absolute',
        zIndex: '-1',
        top: 0,
        left: ['-290px', '-170px', '-190px', '200px'],
      }}
    >
      <path
        d="M164.625 1317H493.875C584.748 1317 658.5 1243.25 658.5 1152.38V987.75C658.5 806.004 806.004 658.499 987.75 658.499H1152.38C1243.25 658.499 1317 584.747 1317 493.874V164.624C1317 73.7512 1243.25 -0.000854492 1152.38 -0.000854492H493.875C403.002 -0.000854492 329.25 73.7512 329.25 164.624V165.943C329.25 256.815 403.002 330.568 493.875 330.568C584.748 330.568 658.5 404.319 658.5 495.193C658.5 586.065 584.748 659.818 493.875 659.818H164.625C73.752 659.818 0 733.569 0 824.442V1153.69C0 1243.25 73.752 1317 164.625 1317Z"
        fill="#F9EBFF"
      />
    </svg>
  );
}

export default function StudentResources(): JSX.Element {
  return (
    // @ts-ignore
    <GridLayout>
      <section sx={styles.StudentResourcesWrapper}>
        <PurpleBlobSVG />
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
