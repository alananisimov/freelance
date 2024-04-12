import { grotesque } from '@/app/fonts';
import { navigation } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <footer className={'bg-white ' + grotesque.className}>
      <div className="mx-auto w-full bg-[#192F47] px-8 py-16 pb-6 text-white md:px-32 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 inline-flex gap-x-6 md:mb-0">
            <a href="#" className="flex items-center">
              <Image
                src="/white_logo.png"
                className="me-3 max-h-24 w-auto"
                alt="Goldman Sashs logo"
                width={150}
                height={60}
              />
            </a>
            <button className="mx-auto my-auto h-fit border-2 border-white px-8 py-2 text-white transition duration-300 ease-in-out hover:bg-white hover:text-[#192F47] md:mx-0">
              <a href="https://lobstr.co/trade/GSS:GDPG3WDC7UONHLOPTTZLWVA7TZEMFOGCQGNMAPNGWL6YSPRH6MYB7X5P">
                INVEST NOW
              </a>
            </button>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-x-32 sm:gap-y-6 lg:pl-16">
            <div className="flex flex-col gap-y-4">
              {navigation.slice(0, 3).map((el, id) => (
                <div key={id} className="">
                  <Link href={el.href}>{el.name}</Link>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-y-4">
              {navigation.slice(3, 6).map((el, id) => (
                <div key={id}>
                  <Link href={el.href}>{el.name}</Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex sm:flex-row sm:items-center sm:justify-between">
          <span className="col-span-1 mt-4 w-full pr-8 text-sm sm:mt-0 sm:text-center">
            @ 2023 Goldman Sachs
          </span>
        </div>
      </div>
    </footer>
  );
}
