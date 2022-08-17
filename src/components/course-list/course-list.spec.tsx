import { render, screen } from '@testing-library/react';
import CourseList from '.';

describe('[component] Course List', () => {
  it('renders the component', () => {
    const { container } = render(
      <CourseList
        lessons={[
          { id: '1', title: 'Lorem Ipsum', link: 'http://loremipsum.com' },
          { id: '2', title: 'Dolor Sit Amet', link: 'http://loremipsum.com' },
        ]}
      />
    );

    const title = screen.getByText('Lesson Slides');
    expect(title).toBeInTheDocument();

    const ol = container.getElementsByTagName('ol')[0];
    expect(ol.childNodes.length).toEqual(2);
    expect(ol.childNodes[0]).toContainHTML('</li>');
  });
});
