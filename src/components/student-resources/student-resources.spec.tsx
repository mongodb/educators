import { render, screen } from '@testing-library/react';
import StudentResources from '.';

describe('[component] Student Resources', () => {
  it('renders the component', () => {
    render(<StudentResources />);

    const bg = screen.getByAltText('mongoDB brand icon');
    expect(bg).toBeInTheDocument();
  });
});
