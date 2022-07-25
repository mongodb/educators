import { render, screen } from '@testing-library/react';
import Form from '.';

describe('[component] Form', () => {
  it('renders the component', () => {
    render(<Form isOpen onClose={() => {}} />);

    const form = screen.getByTestId('form-modal');
    expect(form).toBeInTheDocument();
  });

  it('does not render the component if isOpen prop is false', () => {
    const { container } = render(<Form isOpen={false} onClose={() => {}} />);

    expect(container.firstChild).toBeNull();
  });
});
