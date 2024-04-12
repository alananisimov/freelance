import { Noto_Sans, Raleway } from 'next/font/google';
import Hero from '@/components/Hero';
import Offer from '@/components/Offer';
import Tier from '@/components/Tier';
import About from '@/components/About';
import Footer from '@/components/Footer';
import Example from '@/components/Header';

export const noto_sans = Noto_Sans({ subsets: ['latin'] });
export const raleway = Raleway({ subsets: ['latin'] });

export default function Home() {
  return (
    <main
      className={`flex flex-col justify-center ${raleway.className} font-['Raleway']`}
    >
      <Example />
      <Hero />
      <Offer />
      <Tier />
      <About />
      <Footer />
    </main>
  );
}
