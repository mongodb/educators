import ImageProps from './types';

export default function Image({
  src,
  alt,
  styles = {},
  type = 'image/webp',
}: ImageProps): JSX.Element {
  return (
    <picture>
      <source srcSet={src} type={type} />
      <img src={src} alt={alt} sx={{ ...styles }} />
    </picture>
  );
}
