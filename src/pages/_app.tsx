import type { AppProps } from 'next/app';
import Head from 'next/head';
import theme from '@mdb/flora/theme';
import { ThemeProvider } from '@theme-ui/core';
import Layout from 'components/layout';

export default function EducatorPortal({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>MongoDB Educator Center</title>
      </Head>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
