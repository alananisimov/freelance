import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <>
      <div
        className="absolute inset-x-0 top-0 -z-10 h-auto w-screen transform-gpu overflow-hidden"
        aria-hidden="true"
      >
        <Image
          src={'/waves.svg'}
          alt="waves"
          height={400}
          width={600}
          className="h-auto w-screen object-cover"
        />
      </div>
      <div className="relative isolate z-10 px-6 lg:px-8">
        <div className="mx-auto max-w-5xl py-32 sm:py-24">
          <section className="">
            <div className="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0 ">
              <div className="mx-auto mr-auto place-self-center lg:col-span-6">
                <h1 className="mb-12 max-w-2xl text-[42px] font-bold leading-none tracking-tight md:mb-16 md:text-5xl xl:text-6xl">
                  Generate{' '}
                  <span className=" bg-gradient-to-r from-[#7f75b5] to-[#B46CFF] bg-clip-text text-transparent">
                    More
                  </span>{' '}
                  <span className="bg-gradient-to-r from-[#2E256B] to-[#B46CFF] bg-clip-text text-transparent">
                    Wealth
                  </span>{' '}
                  with ZIRU
                </h1>
                <div className=" flex flex-col items-center justify-center space-y-3 sm:inline-flex sm:flex-row sm:space-x-4 sm:space-y-0">
                  <a
                    href="https://lobstr.co/trade/ZIRU:GBMY5L5PQRVIDNGDPIPQDUZYINXRFMSVXJ7QDQD5YVC7VR2ZMSE762FU"
                    className=" inline-flex w-64 items-center justify-center rounded-full bg-indigo-900 px-12 py-4 text-center text-lg font-medium text-white hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 md:w-44 md:py-3"
                  >
                    Buy ZIRU
                  </a>
                  <a
                    href="https://t.me/ziruwealth"
                    className="inline-flex w-64 items-center justify-center rounded-full border border-black px-12 py-4 text-center text-base font-medium text-black hover:bg-gray-100 focus:ring-4 md:w-52 md:py-3 "
                  >
                    Join Telegram
                  </a>
                </div>
              </div>
              <motion.div
                className={`ml-20 hidden lg:col-span-6 lg:mt-0 lg:flex`}
                id="3d"
                initial={{ y: 0 }}
                animate={{ y: [-20, 0, -20] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Image
                  src={'/3d.png'}
                  height={400}
                  width={400}
                  alt=""
                  className="h-auto w-full scale-[110%]"
                />
              </motion.div>
            </div>
          </section>
        </div>
        {/* <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div> */}
      </div>
    </>
  );
}
