import { useState } from 'react';
import Head from 'next/head';
import theme from '@mdb/flora/theme';
import { ThemeProvider } from '@theme-ui/core';
import type { AppProps } from 'next/app';

import { ModalProvider } from 'contexts/modal';

import Form from 'components/form';
import Layout from 'components/layout';
import ModalRoot from 'components/modal';
import { FormState } from 'components/form/types';
import { FORM_INIT_STATE } from 'components/form/utils';

export default function EducatorPortal({ Component, pageProps }: AppProps) {
  const [formState, setFormState] = useState<FormState>(FORM_INIT_STATE);

  return (
    <>
      <Head>
        <title>MongoDB Educator Center</title>
        <link rel="icon" href="/academia/favicon.ico" />
        <meta
          name="description"
          content="Explore free resources for educators crafted by MongoDB experts to prepare learners with in-demand database skills and knowledge."
        />
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
          content="https://www.mongodb.com/academia/open-graph.png"
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
          content="https://www.mongodb.com/academia/open-graph.png"
        />
        <meta property="twitter:site" content="@MongoDB" />
      </Head>
      <ThemeProvider theme={theme}>
        <ModalProvider>
          <Layout isFormOpen={formState.isOpen}>
            <ModalRoot />
            <Form
              texts={formState.texts}
              isOpen={formState.isOpen}
              fields={formState.fields}
              multiFileUpload={formState.multiFileUpload}
              submitForm={formState.submitForm}
              closeForm={() => setFormState(FORM_INIT_STATE)}
            />
            <Component {...pageProps} setFormState={setFormState} />
          </Layout>
        </ModalProvider>
      </ThemeProvider>
    </>
  );
}
