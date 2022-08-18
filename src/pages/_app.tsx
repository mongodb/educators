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

        {/* Open Graph Default Metadata (Used by Facebook, LinkedIn) */}
        <meta property="og:title" content="MongoDB Educator Center" />
        <meta
          property="og:description"
          content="Explore free resources for educators crafted by MongoDB experts to prepare learners with in-demand database skills and knowledge."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mongodb.com/academia" />
        <meta
          property="og:image"
          content="https://www.mongodb.com/academia/social-header.png"
        />
        <meta property="og:image:alt" content="MongoDB Educator Center" />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="640" />

        {/* Open Graph Default Metadata For Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MongoDB Educator Center" />
        <meta
          property="twitter:description"
          content="Explore free resources for educators crafted by MongoDB experts to prepare learners with in-demand database skills and knowledge."
        />
        <meta
          property="twitter:image"
          content="https://www.mongodb.com/academia/social-header.png"
        />
        <meta property="twitter:site" content="@MongoDB" />
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
