import { Button, Link, GridLayout, TypographyScale } from '@mdb/flora';
import CourseHeaderProps from './types';
import styles from './styles';

export default function CourseHeader({
  title,
}: CourseHeaderProps): JSX.Element {
  return (
    <header sx={styles.CourseHeaderWrapper}>
      {/* @ts-ignore */}
      <GridLayout sx={styles.CourseHeaderGrid}>
        {/* @ts-ignore */}
        <Link
          inverse
          linkIcon="chevron-left"
          sx={styles.CourseHeaderBreadcrumb}
        >
          View All MongoDB for Educators Content
        </Link>
        {/* @ts-ignore */}
        <TypographyScale
          inverse
          variant="heading2"
          customElement="h1"
          sx={styles.CourseHeaderTitle}
        >
          {title}
        </TypographyScale>
        <div sx={styles.CourseHeaderActions}>
          <Button>Open in Google Drive</Button>
          <Link
            inverse
            // @ts-ignore
            linkIcon="download"
          >
            Download Slides
          </Link>
        </div>
      </GridLayout>
    </header>
  );
}
