import { useState } from 'react';
import Image from 'components/image';
import SocialShareProps from './types';
import styles from './styles';

export default function SocialShare({
  linkUrl = '',
  twitterUrl = '',
  facebookUrl = '',
  linkedInUrl = '',
  wrapperStyles = {},
}: SocialShareProps): JSX.Element {
  const [showTooltip, setShowTooltip] = useState<boolean>(false);

  function handleOnLinkClick(): void {
    navigator.clipboard.writeText(linkUrl);
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2000);
  }

  return (
    <div
      sx={{
        ...styles.SocialShareWrapper,
        ...wrapperStyles,
      }}
      data-testid="social-share"
    >
      {linkUrl && (
        <div
          sx={{
            ...styles.CopyLinkWrapper,
            ...styles.SocialShareIcon,
          }}
        >
          <button type="button" title="Copy Link" onClick={handleOnLinkClick}>
            <Image alt="mongoDB link icon" src="/academia/link.svg" />
          </button>
          {showTooltip && (
            <div sx={styles.CopyLinkTooltip}>
              <div sx={styles.CopyLinkTooltipArrow} />
              <div sx={styles.CopyLinkTooltipBody}>Link Copied!</div>
            </div>
          )}
        </div>
      )}
      {facebookUrl && (
        <a
          href={facebookUrl}
          target="_blank"
          rel="noreferrer"
          title="mongoDB related facebook link"
          sx={styles.SocialShareIcon}
        >
          <Image alt="mongoDB facebook icon" src="/academia/facebook.svg" />
        </a>
      )}
      {twitterUrl && (
        <a
          href={twitterUrl}
          target="_blank"
          rel="noreferrer"
          title="mongoDB related twitter link"
          sx={styles.SocialShareIcon}
        >
          <Image src="/academia/twitter.svg" alt="mongoDB twitter icon" />
        </a>
      )}
      {linkedInUrl && (
        <a
          href={linkedInUrl}
          target="_blank"
          rel="noreferrer"
          title="mongoDB related linkedin link"
          sx={styles.SocialShareIcon}
        >
          <Image src="/academia/linkedin.svg" alt="mongoDB linkedin icon" />
        </a>
      )}
    </div>
  );
}
