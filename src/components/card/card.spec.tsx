import { render, screen } from '@testing-library/react';
import Card from '.';

describe('[component] Card', () => {
  it('renders default props and provided props', () => {
    	render(
        <Card
          tag="Cool Stuff"
          title="Check out this cool stuff"
          count={15}
          description="Read on for more really cool stuff"
        />
      );

    	const count = screen.getByText('15 Lessons');
    	expect(count).toBeInTheDocument();
  });
});
