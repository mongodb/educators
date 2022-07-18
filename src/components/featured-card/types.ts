export default interface FeaturedCardProps {
  title: string;
  imgSrc?: string;
  subtitle: string;
  noBorder?: boolean;
  fullWidth?: boolean;
  cta?: {
    type: 'button' | 'link',
    text: string;
  },
  imgSizes?: {
    height: Array<string | null>;
    width: Array<string | null>;
  }
}