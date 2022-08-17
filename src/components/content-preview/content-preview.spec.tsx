import { render, screen } from '@testing-library/react';
import ContentPreview from '.';

describe('[component] Content Preview', () => {
  const baseProps = {
    title: 'Lorem Ipsum',
    content: [
      {
        id: '1546',
        lessons: [],
        level: 'level',
        contentType: '',
        slug: 'my-class',
        durationHours: 1,
        title: 'My Class',
        externalLink: 'my-external-link',
        fileDownload: 'my-file-download',
        longDescription: 'my long description',
        shortDescription: 'my short description',
      },
    ],
  };
  it('renders default props and provided props', () => {
    render(<ContentPreview {...baseProps} />);

    const title = screen.getByText('My Class');
    expect(title).toBeInTheDocument();

    const shortDescription = screen.getByText('my short description');
    expect(shortDescription).toBeInTheDocument();
  });

  it('provides default fallback if no contentType is found for action mapping', () => {
    const { container } = render(<ContentPreview {...baseProps} />);

    expect(container.getElementsByTagName('button').length).toEqual(0);
    expect(container.getElementsByTagName('a').length).toEqual(0);
  });
});
