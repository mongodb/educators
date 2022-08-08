import axios from 'axios';

export type ContentType = 'Case Study' | 'Course' | 'Lab' | 'PDF';

export interface Lesson {
  id: string;
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

const itemMap = ({
  id = '',
  title = '',
  contentType = '',
  slug = '',
  shortDescription = '',
  longDescription = '',
  externalLink = '',
  level = '',
  durationHours = 0,
  lessons = [],
  fileDownload = { url: '' },
}: any): ContentItem => ({
  // eslint-disable-line
  id,
  title,
  contentType: contentType === 'CaseStudy' ? 'Case Study' : contentType,
  slug,
  shortDescription,
  longDescription,
  externalLink,
  level,
  durationHours,
  // The below properties actually have many more fields in the CMS, so we filter them out here.
  lessons: lessons.map(({ id, link, title }: Lesson) => ({
    id,
    title,
    link,
  })),
  fileDownload: fileDownload?.url || '',
});

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
