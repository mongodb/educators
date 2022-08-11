import { Grid } from 'theme-ui';
import {
  GridLayout,
  Link,
  SystemIcon,
  TypographyScale,
  TargetType,
  ESystemIconNames,
} from '@mdb/flora';

import Card from 'components/card';

import ContentPreviewProps from './types';
import styles from './styles';

function getCardActions({
  slug,
  contentType,
  externalLink,
  fileDownload,
}: {
  [key: string]: string;
}): JSX.Element {
  const getLinkComponent = (
    href: string,
    linkIcon: ESystemIconNames | 'chevron',
    text: string,
    target: TargetType = '_self'
  ) => (
    // @ts-ignore
    <Link
      href={href}
      target={target}
      linkIcon={linkIcon}
      linkIconSize="medium"
      sx={styles.ContentPreviewCardLinkBtn}
    >
      {text}
    </Link>
  );

  const actionMapper: { [key: string]: JSX.Element } = {
    course: (
      <div sx={styles.ContentPreviewCardMultiActions}>
        <a target="_blank" rel="noreferrer" href={externalLink}>
          <SystemIcon
            name={ESystemIconNames.EXTERNAL}
            sx={styles.ContentPreviewCardExternalBtn}
          />
        </a>
        {getLinkComponent(
          `academia/courses/${slug}`,
          'chevron',
          'View Lecture Details'
        )}
      </div>
    ),
    lab: (
      <div sx={styles.ContentPreviewCardSingleAction}>
        {getLinkComponent(
          externalLink,
          'chevron',
          'View Lab on GitHub',
          '_blank'
        )}
      </div>
    ),
    pdf: (
      <div sx={styles.ContentPreviewCardSingleAction}>
        {getLinkComponent(
          fileDownload,
          ESystemIconNames.DOWNLOAD,
          'Download PDF',
          '_blank'
        )}
      </div>
    ),
    'case study': (
      <div sx={styles.ContentPreviewCardSingleAction}>
        {getLinkComponent(externalLink, 'chevron', 'View Case Study', '_blank')}
      </div>
    ),
    default: <></>,
  };

  return contentType
    ? actionMapper[contentType.toLowerCase()]
    : actionMapper.default;
}

export default function ContentPreview({
  title,
  content,
}: ContentPreviewProps): JSX.Element {
  return (
    <section sx={styles.ContentPreviewWrapper}>
      {/* @ts-ignore */}
      <GridLayout>
        {/* @ts-ignore */}
        <TypographyScale
          variant="heading5"
          customElement="h3"
          sx={styles.ContentPreviewTitle}
        >
          {title}
        </TypographyScale>
        <Grid columns={[1, null, 2, 3]} sx={styles.ContentPreviewGrid}>
          {content.map(
            ({
              id,
              slug,
              lessons,
              contentType,
              externalLink,
              fileDownload,
              shortDescription,
              title: cardTitle,
            }) => {
              return (
                <Card
                  key={id}
                  title={cardTitle}
                  tag={contentType}
                  count={lessons?.length}
                  description={shortDescription}
                  actions={getCardActions({
                    slug,
                    contentType,
                    externalLink,
                    fileDownload,
                  })}
                />
              );
            }
          )}
        </Grid>
      </GridLayout>
    </section>
  );
}
