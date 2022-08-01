type Card = {
  title: string;
  subtitle: string;
  imgSrc: string;
  href: string;
};
export default interface StudentResourcesProps {
  mainCard: Card;
  subCards: Array<Card>;
}
