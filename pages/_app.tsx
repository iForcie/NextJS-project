import { AppProps } from 'next/dist/shared/lib/router/router';
import '../styles/globals.css';
import Head from 'next/head';
import React from 'react';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <>     
          <Head>
            <title>My Top </title>
            <link key={1} rel="icon" href="/favicon2.ico" />
          </Head>
          <Component {...pageProps} />
        </>;
}

export default MyApp;