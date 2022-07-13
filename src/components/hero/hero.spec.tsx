import { render, screen } from '@testing-library/react';
import Hero from '.';

describe('[component] Hero', () => {
  it('renders default props and provided props', () => {
    render(<Hero description="Test description" />);

    const title = screen.getByText('MongoDB for Educators');
    expect(title).toBeInTheDocument();

    const desc = screen.getByText('Test description');
    expect(desc).toBeInTheDocument();
  });
});
