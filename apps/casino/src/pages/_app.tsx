import { type AppType } from "next/app";
import { Montserrat } from "next/font/google";
import Head from "next/head";

import "~/styles/globals.css";

export const inter = Montserrat({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={`font-sans ${inter.variable}`}>
      <Head>
        <title>Casino top sites</title>
        <meta
          name="description"
          content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti
          sunt quos beatae possimus! Rerum tempor"
        />

        <link rel="icon" href="/logo.png" />
      </Head>

      <Component {...pageProps} />
    </main>
  );
};

export default MyApp;
