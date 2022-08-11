import {
  Button,
  Link,
  GridLayout,
  TypographyScale,
  ESystemIconNames,
} from '@mdb/flora';
import CourseHeaderProps from './types';
import styles from './styles';

export default function CourseHeader({
  link,
  title,
  fileDownload,
}: CourseHeaderProps): JSX.Element {
  return (
    <header sx={styles.CourseHeaderWrapper}>
      {/* @ts-ignore */}
      <GridLayout sx={styles.CourseHeaderGrid}>
        {/* @ts-ignore */}
        <Link
          inverse
          href="/academia"
          linkIcon="chevron-left"
          sx={styles.CourseHeaderBreadcrumb}
        >
          Back to MongoDB for Educators Home
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
          <Button href={link} target="_blank">
            Open in Google Drive
          </Button>
          {/* @ts-ignore */}
          <Link
            inverse
            href={fileDownload}
            linkIcon={ESystemIconNames.DOWNLOAD}
            sx={styles.CourseHeaderDownload}
          >
            Download
          </Link>
        </div>
      </GridLayout>
    </header>
  );
}
