import { GetStaticProps, GetStaticPaths } from 'next';
import { GridLayout } from '@mdb/flora';

import CourseHeader from 'components/course-header';
import CourseBody from 'components/course-body';
import CourseAside from 'components/course-aside';
import CourseList from 'components/course-list';

import { ContentItem, getAllContent, getContentBySlug } from 'lib/cms-content';

import styles from 'styles/course';

interface PageProps {
  content: ContentItem;
}

interface CoursePageProps {
  openForm: () => void;
  content: ContentItem;
}

export default function CoursePage({
  openForm,
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
        {/* @ts-ignore */}
        <GridLayout sx={styles.CoursePageGrid}>
          <section sx={styles.CoursePageContent}>
            <CourseBody text={longDescription} />
            <CourseList lessons={lessons} />
          </section>
          <CourseAside
            title={title}
            level={level}
            openForm={openForm}
            duration={durationHours}
            wrapperStyles={styles.CoursePageAside}
          />
        </GridLayout>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const content = await getAllContent();
  const paths = content
    .filter(({ contentType }) => contentType === 'Course')
    .map(({ slug }) => ({ params: { course: slug } }));

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
  };
};
