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
});
