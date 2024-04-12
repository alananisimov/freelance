import classNames from "classnames";
import { useInView } from "framer-motion";
import Image from "next/image";
import { useRef, type OlHTMLAttributes } from "react";
import img_1 from "~/../public/1.png";
import img_2 from "~/../public/2.png";
import img_3 from "~/../public/3.png";
import img_4 from "~/../public/4.png";
export default function TimeLine(props: OlHTMLAttributes<HTMLOListElement>) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <ol
      {...props}
      className={classNames(" sm:flex", props.className)}
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateX(-50px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
    >
      <li className="relative mb-6 sm:mb-0">
        <div className="flex items-center">
          <div className="z-10 flex h-24 w-auto shrink-0 items-center justify-center rounded-full ring-0 ">
            <Image src={img_1} alt="" />
          </div>
          <div className="mx-3 hidden h-0.5 w-full bg-[#E6E6E6] sm:flex "></div>
        </div>
        <ol className=" mt-6 max-w-sm border-s border-gray-200">
          <li className="mb-6 ms-4">
            <h3 className="text-lg font-semibold  text-white">
              Launch and Foundation
            </h3>
            <h3 className="mt-4 text-lg">(Current - Q1 2024)</h3>
          </li>
          <li className="mb-4 ms-4">
            <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 "></div>

            <h3 className="text-lg font-semibold text-white">
              Successful launch on Stellar blockchain.
            </h3>
          </li>
          <li className="mb-4 ms-4">
            <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 "></div>

            <h3 className="text-lg font-semibold text-white">
              Build an engaged community.
            </h3>
          </li>
          <li className="ms-4">
            <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200"></div>

            <h3 className="text-lg font-semibold text-white">
              Establish strategic partnerships.
            </h3>
          </li>
        </ol>
      </li>
      <li className="relative mb-6 sm:mb-0">
        <div className="flex items-center">
          <div className="z-10 flex h-24 w-auto shrink-0 items-center justify-center rounded-full ring-0 ">
            <Image src={img_2} alt="" />
          </div>
          <div className="mx-3 hidden h-0.5 w-full bg-[#E6E6E6] sm:flex"></div>
        </div>
        <ol className=" mt-6 max-w-sm border-s border-gray-200">
          <li className="mb-6 ms-4">
            <h3 className="text-lg font-semibold  text-white">
              Decentralized Finance and Coin Burning
            </h3>
            <h3 className="mt-4 text-lg">(Q2 2024 - Q3 2024)</h3>
          </li>
          <li className="mb-4 ms-4">
            <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 "></div>

            <h3 className="text-lg font-semibold text-white">
              Introduce DeFi functionalities.
            </h3>
          </li>
          <li className="mb-4 ms-4">
            <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 "></div>

            <h3 className="text-lg font-semibold text-white">
              Implement smart contracts.
            </h3>
          </li>
          <li className="mb-4 ms-4">
            <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200"></div>

            <h3 className="text-lg font-semibold text-white">
              Establish liquidity pools.
            </h3>
          </li>
          <li className="ms-4">
            <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200"></div>

            <h3 className="text-lg font-semibold text-white">
              Initiate coin burning mechanisms for enhanced scarcity and value
              preservation
            </h3>
          </li>
        </ol>
      </li>
      <li className="relative mb-6 sm:mb-0">
        <div className="flex items-center">
          <div className="z-10 flex h-24 w-auto shrink-0 items-center justify-center rounded-full ring-0 ">
            <Image src={img_3} alt="" />
          </div>
          <div className="mx-3 hidden h-0.5 w-full bg-[#E6E6E6] sm:flex"></div>
        </div>
        <ol className=" mt-6 max-w-sm border-s border-gray-200">
          <li className="mb-6 ms-4">
            <h3 className="text-lg font-semibold  text-white">
              Sustainability and Innovation
            </h3>
            <h3 className="mt-4 text-lg">(Q4 2024 - Ongoing)</h3>
          </li>
          <li className="mb-4 ms-4">
            <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 "></div>

            <h3 className="text-lg font-semibold text-white">
              Implement environmental initiatives.
            </h3>
          </li>
          <li className="mb-4 ms-4">
            <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 "></div>

            <h3 className="text-lg font-semibold text-white">
              Invest in research and development.
            </h3>
          </li>
          <li className="ms-4">
            <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200"></div>

            <h3 className="text-lg font-semibold text-white">
              Expand global adoption.
            </h3>
          </li>
        </ol>
      </li>
      <li className="relative mb-6 sm:mb-0">
        <div className="flex items-center">
          <div className="z-10 flex h-24 w-auto shrink-0 items-center justify-center rounded-full ring-0 ">
            <Image src={img_4} alt="" />
          </div>
        </div>
        <ol className=" mt-6 max-w-sm border-s border-gray-200">
          <li className="mb-6 ms-4">
            <h3 className="text-lg font-semibold  text-white">
              Sustainability and Innovation
            </h3>
            <h3 className="mt-4 text-lg">(Current - Q1 2024)</h3>
          </li>
          <li className="mb-4 ms-4">
            <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 "></div>

            <h3 className="text-lg font-semibold text-white">
              Successful launch on Stellar blockchain.
            </h3>
          </li>
          <li className="mb-4 ms-4">
            <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 "></div>

            <h3 className="text-lg font-semibold text-white">
              Build an engaged community.
            </h3>
          </li>
          <li className="ms-4">
            <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200"></div>

            <h3 className="text-lg font-semibold text-white">
              Establish strategic partnerships.
            </h3>
          </li>
        </ol>
      </li>
    </ol>
  );
}
