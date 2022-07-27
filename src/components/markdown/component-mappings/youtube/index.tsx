interface YoutubeProps {
  id: string;
  children: JSX.Element;
}

const Youtube = ({ id, children }: YoutubeProps): JSX.Element => (
  <div>
    <div>Youtube Text: {children}</div>
    <div>Youtube Video ID: {id}</div>
  </div>
);

export default Youtube;
