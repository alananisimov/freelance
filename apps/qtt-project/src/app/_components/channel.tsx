"use client";
import Image from "next/image";
import Link from "next/link";
import { type HTMLProps } from "react";
import { cn, truncate } from "~/lib/utils";
import { api } from "~/trpc/react";

export default function Channel({ ...props }: HTMLProps<HTMLDivElement>) {
  const { data } = api.data.getTgPost.useQuery({
    link: "https://t.me/hjfsdjkfs/2",
  });
  return (
    <div
      {...props}
      className={cn(props.className, "grid grid-cols-1 sm:grid-cols-6")}
    >
      <div className="col-span-4 flex flex-col rounded-xl border border-white bg-[#818181]/[0.17] p-4 px-6">
        <div className="inline-flex justify-between text-lg">
          <h1>QTT channel</h1>
          <Image
            src={"/tg-icon.svg"}
            alt=""
            width={32}
            height={32}
            className="h-5 w-5"
          />
        </div>
        <div className="flex h-full items-center">
          <p
            className="hidden text-xs font-extralight sm:block"
            suppressHydrationWarning
          >
            {truncate(
              data ??
                `We're excited to share a significant milestone achieved by QLM - our
            tenth consecutive day of daily dividend distributions! These dividends
            are a testament to our unwavering commitment to delivering exceptional
            value and exclusive benefits to our esteemed QLM holders.
            This journey of continuous payouts showcases the resilience of our
            financial strategies and the consistent trust our community places in
            us. With each day's distribution, we reaffirm our dedication to
            excellence and emphasize the importance of nurturing a mutually
            beneficial relationship with our investors.
            At QLM, we view this not just as a series of transactions, but as an
            ongoing partnership. Every day presents new opportunities to enrich
            our community and strengthen the confidence they have in
            us. 🌟💼📈We're excited to share a significant milestone achieved by
            QLM - our tenth consecutive day of daily dividend distributions! These
            dividends are`,
              935,
            )}
          </p>
          <p className="text-sm font-light sm:hidden" suppressHydrationWarning>
            {truncate(
              data ??
                `We're excited to share a significant milestone achieved by QLM - our
            tenth consecutive day of daily dividend distributions! These dividends
            are a testament to our unwavering commitment to delivering exceptional
            value and exclusive benefits to our esteemed QLM holders.
            This journey of continuous payouts showcases the resilience of our
            financial strategies and the consistent trust our community places in
            us. With each day's distribution, we reaffirm our dedication to
            excellence and emphasize the importance of nurturing a mutually
            beneficial relationship with our investors.
            At QLM, we view this not just as a series of transactions, but as an
            ongoing partnership. Every day presents new opportunities to enrich
            our community and strengthen the confidence they have in
            us. 🌟💼📈We're excited to share a significant milestone achieved by
            QLM - our tenth consecutive day of daily dividend distributions! These
            dividends are`,
              935,
            )}
          </p>
        </div>
      </div>
      <div className="col-span-2 ml-4 flex flex-col gap-y-6">
        <div>
          <Image
            src={"/tg-anim.gif"}
            alt=""
            width={300}
            height={300}
            priority
            className=""
          />
        </div>
        <Link
          href={"/"}
          className=" mt-auto inline-flex items-center justify-between py-2 font-light transition-all duration-500 hover:underline hover:underline-offset-2"
        >
          Continue reading in our telegram
          <Image
            src={"/long_arrow.svg"}
            alt=""
            width={64}
            height={32}
            className="h-2 w-auto"
          />
        </Link>
      </div>
    </div>
  );
}
