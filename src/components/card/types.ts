export default interface CardProps {
  tag: string;
  title: string;
  count?: number;
  description: string;
  actions?: JSX.Element;
}
