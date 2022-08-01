import { render, screen } from '@testing-library/react';
import CourseList from '.';

describe('[component] Course Body', () => {
  it('renders the component', () => {
    render(
      <CourseList
        lessons={[{ title: 'Lorem Ipsum' }, { title: 'Dolor Sit Amet' }]}
      />
    );

    const title = screen.getByText('Lesson Slides');
    expect(title).toBeInTheDocument();

    const list = screen.getByTestId('lesson-list');
    expect(list.childNodes.length).toEqual(2);
    expect(list.childNodes[0]).toContainHTML('</li>');
  });
});
