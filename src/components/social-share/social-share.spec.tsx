import { render, screen } from '@testing-library/react';
import SocialShare from '.';

describe('[component] Course Body', () => {
  it('renders the component', () => {
    render(
      <SocialShare
        linkUrl="http://www.mycoolsite.com"
        twitterUrl="http://www.mycoolsite.com/twitter"
        facebookUrl="http://www.mycoolsite.com/facebook"
        linkedInUrl="http://www.mycoolsite.com/linkedIn"
      />
    );

    const container = screen.getByTestId('social-share');
    expect(container.childNodes.length).toEqual(4);
  });

  it('will not render an icon if no url is passed for it', () => {
    render(
      <SocialShare
        linkUrl="http://www.mycoolsite.com"
        twitterUrl="http://www.mycoolsite.com/twitter"
        facebookUrl="http://www.mycoolsite.com/facebook"
      />
    );

    const container = screen.getByTestId('social-share');
    expect(container.childNodes.length).toEqual(3);
  });
});
