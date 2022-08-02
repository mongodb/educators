import { GetStaticProps } from 'next';
import { Button } from '@mdb/flora';

import heroData from 'data/hero.json';
import statisticsData from 'data/statistics.json';
import studentResourcesData from 'data/student-resources.json';

import { ContentItem, getAllContent } from 'lib/cms-content';

import Hero from 'components/hero';
import Statistic from 'components/statistic';
import ContentPreview from 'components/content-preview';
import StudentResources from 'components/student-resources';

import styles from 'styles/home';

interface ContentData {
  lectures: ContentItem[];
  resources: ContentItem[];
}

interface HomePageProps {
  openForm: () => void;
  content: ContentData;
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
        <ContentPreview
          title="Curriculum Resources"
          content={content.lectures}
        />
        <ContentPreview
          title="Additional Educator Resources"
          content={content.resources}
        />
        <StudentResources
          mainCard={studentResourcesData.mainCard}
          subCards={studentResourcesData.subCards}
        />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps<{
  content: ContentData;
}> = async () => {
  const content: ContentData = {
    lectures: [],
    resources: [],
  };

  (await getAllContent()).filter(item =>
    item.contentType === 'Course'
      ? content.lectures.push(item)
      : content.resources.push(item)
  );

  return {
    props: { content },
  };
};
