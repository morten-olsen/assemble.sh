//import '../styles/global.css'
import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
    </Head>
    <Component {...pageProps} />
  </>
);

export default App;
