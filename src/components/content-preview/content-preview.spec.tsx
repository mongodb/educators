import { render, screen } from '@testing-library/react';
import ContentPreview from '.';

describe('[component] Content Preview', () => {
  it('renders default props and provided props', () => {
    render(
      <ContentPreview
        title="Lorem Ipsum"
        content={[
          {
            tag: 'Technology',
            title: 'Introduction to Coding',
            description: 'Anyone can code. Lets just go nuts.',
            count: 46,
          },
        ]}
      />
    );

    const tag = screen.getByText('Technology');
    expect(tag).toBeInTheDocument();
  });
});
