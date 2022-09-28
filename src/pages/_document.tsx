import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="dns-prefetch preconnect"
            href="https://www.google-analytics.com"
          />
          <link
            rel="dns-prefetch preconnect"
            href="https://cdn.optimizely.com/js/22247140071.js"
          />
          <link
            rel="dns-prefetch preconnect"
            href="https://logx.optimizely.com"
          />
          <link
            rel="preload"
            href="https://cdn.optimizely.com/js/22247140071.js"
            as="script"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
          <Script
            id="optimizely-snippet"
            strategy="beforeInteractive"
            src="https://cdn.optimizely.com/js/22247140071.js"
            defer={false}
            async
          />
        </body>
      </Html>
    );
  }
}
