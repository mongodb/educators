import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

const gaScriptArgs =
  process.env['APP_ENV'] === 'production' ? '' : '!0,{debugMode:!0}';

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
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/@sheerid/jslib@1/sheerid.css"
            type="text/css"
          />
          <Script
            id="ga-base"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                  !function(e,n){var t=document.createElement("script"),o=null,x="pathway";t.async=!0,t.src='https://'+x+'.mongodb.com/'+(e?x+'-debug.js':''),
                  document.head.append(t),t.addEventListener("load",function(){o=window.pathway.default,(n&&o.configure(n)),o.createProfile("mongodbcom").load(),
                  window.segment=o})}(${gaScriptArgs});
                `,
            }}
            async
          />
          <Script
            src="https://cdn.jsdelivr.net/npm/@sheerid/jslib@1/sheerid.js"
            strategy="afterInteractive"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
