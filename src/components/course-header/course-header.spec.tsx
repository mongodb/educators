import { render, screen } from '@testing-library/react';
import CourseHeader from '.';

describe('[component] Course Header', () => {
  it('renders default props and provided props', () => {
    render(<CourseHeader title="Course Header Title Goes Here" />);

    const title = screen.getByText('Course Header Title Goes Here');
    expect(title).toBeInTheDocument();
    expect(title).toContainHTML('</h1>');
  });
});
