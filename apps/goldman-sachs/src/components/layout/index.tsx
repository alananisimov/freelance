import { Inter, Montserrat } from 'next/font/google';
import '../../app/globals.css';
import NavBar from '@/components/layout/nav-bar';
import Footer from '@/components/layout/footer';
import { grotesque } from '@/app/fonts';
import Head from 'next/head';
const montserrat = Montserrat({ subsets: ['cyrillic', 'latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={montserrat.className}>
      <title>Goldman Sachs Stellar</title>
      <meta
        name="description"
        content="Goldman Sachs Stellar - Your trusted financial experts now on Stellar"
      />
      <meta name="keywords" content="crypto, blockchain, finance" />
      <meta property="og:title" content="Goldman Sachs Stellar" />
      <meta
        property="og:description"
        content="Goldman Sachs Stellar - Your trusted financial experts now on Stellar"
      />
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
      <div className={'mb-12 ' + grotesque.className}>{children}</div>
      <Footer />
    </div>
  );
}
