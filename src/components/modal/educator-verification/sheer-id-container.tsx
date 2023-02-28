import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    sheerId: any; // eslint-disable-line
  }
}

export default function SheerIdContainer() {
  const mounted = useRef<boolean>(false);

  useEffect(() => {
    // force useEffect to only run once on component mount, without this it would display two iFrames
    if (!mounted.current) {
      window?.sheerId.loadInlineIframe(
        document.getElementById('sheer-id-container'),
        // TODO: this needs to be put into an .env var
        'https://services.sheerid.com/verify/63cea347ea1fab6ff9fb2239/'
      );
      mounted.current = true;
    }
  }, []);

  return <div id="sheer-id-container" />;
}
