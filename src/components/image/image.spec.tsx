import { render } from '@testing-library/react';
import Image from '.';

describe('[component] Image', () => {
  it('renders the component', () => {
    const { container } = render(
      <Image src="/academia/brand-shape-small.svg" alt="My test alt" />
    );

    expect(container).toBeInTheDocument();
    expect(container.firstChild).toContainHTML('</picture>');
  });
});
