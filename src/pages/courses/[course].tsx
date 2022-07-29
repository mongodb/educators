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

export default function CoursePage({ openForm, content }: CoursePageProps) {
  return (
    <>
      <CourseHeader title="Introduction to Modern Databases" />
      <main sx={styles.CoursePageMain}>
        {/* @ts-ignore */}
        <GridLayout sx={styles.CoursePageGrid}>
          <CourseBody
            formatText={mockFormatText}
            outlineText={mockOutlineText}
            wrapperStyles={styles.CoursePageBody}
          />
          <CourseAside
            openForm={openForm}
            level={courseData.level}
            length={courseData.length}
            prerequisites={courseData.pre_reqs}
            wrapperStyles={styles.CoursePageAside}
          />
          <CourseList
            lessons={courseList}
            wrapperStyles={styles.CoursePageList}
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
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<PageProps> = async ({ params }) => {
  if (!params?.course) {
    throw Error('No course slug passed to getStaticProps');
  }
  const { course } = params;

  const content = await getContentBySlug(course as string);
  if (content.contentType !== 'Course') {
    throw Error(
      `Content of type ${content.contentType} should not generate pages, only courses have pages.`
    );
  }
  return {
    props: { content },
  };
};

/* --- TEMP MOCK DATA UNTIL INTEGRATION --- */
const mockOutlineText = [
  'The course compares and contrasts relational and non-relational databases, outline the architecture of MongoDB, and details how to model data in MongoDB. The included quizzes and hands-on excercises support active learning and retention of key concepts and skills.',
  'This material can support a wide variety of instructional objectives, including learning best practices for querying data and structuring data models in MongoDB, and using features like transactions and aggregations.',
];

const mockFormatText = [
  'Introduction to Modern Databases has been designed to cover the A-Z of MongoDB for educators in slide format. Educators are welcome to teach the entire course or select individual leassons and/or slides as needed',
  'Quiz questions with explained answers and instructions for hands-on excercises are included on slides interspersed throughout. The hands-on activities use the browser-based MongoDB Web Shell, an environment that runs on servers hosted by MongoDB.',
];

const courseData = {
  length: '22 Hour-long lectures',
  level: 'CS100',
  pre_reqs: ['Class ABC', 'Knowledge of XYZ'],
};

const courseList = [
  {
    title: 'What is modern general purpose database?',
    slug: 'http://www.google.com',
  },
  {
    title: 'SQL and MQL',
    slug: 'http://www.google.com',
  },
  {
    title: 'Non-relational databases',
    slug: 'http://www.google.com',
  },
  {
    title: 'Querying in SQL and in MQL',
    slug: 'http://www.google.com',
  },
  {
    title: 'When to use SQL and when to use MQL',
    slug: 'http://www.google.com',
  },
  {
    title: 'Documents and MongoDB',
    slug: 'http://www.google.com',
  },
  {
    title: 'MongoDB is a data platform',
    slug: 'http://www.google.com',
  },
  {
    title: 'MongoDB architecture',
    slug: 'http://www.google.com',
  },
  {
    title: 'MongoDB Atlas',
    slug: 'http://www.google.com',
  },
  {
    title: 'The MongoDB Query Language (MQL)',
    slug: 'http://www.google.com',
  },
  {
    title: 'Querying complex data with MQL',
    slug: 'http://www.google.com',
  },
  {
    title: 'Querying data with operators and compound conditions',
    slug: 'http://www.google.com',
  },
  {
    title: 'Inserting and updating data in MongoDB',
    slug: 'http://www.google.com',
  },
  {
    title: 'Deleting data in MongoDB',
    slug: 'http://www.google.com',
  },
];
