import axios from 'axios';

type ContentType = 'Case Study' | 'Course' | 'Lab' | 'PDF' | string;

export interface Lesson {
  id: string;
  title: string;
  link: string;
}

export interface ContentData {
  lectures: ContentItem[];
  resources: ContentItem[];
}

export interface ContentItem {
  id: string;
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

interface StrapiItem {
  id: string;
  title: string;
  contentType: ContentType;
  slug: string;
  shortDescription: string;
  longDescription: string;
  externalLink: string;
  level: string;
  durationHours: number;
  lessons: Array<Lesson>;
  fileDownload: { url: string };
}

interface StrapiData {
  curriculumResources: Array<StrapiItem>;
  additionalEducatorResources: Array<StrapiItem>;
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
}: StrapiItem): ContentItem => ({
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
  fileDownload: fileDownload.url,
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
  const {
    data: { curriculumResources, additionalEducatorResources },
  } = await axios.get<StrapiData>(
    `${process.env['CMS_URL']}/public/academia-homepage`,
    { headers }
  );

  return {
    lectures: curriculumResources.map(itemMap),
    resources: additionalEducatorResources.map(itemMap),
  } as ContentData;
};

export const getContentBySlug = async (slug: string) => {
  const headers = getHeaders();
  const { data } = await axios.get<StrapiItem>(
    `${process.env['CMS_URL']}/public/academia/${slug}`,
    { headers }
  );
  return itemMap(data);
};
