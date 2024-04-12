import Link from "next/link";
import { montrerrat, sohne } from "~/fonts";

export interface TierCardProps {
  title: string;
  procent: string;
  constant_procent: string;
  hold_from: string;
  hold_to: string;
}
export default function TierCard({
  title,
  procent,
  constant_procent,
  hold_from,
  hold_to,
}: TierCardProps) {
  return (
    <div
      className={`flex max-w-72 flex-col justify-center overflow-auto rounded-[50px] rounded-bl-none border-4 border-gray-600 px-10 py-6 text-center ${montrerrat.className} transition-all duration-500 hover:border-[#F4548530]/25`}
    >
      <div
        id="title"
        className={`text-3xl font-bold ${sohne.className} border-b pb-5`}
      >
        {title}
      </div>
      <span className="pt-2 text-3xl font-bold">{procent}</span>
      <span className="pt-2 text-base font-extralight text-[#E6E6E6]">
        {constant_procent}
      </span>
      <div className=" flex flex-col px-4 pt-3 text-3xl font-light">
        Hold from <span className="font-bold">{hold_from}</span>
        to <span className=" font-bold">{hold_to}</span>
      </div>
      <Link
        href={
          "https://lobstr.co/trade/eCOIN:GCQWVTPTLJMDTQG5XXNYP4UGSYFUA54HW5IKOJF7ZDEJ6I5WXLZAIJMP"
        }
        className="mt-4 rounded-3xl rounded-bl-none bg-[#F45485] px-2 py-5 text-xl font-medium transition-all duration-500 hover:bg-[#79253F]"
      >
        Buy EMC
      </Link>
    </div>
  );
}
