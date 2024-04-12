import Image from 'next/image';
import wave from '../../public/wave.svg';
import waves from '../../public/waves.svg';
import object_image from '../../public/object1.png';
export default function Tier() {
  return (
    <>
      <div className="relative mt-24 h-full">
        <div className="mx-auto w-16 border-t border-[rgb(216,216,228)]"></div>
        <div className="relative z-10 mt-8 flex h-full flex-col items-center justify-center">
          <span className="text-xl">Choose</span>
          <span className="text-2xl font-bold text-indigo-950 md:text-3xl">
            Tier System
          </span>
          <div className="mt-24 flex w-screen flex-col items-center justify-center gap-y-4 lg:flex-row lg:gap-x-8 lg:gap-y-0">
            <TierCard
              head="102.2% APY"
              text="0.14% 24 hours"
              hold="5,000 - 100,000 Tokens"
            />
            <TierCard
              head="146% APY"
              text="0.2% 24 hours"
              hold="100,001 - 1,000,000 Tokens"
            />
            <TierCard
              head="292% APY"
              text="0.4% 24 hours"
              hold="1,000,001 - 10,000,000 Tokens"
            />
            <TierCard
              head="365% APY"
              text="0.5% 24 hours"
              hold="10,000,001 - 30,000,000 Tokens"
            />
          </div>
          <div className="absolute top-0 w-full">
            <div className=" h-full">
              <Image
                src={waves}
                alt=""
                height={420}
                className=" -z-10 w-full rotate-180 transform"
              />
              <Image
                src={wave}
                alt=""
                className="absolute bottom-0 z-10 w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

type Args = {
  head: string;
  text: string;
  hold: string;
};
export function TierCard({ head, text, hold }: Args) {
  return (
    <div className="group relative z-20 flex h-[25rem] w-72 flex-col items-center justify-center gap-y-4 rounded-3xl bg-white p-12 shadow-md">
      <Image
        src={object_image}
        alt=""
        className="absolute top-10 -mt-8 w-16 transition duration-1000 group-hover:rotate-[360deg] "
      />
      <h3 className=" text-3xl font-bold" id="head">
        {head}
      </h3>
      <div className="py-4 text-center text-xl">
        <p className="">{text}</p>
        <p>{hold}</p>
      </div>
      <div className=" absolute bottom-10 w-full px-10">
        <a href="https://lobstr.co/trade/ZIRU:GBMY5L5PQRVIDNGDPIPQDUZYINXRFMSVXJ7QDQD5YVC7VR2ZMSE762FU">
          <button className="w-full rounded-md bg-gradient-to-r from-[#412F81] to-[#A867F2] p-2 font-semibold text-white transition hover:scale-105">
            Buy ZIRU
          </button>
        </a>
      </div>
    </div>
  );
}
