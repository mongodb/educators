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
        `https://services.sheerid.com/verify/${process.env.NEXT_PUBLIC_SHEER_ID_KEY}/`
      );
      mounted.current = true;
    }
  }, []);

  return <div id="sheer-id-container" />;
}
