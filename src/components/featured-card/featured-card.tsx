import { Link, Button, TypographyScale } from '@mdb/flora';
import Image from 'next/image';
import FeaturedCardProps from './types';
import styles from './styles';

export default function FeaturedCard({
  title,
  imgSrc,
  subtitle,
  imgSizes,
  noBorder = false,
  fullWidth = false,
  cta = {
    type: 'link',
    text: 'Learn More',
  },
}: FeaturedCardProps): JSX.Element {
  return (
    <div
      sx={{
        ...styles.FeaturedCardWrapper,
        ...(noBorder && { ...styles.FeaturedCardWrapper_NoBorder }),
        ...(fullWidth && { ...styles.FeaturedCardWrapper_FullWidth }),
      }}
    >
      <div
        sx={{
          ...styles.FeaturedCardContent,
          ...(fullWidth && { ...styles.FeaturedCardContent_FullWidth }),
        }}
      >
        <div sx={styles.FeaturedCardText}>
          {/* @ts-ignore */}
          <TypographyScale
            variant="heading5"
            customElement="h3"
            sx={{
              ...styles.FeaturedCardTitle,
              ...(fullWidth && { ...styles.FeaturedCardTitle_FullWidth }),
            }}
          >
            {title}
          </TypographyScale>
          {/* @ts-ignore */}
          <TypographyScale
            variant="body3"
            sx={{
              ...styles.FeaturedCardSubtitle,
              ...(fullWidth && { ...styles.FeaturedCardSubtitle_FullWidth }),
            }}
          >
            {subtitle}
          </TypographyScale>
        </div>
        {cta.type === 'button' ? (
          <Button>{cta.text}</Button>
        ) : (
          // @ts-ignore
          <Link linkIcon="arrow">{cta.text}</Link>
        )}
      </div>
      <div sx={styles.FeaturedCardImageWrapper}>
        <div
          sx={{
            ...styles.FeaturedCardImage,
            ...(imgSizes && { ...imgSizes }),
            ...(fullWidth && { ...styles.FeaturedCardImage_FullWidth }),
          }}
        >
          <Image alt="mongoDB icon" src={imgSrc as string} layout="fill" />
        </div>
      </div>
    </div>
  );
}