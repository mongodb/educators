import { ThemeUICSSObject } from 'theme-ui';
import { Link, Button, TypographyScale } from '@mdb/flora';
import Image from 'components/image';
import FeaturedCardProps from './types';
import styles from './styles';

export default function FeaturedCard({
  title,
  subtitle,
  imgSizes,
  imgSrc,
  noBorder = false,
  fullWidth = false,
  cta,
}: FeaturedCardProps): JSX.Element {
  const renderCTA = (ctaStyles: ThemeUICSSObject = {}) =>
    cta.type === 'button' ? (
      <Button href={cta.href} target="_blank">
        {cta.text}
      </Button>
    ) : (
      // @ts-ignore
      <Link href={cta.href} target="_blank" linkIcon="arrow" sx={ctaStyles}>
        {cta.text}
      </Link>
    );

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
        <div
          sx={{
            ...styles.FeaturedCardText,
            ...(fullWidth && { ...styles.FeaturedCardText_FullWidth }),
          }}
        >
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
          {fullWidth && renderCTA()}
        </div>
        <div
          sx={{
            ...styles.FeaturedCardImageWrapper,
            ...(fullWidth && { ...styles.FeaturedCardImageWrapper_FullWidth }),
          }}
        >
          <div
            sx={{
              ...(imgSizes && { ...imgSizes }),
              ...(fullWidth && { ...styles.FeaturedCardImage_FullWidth }),
            }}
          >
            <Image
              src={imgSrc}
              alt="mongoDB icon"
              styles={styles.FeaturedCardImage}
            />
          </div>
        </div>
      </div>
      {!fullWidth && renderCTA(styles.FeaturedCardCTA)}
    </div>
  );
}
