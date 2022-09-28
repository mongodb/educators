import Document, { Html, Head, Main } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="dns-prefetch preconnect"
            href="https://www.google-analytics.com"
          />
        </Head>
        <body>
          <Main />
        </body>
      </Html>
    );
  }
}
