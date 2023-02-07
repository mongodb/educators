import { GetStaticProps } from 'next';
import { Button, GridLayout, TypographyScale } from '@mdb/flora';

import heroData from 'data/hero.json';
import faqData from 'data/FAQs/config';
import statisticsData from 'data/statistics.json';
import studentResourcesData from 'data/student-resources.json';

import { ContentData, getAllContent } from 'lib/cms-content';

import Hero from 'components/hero';
import Statistic from 'components/statistic';
import Accordion from 'components/accordion';
import ContentPreview from 'components/content-preview';
import ProgramBenefits from 'components/program-benefits';
import StudentResources from 'components/student-resources';

import styles from 'styles/home';

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
        <ProgramBenefits />
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
        <section id="faq-section">
          <TypographyScale variant="heading4" sx={styles.HomePageFAQTitle}>
            Educator Program FAQs
          </TypographyScale>
          <GridLayout sx={{ gridGap: 0 }}>
            {faqData.map(({ title, body }) => (
              <Accordion
                key={title}
                title={title}
                body={body}
                wrapperStyles={styles.HomePageFAQs}
              />
            ))}
          </GridLayout>
        </section>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps<{
  content: ContentData;
}> = async () => {
  const content = await getAllContent();

  return {
    props: { content },
    revalidate: 120,
  };
};
