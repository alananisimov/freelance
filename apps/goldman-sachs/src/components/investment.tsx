import Image from 'next/image';

export function Investment() {
  return (
    <div id="investment_plan" className="w-screen bg-[#192F47] py-10">
      <div className="mx-auto my-10 w-28 border-t-2 border-white"></div>
      <div className="text-center font-medium text-white" id="head">
        <h4 className=" text-xl">Choose your</h4>
        <h2 className="text-3xl">Investment Plan</h2>
      </div>
      <div className="mx-auto flex flex-row gap-x-6">
        <div className="carousel mx-auto mt-12 gap-x-8">
          <div className="carousel-item pl-6">
            <InvestPlanCard
              image="/photo1.png"
              content1="51.1 % APY"
              content2="0.07% 12hours"
              hold="Hold 1000 - 100,000"
            />
          </div>
          <InvestPlanCard
            image="/photo2.jpeg"
            content1="73 % APY"
            content2="0.1% 12hours"
            hold="Hold 100,001 - 1,000,000"
          />
          <InvestPlanCard
            image="/photo3.jpeg"
            content1="146 % APY"
            content2="0.2% 12hours"
            hold="Hold 1,000,001 - 10,000,000"
          />
          <div className="carousel-item pr-6">
            <InvestPlanCard
              image="/photo4.jpeg"
              content1="185,5 % APY"
              content2="0.25% 12hours"
              hold="Hold 10,000,001 - 30,000,000"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

type InvestmentPlanCardProps = {
  image: string;
  content1: string;
  content2: string;
  hold: string;
};
function InvestPlanCard({
  image,
  content1,
  content2,
  hold,
}: InvestmentPlanCardProps) {
  return (
    <div className="carousel-item group flex h-[21rem] max-w-56 flex-col overflow-hidden bg-white transition duration-300 ease-in-out ">
      <Image
        src={image}
        alt="image"
        height={'180'}
        width={'320'}
        className="h-[129px] object-cover transition duration-300 ease-in-out group-hover:scale-105 "
      />
      <div className="mx-auto flex h-full w-full flex-col justify-between p-6">
        <div>
          <h3 className="text-2xl font-semibold">{content1}</h3>
          <h5 className="text-lg font-medium">{content2}</h5>
          <p className="my-auto">{hold}</p>
        </div>
        <button className="w-fit border-2 border-[#192F47] px-4 py-1 font-medium transition duration-300 ease-in-out hover:bg-[#192F47] hover:text-white ">
          <a href="https://lobstr.co/trade/GSS:GDPG3WDC7UONHLOPTTZLWVA7TZEMFOGCQGNMAPNGWL6YSPRH6MYB7X5P">
            Buy asset
          </a>
        </button>
      </div>
    </div>
  );
}
