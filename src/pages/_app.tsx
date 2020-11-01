import type { AppProps } from 'next/app';
import Head from 'next/head';
import React, { ReactElement } from 'react';

import '../scss/main.scss';

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return <>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <title key="pageTitle">Gildia Misioplusie</title>
      <meta name="description" content="Misioplusie tulą mocno" />
      <meta property="og:title" content="Gildia Misioplusie" key="title" />
      <meta property="og:type" content="website" key="type" />
      <meta property="og:image" content="/img/misioplusie.webp" key="image" />

      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
    <Component {...pageProps} />
  </>;
}

export default MyApp;
