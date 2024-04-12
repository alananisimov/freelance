import { type Data } from "@prisma/client";
import { type Session } from "next-auth";
import TokensDetailsDesktop from "./tokens-details-desktop";
import TokensDetailsTablet from "./tokens-details-tablet";

export default function TokensDetails({
  data,
  session,
}: {
  data: Data | null;
  session: Session | null;
}) {
  return (
    <div className="flex flex-col gap-y-8">
      <div className="mt-32 flex w-full flex-row items-center justify-center sm:justify-between lg:justify-around">
        <span className="hidden text-3xl font-thin text-white/20 sm:block">
          TOKENS DETAILS
        </span>
        <h1 className="text-3xl font-bold " id="tokendetails">
          TOKENS DETAILS
        </h1>
        <span className="hidden text-3xl font-thin text-white/20 lg:block">
          TOKENS DETAILS
        </span>
      </div>
      <div className=" flex w-full justify-center text-lg sm:justify-end lg:justify-center">
        <h1>Breakdown of our Token Recipients.</h1>
      </div>

      <TokensDetailsDesktop data={data} session={session} />
      <TokensDetailsTablet data={data} session={session} />
    </div>
  );
}
