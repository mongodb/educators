import {
  Link,
  Button,
  TypographyScale,
} from '@mdb/flora';
import Image from 'next/image';
import FeaturedCardProps from './types';
import styles from './styles';

export default function FeaturedCard({
  cta = {
    type: 'link',
    text: 'Learn More',
  },
  title,
  imgSrc,
  subtitle,
  imgSizes,
  noBorder = false,
  fullWidth = false,
}: FeaturedCardProps): JSX.Element {
  return (
    <div sx={{
      ...styles.FeaturedCardWrapper,
      ...(noBorder && { ...styles.FeaturedCardWrapper_NoBorder }),
      ...(fullWidth && { ...styles.FeaturedCardWrapper_FullWidth })
    }}
    >
      <div sx={{
        ...styles.FeaturedCardContent,
        ...(fullWidth && { ...styles.FeaturedCardContent_FullWidth })
        }}>
        <div sx={styles.FeaturedCardText}>
          <TypographyScale
            variant="heading5"
            customElement="h3"
            sx={{
              ...styles.FeaturedCardTitle,
              ...(fullWidth && { ...styles.FeaturedCardTitle_FullWidth })
            }}
          >
            {title}
          </TypographyScale>
          <TypographyScale
            variant="body3"
            sx={{
              ...styles.FeaturedCardSubtitle,
              ...(fullWidth && { ...styles.FeaturedCardSubtitle_FullWidth })
            }}
          >
            {subtitle}
          </TypographyScale>
        </div>
        {cta.type === 'button' ? (
          <Button>{cta.text}</Button>
        ) : <Link linkIcon='arrow'>{cta.text}</Link>}
      </div>
      <div sx={styles.FeaturedCardImageWrapper}>
        <div sx={{
          ...styles.FeaturedCardImage,
          ...(imgSizes && {...imgSizes}),
          ...(fullWidth &&{...styles.FeaturedCardImage_FullWidth})
        }}>
          <Image
            alt="mongod-db icon"
            src={imgSrc as string}
            layout="fill"
          />
        </div>
      </div>
    </div>
  );
}
