import { render, screen } from '@testing-library/react';
import FeaturedCard from '.';

describe('[component] Featured Card', () => {
  it('renders default props and provided props', () => {
    render(
      <FeaturedCard
        title="My Test Title"
        subtitle="Work on teams and projects that will be used by thousands of developers and organizations across the world."
        imgSrc="/academia/computer.svg"
        imgSizes={{
          width: ['119px', null, '168px', '179px'],
          height: ['129px', null, '182px', '194px'],
        }}
        cta={{
          type: 'button',
          text: 'Learn More',
          href: 'https://www.mongodb.com',
        }}
      />
    );

    const title = screen.getByText('My Test Title');
    expect(title).toBeInTheDocument();

    // renders CTA button
    const cta = screen.getByText('Learn More');
    expect(cta).toBeInTheDocument();
  });
});
