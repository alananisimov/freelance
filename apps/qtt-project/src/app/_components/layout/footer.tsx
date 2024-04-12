import Image from "next/image";
import Link from "next/link";
import { travels } from "~/app/fonts";
import { Button } from "~/components/ui/button";
import { navigation } from "~/lib/constants";

export default function Footer() {
  return (
    <div
      className={`relative mb-8 mt-72 flex flex-col items-center rounded-xl border-[0.5px] border-white bg-[#818181]/[0.17] p-4 sm:p-6 lg:flex-row ${travels.className}`}
    >
      <Link href={"/"}>
        <Image
          src={"/logo.svg"}
          alt=""
          width={200}
          height={100}
          className="h-16 w-auto lg:h-10"
        />
      </Link>
      <div className="mt-10 flex h-full w-full flex-col justify-center gap-x-2 text-center  text-xs sm:flex-row sm:gap-x-4 sm:text-sm lg:mt-0">
        {navigation.map((item) => (
          <Link key={item.name} href={item.href}>
            <Button variant={"link"}>{item.name}</Button>
          </Link>
        ))}
      </div>
      <Image
        src={"/trump_banner.png"}
        alt=""
        priority
        width={150}
        height={100}
        className=" mt-8 rounded-xl border-[0.5px] border-white lg:-mb-6 lg:-mr-6 lg:-mt-6 lg:ml-auto lg:border-b-0 lg:border-r-0 lg:border-t-0"
      />
    </div>
  );
}
