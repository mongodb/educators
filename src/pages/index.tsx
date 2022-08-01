import { GetStaticProps } from 'next';

import { Button } from '@mdb/flora';

import heroData from 'data/hero.json';
import statisticsData from 'data/statistics.json';
import studentResourcesData from 'data/student-resources.json';

import Hero from 'components/hero';
import Statistic from 'components/statistic';
import ContentPreview from 'components/content-preview';
import StudentResources from 'components/student-resources';

import styles from 'styles/home';
import { ContentItem, getAllContent } from 'lib/cms-content';

interface PageProps {
  content: ContentItem[];
}
interface HomePageProps {
  openForm: () => void;
  content: ContentItem[];
}

export default function Home({
  openForm,
  content,
}: HomePageProps): JSX.Element {
  return (
    <>
      <Hero
        title={heroData.title}
        subtitle={heroData.subtitle}
        cta={
          <Button onClick={openForm} sx={styles.HomePageHeroButton}>
            {heroData.buttonText}
          </Button>
        }
      />
      <main sx={styles.HomePageMainStyles}>
        <section sx={styles.HomePageStatsSection}>
          {statisticsData.map(stat => (
            <Statistic
              key={stat.id}
              count={stat.count}
              description={stat.description}
            />
          ))}
        </section>
        <ContentPreview title="Curriculum Resources" content={lectureSlides} />
        <ContentPreview
          title="Additional Educator Resources"
          content={additionalContent}
        />
        <StudentResources
          mainCard={studentResourcesData.mainCard}
          subCards={studentResourcesData.subCards}
        />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  const content = await getAllContent();

  return {
    props: { content },
  };
};

/* ********* TEMP: MOCK DATA FOR MOCKUP BUILDOUT ********* */

const lectureSlides = [
  {
    tag: 'Lecture Slides',
    title: 'Introduction to Modern Databases',
    description: 'Anyone can paint. Lets get wild today.',
    count: 22,
  },
  {
    tag: 'Lecture Slides',
    title: 'MongoDB in 60 Minutes',
    description: 'Anyone can paint. Lets get wild today.',
    count: 1,
  },
  {
    tag: 'Lecture Slides',
    title: 'Querying non-relational Databases',
    description: 'Anyone can paint. Lets get wild today.',
    count: 4,
  },
  {
    tag: 'Lecture Slides',
    title: 'MongoDB Aggregation Framework',
    description: 'Anyone can paint. Lets get wild today.',
    count: 2,
  },
  {
    tag: 'Lecture Slides',
    title: 'MongoDB an Application Data Platform',
    description: 'Anyone can paint. Lets get wild today.',
    count: 22,
  },
];

const additionalContent = [
  {
    tag: 'PDF',
    title: 'Little Book of MongoDB',
    description:
      'This course compares and contrasts non-relational and relational databases, outlines MongoDBs architecture',
  },
  {
    tag: 'PDF',
    title: 'Suggested Reading List',
    description:
      'This course compares and contrasts non-relational and relational databases, outlines MongoDBs architecture',
  },
  {
    tag: 'PDF',
    title: 'Cheatsheet',
    description:
      'This course compares and contrasts non-relational and relational databases, outlines MongoDBs architecture',
  },
  {
    tag: 'Lab',
    title: 'Python Lab',
    description:
      'This course compares and contrasts non-relational and relational databases, outlines MongoDBs architecture',
  },
  {
    tag: 'Case Study',
    title: 'Case Study 1',
    description:
      'This course compares and contrasts non-relational and relational databases, outlines MongoDBs architecture',
  },
];
