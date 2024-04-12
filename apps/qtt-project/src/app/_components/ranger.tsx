import Image from "next/image";

export default function Ranger({ value }: { value: number | undefined }) {
  return (
    <div className="relative mb-6">
      <label htmlFor="labels-range-input" className="sr-only">
        Labels range
      </label>
      <input
        id="labels-range-input"
        type="range"
        min="100"
        max="1500"
        value={value ?? 1000}
        className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-blue-600"
      />

      <span className=" absolute -bottom-6 start-1/4 -translate-x-1/2 text-sm text-white/60  rtl:translate-x-1/2">
        <div className="absolute -top-3 right-5  w-5 rotate-90 border-[0.5px] border-white/60" />
        Soft cap
      </span>
      <span className="absolute -bottom-6 start-[55%] -translate-x-1/2 text-sm text-white/60  rtl:translate-x-1/2">
        <div className="absolute -top-3 right-6  w-5 rotate-90 border-[0.5px] border-white/60" />
        Crowdsale
      </span>
      <span className="absolute -bottom-6 start-3/4 text-sm text-white/60 ">
        <div className="absolute -top-3 right-5  w-5 rotate-90 border-[0.5px] border-white/60" />
        Hard cap
      </span>
    </div>
  );
}

export function RoadmapRanger({ value }: { value: number | undefined }) {
  return (
    <div>
      <div className="relative mb-6 mt-16 sm:mt-32 lg:mt-48">
        <label htmlFor="labels-range-input" className="sr-only">
          Labels range
        </label>
        <Image
          src={"/trump1.png"}
          alt=""
          priority
          width={300}
          height={300}
          className="absolute -left-4 bottom-4 -z-10 hidden max-w-40 sm:block lg:-left-20 lg:-top-[206px] lg:max-w-full"
        />
        <Image
          src={"/trump2.png"}
          alt=""
          width={300}
          height={300}
          priority
          className="absolute -right-0 bottom-4 -z-10 hidden max-w-40 sm:block lg:-top-[214px] lg:max-w-full"
        />
        <input
          id="labels-range-input"
          type="range"
          min="100"
          max="1500"
          value={value ?? 1000}
          className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-blue-600"
        />

        <span className=" absolute start-10 top-8 flex -translate-x-1/2 flex-col text-[8px] text-white/60 sm:start-[22%] sm:text-xs lg:text-sm rtl:translate-x-1/2 ">
          <div className="absolute -top-3 left-[2rem] w-5 rotate-90  border-[0.5px] border-white/20 sm:left-[2.5rem] lg:left-[4.5rem]" />
          <div className="flex flex-col text-center">
            Nov - Dec 2023
            <span className="mt-4 max-w-20 text-center lg:max-w-40">
              Develop a comprehensive project plan, outlining timelines and
              milestones.
            </span>
          </div>
        </span>
        <span className="absolute start-[36%] top-8 -translate-x-1/2 text-[8px] text-white/60 sm:start-[38%]  sm:text-xs lg:text-sm rtl:translate-x-1/2">
          <div className="absolute -top-3 left-[2rem] w-5 rotate-90  border-[0.5px] border-white/20 sm:left-[2.5rem] lg:left-[4.5rem]" />
          <div className="flex flex-col text-center">
            Jan - Feb 2024
            <span className="mt-4 max-w-20 text-center lg:max-w-40">
              Continue refining the product based on user input and
              technological advancements.
            </span>
          </div>
        </span>
        <span className="absolute start-[50%] top-8 text-[8px] text-white/60 sm:start-[48%] sm:text-xs lg:text-sm">
          <div className="absolute -top-3 left-[2rem] w-5 rotate-90  border-[0.5px] border-white/20 sm:left-[3rem] lg:left-[4.5rem]" />
          <div className="flex flex-col text-center">
            Feb - Apr 2024
            <span className="mt-4 max-w-20 text-center sm:max-w-32 lg:max-w-40">
              Creation of a decentralize martketplace to neural network aMonitor
              and analyze user engagement metrics to optimize marketing
              efforts.djacent coefficients.
            </span>
          </div>
        </span>
        <span className="absolute end-0 top-8 text-[8px] text-white/60 sm:start-[58%] sm:text-xs lg:text-sm">
          <div className="absolute -top-3 left-[2rem] w-5 rotate-90 border-[0.5px]  border-white/20  sm:left-[4.5rem] md:left-[9.5rem] lg:left-[12.5rem]" />
          <div className="flex flex-col text-center">
            Apr - Nov 2024
            <span className="mx-auto mt-4 max-w-24 text-center lg:max-w-40">
              Maintain an agile approach, adapting to market trends and
              technological advancements.
            </span>
          </div>
        </span>
      </div>
    </div>
  );
}
