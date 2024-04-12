import { useInView } from "framer-motion";
import Head from "next/head";
import { useRef } from "react";
import About from "~/components/about";
import Musk from "~/components/musk";
import TierCard, { tier_list } from "~/components/tier-card";
import TimeLine from "~/components/timeline";
import { montrerrat, sohne } from "~/fonts";
const tier_list: tier_list[] = [
  {
    title: "Tier one",
    procent: "160% APY",
    constant_procent: "0.2% every 24 hours in XLM",
    hold_from: "5000",
    hold_to: "100,000",
  },
  {
    title: "Tier two",
    procent: "210% APY",
    constant_procent: "0.35% every 24 hours in XLM",
    hold_from: "100,001",
    hold_to: "100,000",
  },
  {
    title: "Tier three",
    procent: "320% APY",
    constant_procent: "0.6% every 24 hours in XLM",
    hold_from: "1,000,001",
    hold_to: "10,000,000",
  },
];

export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <Head>
        <title>
          Elon Musk Coin - Empowering the future with Stellar Blockchain
        </title>
        <meta
          name="description"
          content="ElonMuskCoin, an innovative digital asset introduced by Elon Musk on the Stellar blockchain. Uncover the possibilities in decentralized finance, sustainability, and groundbreaking innovation."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`relative isolate bg-white px-6 pt-14 lg:px-8 ${sohne.className} h-screen`}
      >
        <div
          className="absolute inset-x-0 -top-40 -z-10 blur-3xl sm:top-0"
          aria-hidden="true"
        >
          <div className="relative left-0 top-0 aspect-[1155/678] h-[15rem] w-[15rem] -translate-x-1/2 translate-y-1/2 scale-150  rounded-full bg-gradient-to-tr from-[#F454855E] to-[#c441685e] sm:h-[25rem] sm:w-[25rem]" />
        </div>
        <div className=" max-w-2xl py-32 sm:mx-32 sm:py-48 lg:py-56">
          <div className="">
            <h3 className="text-xl font-bold sm:text-3xl">
              Empowering the future with
            </h3>
            <h1 className="text-4xl font-bold text-[#F45485] sm:text-6xl">
              Stellar Blockchain
            </h1>
            <p
              className={`mt-6 text-lg leading-8 text-gray-900 ${montrerrat.className} font-medium`}
            >
              Elon Musk Coin, an innovative digital asset introduced by Elon
              Musk on the Stellar blockchain. Uncover the possibilities in
              decentralized finance, sustainability, and groundbreaking
              innovation.
            </p>
            <div
              className={`mt-10 flex flex-col items-center sm:flex-row ${montrerrat.className} gap-x-6 gap-y-2`}
            >
              <a
                href="https://lobstr.co/trade/eCOIN:GCQWVTPTLJMDTQG5XXNYP4UGSYFUA54HW5IKOJF7ZDEJ6I5WXLZAIJMP"
                className="rounded-full rounded-bl-none bg-black px-16 py-3 text-sm font-semibold text-white transition-all duration-500 hover:bg-[#F45485]"
              >
                Buy EMC
              </a>
              <a
                href="https://t.me/stellar_elon"
                className="rounded-full rounded-bl-none border-[2.5px] border-black px-10 py-2 text-sm font-semibold leading-6 text-gray-900 transition-all duration-500 hover:bg-black hover:text-white"
              >
                Join Telegram
              </a>
            </div>
          </div>
        </div>

        <Musk className="absolute bottom-0 right-16 -z-10 hidden h-2/3 w-auto lg:right-32 lg:block  lg:h-[calc(100vh-25%)]" />
      </div>
      <div
        className={`flex w-screen flex-col items-center justify-center bg-[#1E1E1E] py-32 text-white ${montrerrat.className}`}
      >
        <h1 className={`text-6xl font-black ${sohne.className}`}>Tier list</h1>
        <div className="flex flex-col gap-12 pt-28 md:flex-row">
          {tier_list.map((tier, index) => (
            <div
              key={index}
              ref={ref}
              style={{
                transform: isInView ? "none" : "translateY(-50px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
            >
              <TierCard
                title={tier.title}
                procent={tier.procent}
                constant_procent={tier.constant_procent}
                hold_from={tier.hold_from}
                hold_to={tier.hold_to}
              />
            </div>
          ))}
        </div>
        <h1 className={`text-6xl font-black ${sohne.className} py-28`}>
          Roadmap
        </h1>
        <div>
          <TimeLine className=" w-full max-w-7xl px-16" />
        </div>
        <h1
          className={`text-6xl font-black ${sohne.className} pb-16 pt-28`}
          id="about"
        >
          About us
        </h1>
        <div className="-mb-96">
          <About />
        </div>
      </div>
    </>
  );
}
