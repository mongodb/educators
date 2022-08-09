import { render, screen } from '@testing-library/react';
import Card from '.';

describe('[component] Card', () => {
  const baseProps = {
    tag: 'Course',
    title: 'My Test Course',
    count: 15,
    description: 'My Test Description',
  };

  it('renders default props and provided props', () => {
    render(<Card {...baseProps} />);

    const count = screen.getByText('15 Lessons');
    expect(count).toBeInTheDocument();
  });

  it('renders correct lesson label', () => {
    render(<Card {...baseProps} count={1} />);

    expect(screen.getByText('1 Lesson')).toBeInTheDocument();
  });
});
