"use client";
import Link from "next/link";
import Image from "next/image";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { travels } from "~/app/fonts";
import { Button } from "~/components/ui/button";
import { navigation } from "~/lib/constants";
import { useState } from "react";

export default function NavBar() {
  return (
    <div
      className={`absolute top-8 z-50 flex w-full justify-center bg-transparent px-5 transition-all  sm:px-10 ${travels.className}`}
    >
      <div className=" inline-flex h-16 w-full max-w-screen-lg items-center justify-between">
        <div className="">
          <Link
            href="/"
            className="font-display flex items-center text-lg md:text-xl"
          >
            <Image
              src="/logo.svg"
              alt="Bookconer logo"
              width="32"
              height="32"
              priority
              className="mr-3 h-[3rem] w-auto rounded-full md:h-16"
            ></Image>
          </Link>
        </div>

        <div className="ml-auto hidden flex-row items-center space-x-10 text-sm sm:flex">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href} className="">
              <Button variant={"link"}>{item.name}</Button>
            </Link>
          ))}
        </div>
        <div className="ml-auto sm:hidden">
          <Navigation font={travels.className} />
        </div>
      </div>
    </div>
  );
}

export function Navigation({ font }: { font: string }) {
  const [opened, setOpened] = useState(false);

  return (
    <div className="relative">
      <Popover onOpenChange={setOpened} open={opened}>
        <PopoverTrigger asChild>
          <button
            className="z-20 p-2 transition-all"
            onClick={() => setOpened(true)}
          >
            {opened ? (
              <Image
                src={"/closed.svg"}
                alt=""
                width={32}
                height={32}
                className="h-5 w-5"
              />
            ) : (
              <Image
                src={"/open.svg"}
                alt=""
                width={32}
                height={32}
                className="h-5 w-5"
              />
            )}
          </button>
        </PopoverTrigger>
        <PopoverContent
          className={`mr-2 text-white ${font} z-10 w-56 rounded-xl  p-5`}
        >
          <div className="grid gap-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="hover:underline hover:underline-offset-2"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
