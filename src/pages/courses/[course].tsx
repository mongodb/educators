import { GetStaticProps, GetStaticPaths } from 'next';
import { GridLayout } from '@mdb/flora';

import Markdown from 'components/markdown';
import CourseHeader from 'components/course-header';
import CourseAside from 'components/course-aside';
import CourseList from 'components/course-list';

import { ContentItem, getAllContent, getContentBySlug } from 'lib/cms-content';

import styles from 'styles/course';
import { FormState } from 'components/form/types';

interface PageProps {
  content: ContentItem;
}

interface CoursePageProps {
  content: ContentItem;
  setFormState: (form: FormState) => void;
}

export default function CoursePage({
  setFormState,
  content: {
    title = '',
    level = '',
    lessons = [],
    durationHours = 0,
    externalLink = '',
    fileDownload = '',
    longDescription = '',
  },
}: CoursePageProps) {
  return (
    <>
      <CourseHeader
        title={title}
        link={externalLink}
        fileDownload={fileDownload}
      />
      <main sx={styles.CoursePageMain}>
        <GridLayout sx={styles.CoursePageGrid}>
          <section sx={styles.CoursePageContent}>
            <Markdown text={longDescription} />
            <CourseList lessons={lessons} />
          </section>
          <CourseAside
            title={title}
            level={level}
            duration={durationHours}
            setFormState={setFormState}
            wrapperStyles={styles.CoursePageAside}
          />
        </GridLayout>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { lectures } = await getAllContent();
  const paths = lectures.map(({ slug }) => ({ params: { course: slug } }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps<PageProps> = async ({ params }) => {
  if (!params?.course) {
    throw Error('No course slug passed to getStaticProps');
  }
  const { course } = params;

  let content;

  try {
    content = await getContentBySlug(course as string);
  } catch (err) {
    // Force a 404 on a slug that doesn't exist.
    return {
      notFound: true,
    };
  }

  if (content.contentType !== 'Course') {
    // Force a 404 on non-course fallback route.
    return {
      notFound: true,
    };
  }

  return {
    props: { content },
    revalidate: 120,
  };
};
