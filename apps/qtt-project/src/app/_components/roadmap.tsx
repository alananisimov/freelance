import { type Data } from "@prisma/client";
import { type Session } from "next-auth";
import EditModal from "./edit-modal";
import { RoadmapRanger } from "./ranger";

export default function Roadmap({
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
          ROADMAP
        </span>
        <h1 className="text-3xl font-bold ">
          ROADMAP{" "}
          <EditModal
            session={session}
            column="roadmap_time"
            value={data?.roadmap_time ?? 1000}
          />
        </h1>
        <span className="hidden text-3xl font-thin text-white/20 lg:block">
          ROADMAP
        </span>
      </div>
      <div className=" flex w-full justify-center text-lg sm:justify-end lg:justify-center">
        <h1>Breakdown of our Token Recipients.</h1>
      </div>
      <RoadmapRanger value={data?.roadmap_time} />
    </div>
  );
}
