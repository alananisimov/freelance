import Image from 'next/image';

interface OfferCardProps {
  image: string;
  text: string;
}
export function OfferCard({ image, text }: OfferCardProps) {
  return (
    <div className="flex flex-row space-x-4">
      <Image
        src={image}
        alt=""
        width={164}
        height={164}
        className="h-24 w-24 sm:h-32 sm:w-32 md:h-36 md:w-36"
      />
      <span className="my-auto max-w-44 text-center text-2xl font-bold text-indigo-900 sm:max-w-52 sm:text-3xl">
        {text}
      </span>
    </div>
  );
}

export default function Offer() {
  return (
    <div className="mt-10 sm:mt-0">
      <div className=" mx-auto w-16 border-t border-[rgb(216,216,228)]"></div>
      <div className="mt-8 flex flex-col items-center justify-center">
        <span className="text-2xl font-bold text-indigo-950 md:text-3xl">
          What We Offer
        </span>
        <div className="mt-10 flex w-full max-w-4xl flex-col items-center space-y-4 sm:space-y-0 md:flex-row md:justify-between">
          <OfferCard
            image="/solar_cash-out-bold.png"
            text="0.5% Daily Cashback"
          />

          <OfferCard
            image="/mingcute_time-fill.png"
            text="Cashback every 12 hours"
          />
        </div>
      </div>
    </div>
  );
}
