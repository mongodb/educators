import { render, screen } from '@testing-library/react';
import CourseAside from '.';

describe('[component] Course Aside', () => {
  it('renders the component', () => {
    render(
      <CourseAside
        level="EXTREME"
        length="Forever"
        prerequisites={['hello', 'world']}
      />
    );

    const parentEl = screen.getByTestId('course-aside');
    expect(parentEl).toBeInTheDocument();
    expect(parentEl).toContainHTML('</aside>');
  });
});
