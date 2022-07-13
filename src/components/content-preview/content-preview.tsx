import { GridLayout, TypographyScale } from '@mdb/flora';
import ContentPreviewProps from './types';
import Card from 'components/card';
import styles from './styles';
import { Grid } from 'theme-ui';

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
          sx={styles.ContentPreviewLayoutGrid}
        >
          {title}
        </TypographyScale>
        <Grid columns={[1, null, 2, 3]} sx={styles.ContentPreviewGrid}>
          {content.map(card => {
            return (
              <Card
                key={card.title} // TODO: better keys when actual data used
                tag={card.tag}
                title={card.title}
                count={card.count}
                description={card.description}
              />
            );
          })}
        </Grid>
      </GridLayout>
    </section>
  );
}
