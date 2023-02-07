import { fireEvent, render, screen } from '@testing-library/react';
import Accordion from '.';

describe('[component] Accordion', () => {
  it('renders the component', () => {
    const { container } = render(
      <Accordion title="Test Title" body="Test Body" />
    );

    expect(screen.getByText('Test Title')).toBeInTheDocument();

    fireEvent.click(container.getElementsByTagName('button')[0]);

    expect(screen.getByText('Test Body')).toBeInTheDocument();
  });
});
