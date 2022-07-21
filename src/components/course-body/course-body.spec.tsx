import { render, screen } from '@testing-library/react';
import CourseBody from '.';

describe('[component] Course Body', () => {
  it('renders the component', () => {
    render(
      <CourseBody
        outlineText={['Never gonna give you up', 'Never gonna let you down']}
        formatText={['Never gonna make you cry', 'Never gonna say goodbye']}
      />
    );

    const outlineTitle = screen.getByText('Course Outline');
    expect(outlineTitle).toBeInTheDocument();
    expect(outlineTitle.nextSibling).toHaveTextContent(
      'Never gonna give you up'
    );

    const formatTitle = screen.getByText('Course Format');
    expect(formatTitle).toBeInTheDocument();
    expect(formatTitle.nextSibling).toHaveTextContent(
      'Never gonna make you cry'
    );
  });
});
