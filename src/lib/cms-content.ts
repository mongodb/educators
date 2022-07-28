import axios from 'axios';

export type ContentType = 'Case Study' | 'Course' | 'Lab' | 'PDF';

export interface Lesson {
  title: string;
  link: string;
}

export interface ContentItem {
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
  title,
  contentType,
  longDescription,
  slug,
  externalLink,
  level,
  durationHours,
  shortDescription,
  lessons,
  fileDownload,
}: any): ContentItem => {
  return {
    title,
    contentType,
    longDescription: longDescription || null,
    slug,
    externalLink: externalLink || null,
    level: level || null,
    durationHours: durationHours === undefined ? null : durationHours,
    shortDescription,
    lessons: lessons
      ? lessons.map((lesson: any) => ({
          title: lesson.title,
          link: lesson.link,
        }))
      : undefined,
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
