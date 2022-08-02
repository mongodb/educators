import axios from 'axios';

export type ContentType = 'Case Study' | 'Course' | 'Lab' | 'PDF';

export interface Lesson {
  title: string;
  link: string;
}

export interface ContentItem {
  id: string;
  title: string;
  contentType: ContentType;
  longDescription?: string;
  slug: string;
  externalLink?: string;
  level?: string;
  durationHours?: number;
  shortDescription: string;
  lessons?: Lesson[];
  fileDownload?: string;
}
// TODO: will come back and solidify all types after full data integration
const itemMap = ({
  id = null,
  title = null,
  contentType = null,
  slug = null,
  shortDescription = null,
  longDescription = null,
  externalLink = null,
  level = null,
  durationHours = null,
  lessons = [],
  fileDownload = null,
}: any): ContentItem => {
  return {
    id,
    title,
    contentType,
    slug,
    shortDescription,
    longDescription,
    externalLink,
    level,
    durationHours,
    // The below properties actually have many more fields in the CMS, so we filter them out here.
    lessons: lessons.map((lesson: Lesson) => ({
      title: lesson.title,
      link: lesson.link,
    })),
    fileDownload: fileDownload?.url || null,
  };
};

const getHeaders = (): { 'strapi-token': string } => {
  const API_KEY = process.env['CMS_API_KEY'];
  if (!API_KEY) {
    throw Error('CMS_API_KEY is not defined.');
  }
  return {
    'strapi-token': API_KEY,
  };
};

export const getAllContent = async () => {
  const headers = getHeaders();
  const { data } = await axios.get<any[]>(
    `${process.env['CMS_URL']}/public/academia`,
    { headers }
  );
  return data.map(itemMap);
};

export const getContentBySlug = async (slug: string) => {
  const headers = getHeaders();
  const { data } = await axios.get<any>(
    `${process.env['CMS_URL']}/public/academia/${slug}`,
    { headers }
  );
  return itemMap(data);
};
