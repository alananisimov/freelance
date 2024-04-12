import RootLayout from '@/components/layout';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { About } from '@/components/about';
import { Investment } from '@/components/investment';
const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
  },
};

export default function Home() {
  return (
    <RootLayout>
      <div
        className={'relative h-full scroll-smooth sm:max-h-[calc(100vh-52px)] '}
      >
        <motion.div
          className="container"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <div
            className={
              'absolute z-20 grid h-full w-screen grid-cols-1 p-8 md:p-28 lg:grid-cols-2'
            }
          >
            <div className="mx-auto my-auto max-w-[33rem]">
              <div
                className={
                  'text-center text-4xl font-medium text-white sm:text-5xl  md:text-left md:text-5xl lg:text-6xl '
                }
              >
                Goldman Sachs Stellar - Your trusted financial experts now on
                Stellar
              </div>
              <div className="mt-10 flex w-full flex-col gap-x-10 gap-y-4 md:mt-12 md:inline-flex md:flex-row">
                <Link
                  href={
                    'https://lobstr.co/trade/GSS:GDPG3WDC7UONHLOPTTZLWVA7TZEMFOGCQGNMAPNGWL6YSPRH6MYB7X5P'
                  }
                  className="mx-auto w-40 sm:mx-0 md:w-48"
                >
                  <button className="mx-auto w-full max-w-40 border-2 border-white py-2 text-white transition duration-300 ease-in-out hover:bg-white hover:text-black md:mx-0 md:max-w-48">
                    BUY ASSET{' '}
                  </button>
                </Link>
                <Link
                  href={'https://t.me/goldmanstellar'}
                  className="mx-auto w-40 sm:mx-0 md:w-48"
                >
                  <button className="mx-auto ml-auto w-full max-w-40 border-2 border-white py-2 text-white transition duration-300 ease-in-out hover:bg-white hover:text-black md:mx-0 md:max-w-48">
                    JOIN TELEGRAM{' '}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
        <Image
          src={'/background.jpeg'}
          alt="back photo"
          height={'810'}
          width={'1920'}
          className="h-[calc(100vh-64px)] max-h-screen w-full  object-cover brightness-50 sm:max-h-[calc(100vh-64px)]"
        />
      </div>
      <div className=" w-full">
        <div id="why_stellar" className="px-4 py-24 sm:px-12">
          <div className="mx-auto mb-10 w-16 border-t-2 border-slate-800 md:w-28"></div>
          <div>
            <h2 className="text-center text-2xl font-medium md:text-4xl">
              Why Stellar Blockchain
            </h2>
            <p
              className="mx-auto mt-8 max-w-2xl text-center text-sm font-normal text-neutral-700

md:text-base"
            >
              Stellar&apos;s robust and efficient blockchain infrastructure
              aligns with our dedication to delivering secure and seamless
              financial services. The Stellar network&apos;s ability to
              facilitate fast and low-cost transactions, coupled with its
              commitment to financial inclusion, makes it an ideal platform for
              expanding our offerings and reaching a broader audience.
            </p>
          </div>
        </div>
        <Investment />
        <About />
        <div id="thanks">
          <div className="mx-auto mb-10 w-16 border-t-2 border-slate-800 md:w-28"></div>
          <h2 className="mx-auto mb-8 max-w-xl px-4 text-center text-xl md:text-2xl">
            Thank you for choosing Goldman Sachs Stellar as your trusted
            financial partner.
          </h2>
        </div>
      </div>
    </RootLayout>
  );
}
