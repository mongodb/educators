import { GetStaticProps } from 'next';
import { Button, GridLayout, TypographyScale } from '@mdb/flora';

import heroData from 'data/hero.json';
import faqData from 'data/FAQs/educators-program';
import statisticsData from 'data/statistics.json';
import studentResourcesData from 'data/student-resources.json';

import { ContentData, getAllContent } from 'lib/cms-content';

import { useModalContext } from 'contexts/modal';

import Statistic from 'components/statistic';
import Accordion from 'components/accordion';
import ContentPreview from 'components/content-preview';
import ProgramBenefits from 'components/program-benefits';
import StudentResources from 'components/student-resources';
import {
  EDUCATOR_PROGRAM_FORM_FIELDS,
  EDUCATOR_PROGRAM_FORM_TEXTS,
  submitEducatorProgramForm,
} from 'components/form/utils';
import { FormState } from 'components/form/types';
import EducatorVerification from 'components/modal/educator-verification';

import styles from 'styles/home';

interface HomePageProps {
  content: ContentData;
  setFormState: (formState: FormState) => null;
}

export default function Home({
  content,
  setFormState,
}: HomePageProps): JSX.Element {
  const { openModal } = useModalContext();

  function onHeroButtonClick() {
    openModal(
      <EducatorVerification
        openForm={() =>
          setFormState({
            isOpen: true,
            fields: EDUCATOR_PROGRAM_FORM_FIELDS,
            texts: EDUCATOR_PROGRAM_FORM_TEXTS,
            submitForm: submitEducatorProgramForm,
          })
        }
      />
    );
  }

  return (
    <>
      <header sx={styles.HomePageHeroWrapper}>
        <TypographyScale
          inverse
          variant="heading1"
          sx={styles.HomePageHeroTitle}
        >
          {heroData.title}
        </TypographyScale>
        <div sx={styles.HomePageHeroContent}>
          <TypographyScale inverse variant="body1">
            {heroData.subtitle}
          </TypographyScale>
          <Button onClick={onHeroButtonClick} sx={styles.HomePageHeroButton}>
            {heroData.buttonText}
          </Button>
        </div>
      </header>
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
          title={
            <TypographyScale
              variant="heading3"
              customElement="h3"
              sx={styles.HomePageCurriculumTitle}
            >
              Curriculum Resources
            </TypographyScale>
          }
          subtitle={
            <TypographyScale
              variant="body1"
              color="secondary"
              sx={styles.HomePageCurriculumSubtitle}
            >
              Explore free resources for educators crafted by MongoDB experts to
              prepare learners with in-demand database skills and knowledge
            </TypographyScale>
          }
          content={content.lectures}
        />
        <ContentPreview
          title={
            <TypographyScale
              variant="heading5"
              customElement="h3"
              sx={styles.HomePageResourcesTitle}
            >
              Additional Educator Resources
            </TypographyScale>
          }
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
