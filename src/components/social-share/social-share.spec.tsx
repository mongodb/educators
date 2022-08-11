import { render, screen, fireEvent, act } from '@testing-library/react';
import SocialShare from '.';

// declare global navigator obj to be able to reference it in tests
Object.assign(navigator, {
  clipboard: {
    writeText: () => {},
  },
});

describe('[component] Social Share', () => {
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

  it('should copy linkURL and display tooltip', () => {
    jest.useFakeTimers();
    jest.spyOn(global, 'setTimeout');
    jest.spyOn(navigator.clipboard, 'writeText');

    const linkUrl = 'http://www.mycoolsite.com';

    render(<SocialShare linkUrl={linkUrl} />);

    act(() => {
      fireEvent.click(screen.getByTitle('Copy Link'));
    });

    const tooltip = screen.getByText('Link Copied!');

    expect(tooltip).toBeInTheDocument();
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(linkUrl);

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 2000);

    // let setTimeout run and assert tooltip should no longer be showing
    act(() => {
      jest.runAllTimers();
    });

    expect(tooltip).not.toBeInTheDocument();
  });
});
