import { Link, TypographyScale } from '@mdb/flora';
import SocialShare from 'components/social-share';
import CourseAsideProps from './types';
import styles from './styles';

export default function CourseAside({
  level,
  length,
  wrapperStyles,
  prerequisites,
}: CourseAsideProps): JSX.Element {
  return (
    <aside
      sx={{
        ...styles.CourseAsideWrapper,
        ...wrapperStyles,
      }}
    >
      <section sx={styles.CourseAsideSection}>
        <div sx={styles.CourseAsideWidget}>
          <h3 sx={styles.CourseAsideLabel}>Length</h3>
          <span sx={styles.CourseAsideDetail}>{length}</span>
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
            linkUrl="http://www.mongodb.com"
            facebookUrl="http://www.mongodb.com"
            twitterUrl="http://www.mongodb.com"
            linkedInUrl="http://wwww.mongodb.com"
            wrapperStyles={{
              marginTop: '6px',
            }}
          />
        </div>
        <div
          sx={{
            ...styles.CourseAsideWidget,
            order: [1, 2, null, null],
          }}
        >
          <h3 sx={styles.CourseAsideLabel}>Pre-requisites</h3>
          <ul sx={styles.CourseAsideReqList}>
            {prerequisites.map(req => (
              <li>{req}</li>
            ))}
          </ul>
        </div>
      </section>
      <div sx={styles.CourseAsidePrompt}>
        <TypographyScale inverse variant="body1">
          Join the Educator's Community!
        </TypographyScale>
        <TypographyScale
          inverse
          variant="body3"
          sx={styles.CourseAsidePromptBody}
        >
          Join to receive our newsletter and get connected with MongoDB
          professionals.
        </TypographyScale>
        <Link inverse linkIcon="arrow" sx={styles.CourseAsidePromptLink}>
          Join Now
        </Link>
        <img
          src="/academia/brand-shape-small.svg"
          alt="mongoDB brand shape"
          sx={styles.CourseAsidePromptBG}
        />
      </div>
    </aside>
  );
}
