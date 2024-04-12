/* eslint-disable @typescript-eslint/no-unused-vars */

import { type Data } from "@prisma/client";
import Hero from "./_components/hero";
import { api } from "~/trpc/server";
import { getServerSession } from "next-auth";
import { authOptions } from "~/server/auth";
import Channel from "./_components/channel";
import WhereToBuy from "./_components/where-to-buy";
import TokensDetails from "./_components/tokens-details";
import Roadmap from "./_components/roadmap";
import Footer from "./_components/layout/footer";
export const dynamic = "force-dynamic";
export default async function Home() {
  const data: Data | null = await api.data.getAllData.query();
  const session = await getServerSession(authOptions);

  return (
    <main className="flex min-h-screen  w-screen flex-col overflow-hidden">
      <Hero data={data} session={session} />
      <div className="max-w-screen mx-5 mt-16 flex flex-col sm:max-w-screen-lg lg:mx-auto lg:px-0">
        <Channel />
        <WhereToBuy />
        <TokensDetails data={data} session={session} />
        <Roadmap data={data} session={session} />
        <Footer />
      </div>
    </main>
  );
}
