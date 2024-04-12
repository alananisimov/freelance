import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>ZIRU - Generate more wealth</title>
        <link rel="icon" href="/logo.ico" />
        <meta name="description" content="ZIRU - the best modern token" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
