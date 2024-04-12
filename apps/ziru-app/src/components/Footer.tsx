import Image from 'next/image';
import waves1 from '../../public/waves1.svg';
import wave1 from '../../public/wave1.svg';
import icon from '../../public/icon.png';
import Link from 'next/link';
export default function Footer() {
  return (
    <div className="relative">
      <div className=" relative mt-32 w-full md:bottom-0 lg:mt-64">
        <div className=" h-full">
          <Image
            src={waves1}
            alt=""
            height={420}
            className=" absolute bottom-0 -z-10 w-full transform"
          />
          <Image src={wave1} alt="" className=" color-[#9254FF] z-10 w-full" />
        </div>
      </div>
      <div className="absolute bottom-0 inline-flex w-full justify-between px-4 sm:bottom-4 sm:px-8 md:bottom-8 md:px-16">
        <Image src={icon} alt="" className="h-12 w-auto md:h-24" />
        <div className="my-auto flex gap-y-2 sm:flex-col ">
          <Link href={'https://t.me/ziruwealth'}>
            <button className="col-start-1 inline-flex rounded-full bg-gradient-to-r from-[#412F80] to-[#A967F3] px-3 py-0.5 text-white  sm:px-8 sm:py-2">
              <svg
                width="37"
                height="37"
                viewBox="0 0 37 37"
                className="w-4 sm:w-6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="mingcute:telegram-fill" clip-path="url(#clip0_300_20)">
                  <g id="Group">
                    <path
                      id="Vector"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M30.4895 6.82953C30.8705 6.66918 31.2875 6.61388 31.6971 6.66938C32.1067 6.72487 32.4939 6.88914 32.8185 7.14509C33.1431 7.40103 33.3931 7.73929 33.5426 8.12466C33.6921 8.51003 33.7355 8.92842 33.6685 9.33628L30.1719 30.545C29.8328 32.5908 27.5881 33.764 25.7119 32.7449C24.1425 31.8924 21.8115 30.5789 19.7148 29.2084C18.6665 28.5223 15.4552 26.3254 15.8499 24.7622C16.189 23.4256 21.5849 18.4028 24.6682 15.4166C25.8784 14.2434 25.3265 13.5666 23.8974 14.6458C20.3485 17.3252 14.6505 21.3998 12.7665 22.5468C11.1046 23.5582 10.2382 23.7308 9.2022 23.5582C7.31212 23.2437 5.55924 22.7565 4.12858 22.1629C2.19533 21.3613 2.28937 18.7034 4.12704 17.9295L30.4895 6.82953Z"
                      fill="#E3D9F0"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_300_20">
                    <rect width="37" height="37" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <span className="my-auto ml-2 line-clamp-1 hidden text-sm sm:block sm:text-base">
                Join Telegram
              </span>
            </button>
          </Link>
          <span className="col-start-2 my-auto mr-2 hidden sm:flex">
            © Copyright 2023 - ZIRU
          </span>
        </div>
      </div>
    </div>
  );
}
