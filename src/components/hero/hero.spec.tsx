import { render, screen, fireEvent } from '@testing-library/react';
import Hero from '.';

describe('[component] Hero', () => {
  it('renders the component', () => {
    const { container } = render(
      <Hero title="Hero Title" subtitle="Hero Subtitle" />
    );
    const title = screen.getByText('Hero Title');
    const subtitle = screen.getByText('Hero Subtitle');

    // renders all the things
    expect(container).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();

    // uses correct html elements
    expect(container.querySelectorAll('h1').length).toEqual(1);
    expect(container.querySelectorAll('span').length).toEqual(1);
  });

  it('calls provided function to CTA element', () => {
    const heroOnClickFn = jest.fn();
    render(
      <Hero
        title="Hero Title"
        subtitle="Hero Subtitle"
        cta={<button onClick={heroOnClickFn}>Click Me</button>}
      />
    );

    const btn = screen.getByText('Click Me');

    expect(btn).toBeInTheDocument();

    fireEvent.click(btn);

    expect(heroOnClickFn).toHaveBeenCalledTimes(1);
  });
});
