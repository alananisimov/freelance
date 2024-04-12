import classNames from "classnames";
import { type HTMLAttributes } from "react";
import Link from "next/link";
import { navigation } from "~/constants";

export default function Footer(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="relative overflow-hidden pt-96">
      <div
        {...props}
        className={classNames(
          props.className,
          "mx-12 flex flex-col items-center justify-between border-t px-8 text-white md:mx-24 md:flex-row ",
        )}
      >
        <h1 className="text-4xl font-bold ">Elon Musk Coin</h1>
        <div className="z-30 mt-8 flex flex-col gap-x-8 gap-y-2 md:mt-0 md:flex-row">
          {navigation.map((el, index) => (
            <Link href={el.href} key={index}>
              <button>{el.name}</button>
            </Link>
          ))}
        </div>
      </div>
      <div
        className="absolute inset-x-0 -bottom-32 z-10 blur-3xl"
        aria-hidden="true"
      >
        <div className=" relative bottom-[200px] left-0 aspect-[1155/678] h-[15rem] w-[15rem] -translate-x-1/2 translate-y-1/2 scale-150  rounded-full bg-gradient-to-tr from-[#F454855E]/15 to-[#c441685e]/15 sm:h-[25rem] sm:w-[25rem]" />
      </div>
    </div>
  );
}
