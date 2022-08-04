import { useState } from 'react';
import Head from 'next/head';
import theme from '@mdb/flora/theme';
import { ThemeProvider } from '@theme-ui/core';

import type { AppProps } from 'next/app';

import Form from 'components/form';
import Layout from 'components/layout';

export default function EducatorPortal({ Component, pageProps }: AppProps) {
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);

  return (
    <>
      <Head>
        <title>MongoDB Educator Center</title>
        <link rel="icon" href="/academia/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <Layout isFormOpen={isFormOpen}>
          <Form isOpen={isFormOpen} closeForm={() => setIsFormOpen(false)} />
          <Component {...pageProps} openForm={() => setIsFormOpen(true)} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
