"use client";
import Image from "next/image";
import bg from "~/../public/bg-min.png";
import EditModal from "./edit-modal";

import { type Data } from "@prisma/client";
import Ranger from "./ranger";
import { useEffect, useState } from "react";
import { type Session } from "next-auth";
import Link from "next/link";

export default function Hero({
  data,
  session,
}: {
  data: Data | null;
  session: Session | null;
}) {
  const [timeRemaining, setTimeRemaining] = useState<number | null>(null);

  useEffect(() => {
    if (data) {
      const intervalId = setInterval(() => {
        const now = new Date();
        const endTime = new Date(data.bonus_end_time);
        const difference = endTime.getTime() - now.getTime();
        setTimeRemaining(difference);
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [data]);

  const formatTime = (time: number): string => {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);

    return `${days} : ${padWithZero(hours)} : ${padWithZero(minutes)} : ${padWithZero(seconds)}`;
  };

  const padWithZero = (num: number): string => {
    return num.toString().padStart(2, "0");
  };

  return (
    <div className="relative w-screen">
      <Image
        src={bg}
        alt=""
        layout="fill"
        aria-label="Background"
        loading="eager"
        priority
        className="absolute left-0 top-0 -z-20 object-cover"
      />
      <div className="mx-auto mt-32 flex max-w-screen-lg flex-col px-5 sm:mt-20 lg:px-0">
        <div className="grid w-full grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-y-0 lg:gap-x-20">
          <div className="flex flex-col justify-center">
            <h2 className="mb-4 text-2xl">QTT INCOME</h2>

            <h1 className="inline-block scroll-m-20 bg-gradient-to-r from-[#00FFFF] to-indigo-400 bg-clip-text text-4xl  font-extrabold tracking-tight text-transparent lg:text-5xl">
              502% APY <span className="font-normal">DAILY</span>
            </h1>
            <h1 className="scroll-m-20 text-4xl tracking-tight lg:text-5xl">
              IN XLM(STELLAR)
            </h1>
            <p className="mt-6 text-sm text-white/60">
              Welcome to the QTT Project – a hub of innovation inspired by the
              trailblazing vision of Donald Trump. At QTT, we are committed to
              redefining the future through cutting-edge initiatives and
              forward-thinking solutions. Join us on this transformative journey
              as we channel the spirit of leadership exemplified by Donald Trump
              to create a world where groundbreaking ideas thrive and shape a
              brighter tomorrow.
            </p>
          </div>
          <div>
            <Image
              src={"/animated_cubes.gif"}
              alt=""
              priority
              width={500}
              height={500}
              className="ml-auto"
            />
          </div>
        </div>
        <div className=" mt-16 grid grid-cols-1 gap-x-10 gap-y-6 sm:hidden">
          <Link
            href={""}
            className="flex w-full flex-col justify-between gap-y-4 rounded-xl border border-white bg-white/[0.10] p-3 px-4 backdrop-blur-md transition-all duration-300 hover:bg-[#0400D6]/[0.17]"
          >
            <div className="flex w-full flex-row items-center justify-between gap-x-6">
              <Image
                src={"/stellarterm.svg"}
                alt=""
                width={32}
                height={32}
                priority
                className="h-8 w-auto"
              />
              <Image
                src={"/share.svg"}
                alt=""
                width={32}
                priority
                height={32}
                className="h-5 w-5"
              />
            </div>
            <div className="flex w-full flex-row items-center justify-between font-light">
              <h2>Trade on StellarTerm</h2>
              <Image
                src={"/long_arrow.svg"}
                alt=""
                width={64}
                priority
                height={32}
                className="h-2 w-auto"
              />
            </div>
          </Link>
          <Link
            href={""}
            className="flex flex-col justify-between gap-y-4 rounded-xl border border-white bg-white/[0.10] p-3 px-4 backdrop-blur-md transition-all duration-300 hover:bg-[#0400D6]/[0.17]"
          >
            <div className="flex w-full flex-row items-center justify-between gap-x-6">
              <Image
                src={"/lobst.svg"}
                alt=""
                priority
                width={32}
                height={32}
                className="h-6 w-auto"
              />
              <Image
                src={"/share.svg"}
                alt=""
                width={32}
                height={32}
                priority
                className="h-5 w-5"
              />
            </div>
            <div className="flex w-full flex-row items-center justify-between font-light">
              <h2>Trade on Lobstr</h2>
              <Image
                src={"/long_arrow.svg"}
                alt=""
                width={64}
                height={32}
                className="h-2 w-auto"
              />
            </div>
          </Link>
          <Link
            href={""}
            className="flex flex-col justify-between gap-y-4 rounded-xl border border-white bg-white/[0.10] p-3 px-4 backdrop-blur-md transition-all duration-300 hover:bg-[#0400D6]/[0.17]"
          >
            <div className="flex w-full flex-row items-center justify-between gap-x-6">
              <Image
                src={"/telegram.svg"}
                alt=""
                width={32}
                priority
                height={32}
                className="h-8 w-auto"
              />
              <Image
                src={"/share.svg"}
                alt=""
                width={32}
                height={32}
                className="h-5 w-5"
              />
            </div>
            <div className="flex w-full flex-row items-center justify-between font-light">
              <h2>Visit our telegram</h2>
              <Image
                src={"/long_arrow.svg"}
                alt=""
                priority
                width={64}
                height={32}
                className="h-2 w-auto"
              />
            </div>
          </Link>
        </div>
        <div className="relative mt-16 flex flex-col justify-between gap-x-16 gap-y-6  rounded-xl border border-white p-5 sm:mt-32 sm:p-8 sm:pt-20 md:flex-row">
          <div className="absolute -top-12 left-0 right-0 hidden w-full sm:block">
            <div className="mx-auto grid max-w-3xl grid-cols-1 gap-x-10 sm:grid-cols-3">
              <Link
                href={""}
                className="flex flex-col justify-between gap-y-4 rounded-xl border border-white bg-white/[0.10] p-3 px-4 backdrop-blur-md transition-all duration-300 hover:bg-[#0400D6]/[0.17]"
              >
                <div className="flex w-full flex-row items-center justify-between gap-x-6">
                  <Image
                    src={"/stellarterm.svg"}
                    alt=""
                    priority
                    width={32}
                    height={32}
                    className="h-6 w-auto"
                  />
                  <Image
                    src={"/share.svg"}
                    alt=""
                    width={32}
                    height={32}
                    priority
                    className="h-5 w-5"
                  />
                </div>
                <div className="flex w-full flex-row items-center justify-between font-light">
                  <h2>Trade on StellarTerm</h2>
                  <Image
                    src={"/long_arrow.svg"}
                    alt=""
                    priority
                    width={64}
                    height={32}
                    className="h-2 w-auto"
                  />
                </div>
              </Link>
              <Link
                href={""}
                className="flex flex-col justify-between gap-y-4 rounded-xl border border-white bg-white/[0.10] p-3 px-4 backdrop-blur-md transition-all duration-300 hover:bg-[#0400D6]/[0.17]"
              >
                <div className="flex w-full flex-row items-center justify-between gap-x-6">
                  <Image
                    src={"/lobst.svg"}
                    alt=""
                    width={32}
                    priority
                    height={32}
                    className="h-6 w-auto"
                  />
                  <Image
                    src={"/share.svg"}
                    alt=""
                    priority
                    width={32}
                    height={32}
                    className="h-5 w-5"
                  />
                </div>
                <div className="flex w-full flex-row items-center justify-between font-light">
                  <h2>Trade on Lobstr</h2>
                  <Image
                    src={"/long_arrow.svg"}
                    alt=""
                    priority
                    width={64}
                    height={32}
                    className="h-2 w-auto"
                  />
                </div>
              </Link>

              <Link
                href={""}
                className="flex flex-col justify-between gap-y-4 rounded-xl border border-white bg-white/[0.10] p-3 px-4 backdrop-blur-md transition-all duration-300 hover:bg-[#0400D6]/[0.17]"
              >
                <div className="flex w-full flex-row items-center justify-between gap-x-6">
                  <Image
                    src={"/telegram.svg"}
                    alt=""
                    width={32}
                    height={32}
                    priority
                    className="h-6 w-auto"
                  />
                  <Image
                    src={"/share.svg"}
                    alt=""
                    width={32}
                    priority
                    height={32}
                    className="h-5 w-5"
                  />
                </div>
                <div className="flex w-full flex-row items-center justify-between font-light">
                  <h2>Visit our telegram</h2>
                  <Image
                    src={"/long_arrow.svg"}
                    alt=""
                    priority
                    width={64}
                    height={32}
                    className="h-2 w-auto"
                  />
                </div>
              </Link>
            </div>
          </div>
          <div className="flex w-full flex-col lg:max-w-sm">
            <h3 className="mb-2">
              TARGET - 5B TOKENS{" "}
              <EditModal
                session={session}
                column="ranger_value"
                value={data?.ranger_value ?? 1000}
              />
            </h3>
            <Ranger value={data?.ranger_value} />
          </div>
          <div className="flex w-full flex-row justify-around">
            <div className="">
              <h2 className="text-sm text-white/60 sm:text-base">
                CURRENT BONUS{" "}
                <EditModal
                  session={session}
                  column="current_bonus"
                  value={data?.current_bonus ?? 0}
                />
              </h2>
              <div className="mt-2 text-lg sm:text-2xl ">
                <h1>{data?.current_bonus} %</h1>
                <p className="text-xs text-white/60">
                  Contributors can receive
                </p>
              </div>
            </div>
            <div className="">
              <h2 className="text-sm text-white/60 sm:text-base">
                THE BONUS ENDS IN{" "}
                {data !== null && (
                  <EditModal
                    session={session}
                    column="bonus_end_time"
                    value={data.bonus_end_time}
                  />
                )}
              </h2>
              <div className="mt-2 text-lg sm:text-2xl">
                <h1>
                  {timeRemaining !== null
                    ? formatTime(timeRemaining)
                    : "Loading..."}
                </h1>
                <span className=" -mx-2 -mt-1  ml-1 flex flex-row justify-between gap-x-0.5 text-[10px] text-white/60">
                  <p>Days</p>
                  <p>Hours</p>
                  <p>Minutes</p>
                  <p>Seconds</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
