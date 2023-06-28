import { gql } from '@apollo/client';
import client from './apollo-client';

type ContentType = 'Case Study' | 'Course' | 'Lab' | 'PDF' | string;

export interface Lesson {
  title: string;
  link: string;
}

export interface ContentData {
  lectures: ContentItem[];
  resources: ContentItem[];
}

interface Connection<ConnectionType> {
  edges: { node: ConnectionType }[];
}
interface CMSItem {
  content_type: string;
  duration_hours: number;
  external_link: string;
  file_downloadConnection: Connection<{ url: string }>;
  lessons: { lesson: Lesson }[];
  level: string;
  long_description: string;
  short_description: string;
  slug: string;
  spoken_language: string;
  title: string;
}

export interface ContentItem {
  title: string;
  contentType: ContentType;
  longDescription: string;
  slug: string;
  externalLink: string;
  level: string;
  durationHours: number;
  shortDescription: string;
  lessons: Lesson[];
  fileDownload: string;
}

const itemMap = (item: CMSItem): ContentItem => ({
  title: item.title,
  contentType: item.content_type,
  slug: item.slug,
  shortDescription: item.short_description,
  longDescription: item.long_description,
  externalLink: item.external_link,
  level: item.level,
  durationHours: item.duration_hours,
  // The below properties actually have many more fields in the CMS, so we filter them out here.
  lessons: item.lessons.map(({ lesson }) => lesson),
  fileDownload: item.file_downloadConnection.edges.length
    ? item.file_downloadConnection.edges[0].node.url
    : '',
});

const academiaFields = ` 
      content_type
      duration_hours
      external_link
      file_downloadConnection {
        edges {
          node {
            url
          }
        }
      }
      lessons {
        ... on AcademiaLessonsLesson {
          __typename
          lesson {
            link
            title
          }
        }
      }
      level
      long_description
      short_description
      slug
      spoken_language
      title
`;

const getAllAcademiaQuery = gql`
  query all_academia_homepage {
    all_academia_homepage {
      items {
        additional_educator_resourcesConnection(limit: 50) {
          edges {
            node {
              ... on Academia {
                ${academiaFields}
              }
            }
          }
        }
        curriculum_resourcesConnection(limit: 50) {
          edges {
            node {
              ... on Academia {
                ${academiaFields}
              }
            }
          }
        }
      }
    }
  }
`;

const getAcademiaBySlugQuery = gql`
  query all_academia_homepage($slug: String!) {
    all_academia(where: { slug: $slug }) {
      items {
        ${academiaFields}
      }
    }
  }
`;

export const getAllContent = async () => {
  const response: any = await client.query({
    query: getAllAcademiaQuery,
  });

  const { items } = response.data.all_academia_homepage;

  const curriculumResources = items[0].curriculum_resourcesConnection.edges.map(
    (edge: any) => edge.node
  );
  const additionalEducatorResources =
    items[0].additional_educator_resourcesConnection.edges.map(
      (edge: any) => edge.node
    );

  return {
    lectures: curriculumResources.map(itemMap),
    resources: additionalEducatorResources.map(itemMap),
  } as ContentData;
};

export const getContentBySlug = async (slug: string) => {
  const response: any = await client.query({
    query: getAcademiaBySlugQuery,
    variables: { slug },
  });
  const { items } = response.data.all_academia;
  return itemMap(items[0]);
};
