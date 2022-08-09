import { render, screen } from '@testing-library/react';
import ContentPreview from '.';

describe('[component] Content Preview', () => {
  it('renders default props and provided props', () => {
    render(
      <ContentPreview
        title="Lorem Ipsum"
        content={[
          {
            id: '1546',
            slug: 'my-class',
            title: 'My Class',
            lessons: [],
            contentType: 'Course',
            externalLink: 'my-external-link',
            fileDownload: 'my-file-download',
            shortDescription: 'my-short-description',
          },
        ]}
      />
    );

    const tag = screen.getByText('Course');
    expect(tag).toBeInTheDocument();
  });

  it('provides default fallback if no contentType is found for action mapping', () => {
    const { container } = render(
      <ContentPreview
        title="Lorem Ipsum"
        content={[
          {
            id: '1546',
            slug: 'my-class',
            title: 'My Class',
            lessons: [],
            contentType: '',
            externalLink: 'my-external-link',
            fileDownload: 'my-file-download',
            shortDescription: 'my-short-description',
          },
        ]}
      />
    );

    expect(container.getElementsByTagName('button').length).toEqual(0);
    expect(container.getElementsByTagName('a').length).toEqual(0);
  });
});
