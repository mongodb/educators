import { render, screen } from '@testing-library/react';
import CourseAside, { generateSocialSharingURLs } from '.';

describe('[component] Course Aside', () => {
  const baseProps = {
    level: 'Intro',
    title: 'Lorem Ipsum',
    duration: 15,
    openForm: () => {},
  };

  it('renders the component', () => {
    const { container } = render(<CourseAside {...baseProps} />);

    const parentEl = container.getElementsByTagName('aside')[0];
    expect(parentEl).toBeInTheDocument();
    expect(parentEl).toContainHTML('</aside>');
  });

  it('should show correct duration label', () => {
    render(<CourseAside {...baseProps} duration={1} />);

    expect(screen.getByText('1 hour')).toBeInTheDocument();
  });

  it('should generate correct social sharing urls', () => {
    expect(
      generateSocialSharingURLs('my-test-site.com', {
        lorem: 'ipsum',
        dolor: 'sit',
        amet: true,
      })
    ).toEqual('my-test-site.com?lorem=ipsum&dolor=sit&amet=true');
  });
});
