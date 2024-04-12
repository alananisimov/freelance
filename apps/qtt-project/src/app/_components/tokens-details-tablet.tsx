import { type Data } from "@prisma/client";
import { type Session } from "next-auth";
import EditModal from "./edit-modal";
import Image from "next/image";

export default function TokensDetailsTablet({
  data,
  session,
}: {
  data: Data | null;
  session: Session | null;
}) {
  return (
    <div className="flex flex-col lg:hidden">
      <div className=" grid grid-cols-1 gap-3 sm:grid-cols-3 lg:hidden">
        <div className="flex flex-col justify-between gap-y-2 rounded-xl border border-white border-white/30 bg-[#818181]/[0.08] p-3 transition-all duration-300 hover:bg-[#0400D6]/[0.17]">
          <h1 className=" font-sm">Tokens alocate for Public Sale </h1>
          <div className="inline-flex items-end gap-x-2">
            <h2 className="text-3xl">
              {data?.tokens_allocate_public} %{" "}
              <EditModal
                session={session}
                column="tokens_allocate_public"
                value={data?.tokens_allocate_public ?? 100}
              />
            </h2>
            <span className="mb-1 text-sm font-extralight text-white/75">
              (lookup)
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-y-2 rounded-xl border border-white border-white/30 bg-[#818181]/[0.08] p-3 transition-all duration-300 hover:bg-[#0400D6]/[0.17]">
          <h1 className=" font-sm">Tokens alocate for Private Sale </h1>
          <div className="inline-flex items-end gap-x-2">
            <h2 className="text-3xl">
              {data?.tokens_allocate_private} %{" "}
              <EditModal
                session={session}
                column="tokens_allocate_private"
                value={data?.tokens_allocate_private ?? 100}
              />
            </h2>
            <span className="mb-1 text-sm font-extralight text-white/75">
              (lookup)
            </span>
          </div>
        </div>
        <div className=" flex flex-col justify-between gap-y-2 rounded-xl border border-white border-white/30 bg-[#818181]/[0.08] p-3 transition-all duration-300 hover:bg-[#0400D6]/[0.17]">
          <h1 className=" font-sm">Bounty & Events </h1>
          <div className="inline-flex items-end gap-x-2">
            <h2 className="z-20 text-3xl">
              {data?.bounty_and_events} %{" "}
              <EditModal
                session={session}
                column="bounty_and_events"
                value={data?.bounty_and_events ?? 100}
              />
            </h2>
            <span className="mb-1 text-sm font-extralight text-white/75">
              (lookup)
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-y-2 rounded-xl border border-white border-white/30 bg-[#818181]/[0.08] p-3 transition-all duration-300 hover:bg-[#0400D6]/[0.17]">
          <h1 className=" font-sm">
            Team & Founder{" "}
            <EditModal
              session={session}
              column="team_and_founder"
              value={data?.team_and_founder ?? 100}
            />
          </h1>
          <div className="inline-flex items-end gap-x-2">
            <h2 className="text-3xl">{data?.team_and_founder} %</h2>
            <span className="mb-1 text-sm font-extralight text-white/75">
              (lookup)
            </span>
          </div>
        </div>
        <div className=" flex flex-col justify-between gap-y-2 rounded-xl border border-white border-white/30 bg-[#818181]/[0.08] p-3 transition-all duration-300 hover:bg-[#0400D6]/[0.17]">
          <h1 className=" font-sm">
            Reserve Fund{" "}
            <EditModal
              session={session}
              column="reserve_fund"
              value={data?.reserve_fund ?? 100}
            />
          </h1>
          <div className="inline-flex items-end gap-x-2">
            <h2 className="text-3xl">{data?.reserve_fund} %</h2>
            <span className="mb-1 text-sm font-extralight text-white/75">
              (6 months lockup)
            </span>
          </div>
        </div>
        <div className="  flex flex-col justify-between gap-y-2 rounded-xl border border-white border-white/30 bg-[#818181]/[0.08] p-3 transition-all duration-300 hover:bg-[#0400D6]/[0.17]">
          <h1 className=" font-sm">
            Advisors & Partners{" "}
            <EditModal
              session={session}
              column="advisors_and_partners"
              value={data?.advisors_and_partners ?? 100}
            />
          </h1>
          <div className="inline-flex items-end gap-x-2">
            <h2 className="text-3xl">{data?.advisors_and_partners} % </h2>
            <span className="mb-1 text-sm font-extralight text-white/75">
              (6 months lockup)
            </span>
          </div>
        </div>
      </div>
      <Image
        src={"/coins-anim.gif"}
        alt=""
        width={200}
        height={200}
        priority
        className="h-auto w-full  scale-x-[-1]"
      />
      <div className="grid grid-cols-2 sm:grid-cols-4" id="info">
        <div className="mx-auto flex w-28 flex-col gap-y-2">
          <h3 className=" text-xs font-light text-white/60">
            Start time{" "}
            <EditModal
              session={session}
              column="start_time"
              value={data?.start_time ?? new Date()}
            />
          </h3>
          <h2 className="text-xl">{data?.start_time.toLocaleDateString()}</h2>
        </div>
        <div className="mx-auto flex w-28 flex-col gap-y-2">
          <h3 className=" text-xs font-light text-white/60">
            Token symbol{" "}
            <EditModal
              session={session}
              column="token_symbol"
              value={data?.token_symbol ?? "QTT"}
            />
          </h3>
          <h2 className="text-xl">{data?.token_symbol}</h2>
        </div>
        <div className="mx-auto flex w-28 flex-col gap-y-2">
          <h3 className=" text-xs font-light text-white/60">
            Hard cap{" "}
            <EditModal
              session={session}
              column="hard_cap"
              value={data?.hard_cap ?? 100}
            />
          </h3>
          <h2 className="text-xl">{data?.hard_cap} M</h2>
        </div>
        <div className="mx-auto flex w-28 flex-col gap-y-2">
          <h3 className=" text-xs font-light text-white/60">
            Crowdsale{" "}
            <EditModal
              session={session}
              column="crowdsale_1"
              value={data?.crowdsale_1 ?? 100}
            />
          </h3>
          <h2 className="text-xl">{data?.crowdsale_1} M</h2>
        </div>
        <div className="mx-auto flex w-28 flex-col gap-y-2">
          <h3 className=" text-xs font-light text-white/60">
            End time{" "}
            <EditModal
              session={session}
              column="end_time"
              value={data?.end_time ?? 100}
            />
          </h3>
          <h2 className="text-xl">{data?.end_time.toLocaleDateString()}</h2>
        </div>
        <div className="mx-auto flex w-28 flex-col gap-y-2">
          <h3 className=" text-xs font-light text-white/60">
            Token offered{" "}
            <EditModal
              session={session}
              column="token_offered"
              value={data?.token_offered ?? 100}
            />
          </h3>
          <h2 className="text-xl">{data?.token_offered} M</h2>
        </div>
        <div className="mx-auto flex w-28 flex-col gap-y-2">
          <h3 className=" text-xs font-light text-white/60">
            Soft cap{" "}
            <EditModal
              session={session}
              column="soft_cap"
              value={data?.soft_cap ?? 100}
            />
          </h3>
          <h2 className="text-xl">{data?.soft_cap} M</h2>
        </div>
        <div className="mx-auto flex w-28 flex-col gap-y-2">
          <h3 className=" text-xs font-light text-white/60">
            Crowdsale{" "}
            <EditModal
              session={session}
              column="crowdsale_2"
              value={data?.crowdsale_2 ?? 100}
            />
          </h3>
          <h2 className="text-xl">{data?.crowdsale_2} M</h2>
        </div>
      </div>
    </div>
  );
}
