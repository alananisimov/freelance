"use client";
import { type Token } from "@prisma/client";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "~/components/ui/carousel";
import BuyNowBtn from "./buy-now-btn";
import { type Session } from "next-auth";
import { EditSheet } from "./edit-sheet";
import { CreateSheet } from "./create-sheet";

import { useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { type CarouselApi } from "~/components/ui/carousel";
interface TokensListProps {
  tokens: Token[];
  session: Session | null;
}

export default function TokensList({ tokens, session }: TokensListProps) {
  const isAdmin = session?.user.email === "alananisimov@gmail.com";
  const [api, setApi] = useState<CarouselApi>();

  return (
    <div>
      <div className="hidden md:block">
        <Move type="forward" api={api} />
        <Move type="back" api={api} />
      </div>

      <Carousel setApi={setApi}>
        <CarouselContent className="gap-x-4">
          {tokens.map((el, i) => {
            return (
              <CarouselItem
                className="-pl-4 flex flex-col bg-gray-100 md:basis-1/2 xl:basis-1/2"
                key={i}
              >
                <div className="flex w-full items-center bg-[#5AB5B8] px-10 py-6 text-4xl font-normal leading-[42.70px] tracking-tight text-neutral-800">
                  <span className="line-clamp-1">{el.name}</span>
                  <EditSheet token={el} isAdmin={isAdmin} />
                </div>
                <div className="h-full p-10">
                  <p className="text-2xl">{el.text}</p>
                  <div className="mt-8 flex flex-col items-center">
                    <Image
                      src={el.image_link}
                      alt=""
                      width={300}
                      height={300}
                      className="h-auto max-w-44"
                    />
                  </div>
                  <div className=" mt-12 max-h-12 w-auto">
                    <BuyNowBtn link={el.button_link} />
                  </div>
                </div>
              </CarouselItem>
            );
          })}
          {isAdmin && (
            <div className="flex items-center justify-center md:basis-1/2 lg:basis-1/3">
              <div className="ml-4 flex h-32  w-32 flex-col items-center  justify-center rounded-lg bg-white p-10">
                <CreateSheet />
              </div>
            </div>
          )}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

interface MoveProps {
  type: "forward" | "back";
  api: CarouselApi | undefined;
}
export function Move({ type, api }: MoveProps) {
  const handleClick = () => {
    if (api) {
      if (type === "back") {
        api.scrollPrev();
      } else {
        api.scrollNext();
      }
    }
  };
  return (
    <button
      className={`absolute z-20 ${type === "back" ? "left-4 top-1/2 -translate-y-1/2" : "right-4 top-1/2 -translate-y-1/2"}   flex h-20 w-32 items-center justify-center`}
      onClick={handleClick}
    >
      <Image
        src={"/images/rectangle.svg"}
        alt=""
        width={100}
        height={50}
        className=""
      />
      <h2 className="absolute -ml-2 -mt-0.5 inline-flex items-center justify-center gap-x-1 text-cyan-950">
        {type === "back" ? <ArrowLeftIcon /> : <ArrowRightIcon />}
      </h2>
    </button>
  );
}
