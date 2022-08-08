import { useEffect, useState } from 'react';
import { Link, TypographyScale } from '@mdb/flora';

import Image from 'components/image';
import SocialShare from 'components/social-share';
import CourseAsideProps from './types';

import styles from './styles';

function generateSocialSharingURLs(
  socialUrl: string,
  paramConfig: { [k: string]: string | boolean }
) {
  const keys = Object.keys(paramConfig);
  const params = keys.reduce(
    (acc, val, idx) =>
      `${acc}${val}=${encodeURIComponent(paramConfig[val])}${
        idx !== keys.length ? '&' : ''
      }`,
    '?'
  );
  return `${socialUrl}${params}`;
}

export default function CourseAside({
  level,
  title,
  duration,
  openForm,
  wrapperStyles = {},
}: CourseAsideProps): JSX.Element {
  const [currentPageUrl, setCurrentPageUrl] = useState<string>('');

  // because of SSR, we need to assure the component mounts before trying to access window obj
  useEffect(() => {
    setCurrentPageUrl(window.location.href);
  }, []);

  return (
    <aside sx={{ ...wrapperStyles }} data-testid="course-aside">
      <section sx={styles.CourseAsideSection}>
        <div sx={styles.CourseAsideWidget}>
          <h3 sx={styles.CourseAsideLabel}>Length</h3>
          <span sx={styles.CourseAsideDetail}>
            {duration} Hour-long lectures
          </span>
        </div>
        <div sx={styles.CourseAsideWidget}>
          <h3 sx={styles.CourseAsideLabel}>Level</h3>
          <span sx={styles.CourseAsideDetail}>{level}</span>
        </div>
      </section>
      <section sx={styles.CourseAsideSection}>
        <div
          sx={{
            ...styles.CourseAsideWidget,
            order: [2, 1, null, null],
          }}
        >
          <h3 sx={styles.CourseAsideLabel}>Share</h3>
          <SocialShare
            linkUrl={currentPageUrl}
            facebookUrl={generateSocialSharingURLs(
              'http://www.facebook.com/sharer.php',
              {
                u: currentPageUrl,
              }
            )}
            twitterUrl={generateSocialSharingURLs(
              'https://twitter.com/intent/tweet',
              {
                url: currentPageUrl,
                text: title,
              }
            )}
            linkedInUrl={generateSocialSharingURLs(
              'https://www.linkedin.com/shareArticle',
              {
                url: currentPageUrl,
                mini: true,
                title,
                summary: title,
                source: 'MongoDB',
              }
            )}
            wrapperStyles={{
              marginTop: '6px',
            }}
          />
        </div>
      </section>
      <div sx={styles.CourseAsidePrompt}>
        {/* @ts-ignore */}
        <TypographyScale inverse variant="body1">
          Join the Educator{"'"}s Community!
        </TypographyScale>
        {/* @ts-ignore */}
        <TypographyScale
          inverse
          variant="body3"
          sx={styles.CourseAsidePromptBody}
        >
          Engage with a community of passionate educators and MongoDB
          professionals!
        </TypographyScale>
        {/* @ts-ignore */}
        <Link
          inverse
          linkIcon="arrow"
          onClick={openForm}
          sx={styles.CourseAsidePromptLink}
        >
          Join Now
        </Link>
        <Image
          alt="mongoDB brand shape"
          styles={styles.CourseAsidePromptBG}
          src="/academia/brand-shape-small.svg"
        />
      </div>
    </aside>
  );
}
