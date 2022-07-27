interface AProps {
  href: string;
  children: JSX.Element;
}

const A = ({ href, children }: AProps): JSX.Element => (
  <a href={href}>{children}</a>
);

export default A;
