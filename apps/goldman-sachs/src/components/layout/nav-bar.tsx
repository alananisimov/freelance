import { useEffect, useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import useMediaQuery from '@/hooks/useMediaQuery';
import Link from 'next/link';
import { dropdownNavigation, navigation } from '@/constants';
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}
export default function NavBar() {
  const [openMain, setOpenMain] = useState(false);
  const [openSecond, setOpenSecond] = useState(false);
  const { isMobile } = useMediaQuery();
  const useMenu = () => {
    if (openMain && !openSecond) {
      setOpenMain((value) => !value);
    }
    if (openSecond && !openMain) {
      setOpenSecond((value) => !value);
    }
    if (!openMain && !openSecond) {
      setOpenMain(true);
    }
    if (openMain && openMain) {
      setOpenMain(false);
      setOpenSecond(false);
    }
  };

  useEffect(() => {
    console.log(openSecond);
  }, [openSecond]);
  return (
    <nav>
      <>
        <div className="mx-auto px-6 sm:px-12 ">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center">
              {/* Mobile menu button*/}
              <div className="flex flex-shrink-0 items-center">
                <Image
                  className="h-8 w-auto sm:h-12 "
                  src="/logo.png"
                  alt="Your Company"
                  width={198}
                  height={64}
                />
              </div>
              <button
                id="burger"
                className="relative inline-flex items-center justify-center rounded-md p-2 pl-2 text-[#1E1E1E] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white "
                onClick={useMenu}
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                {openMain || openSecond ? (
                  <XMarkIcon
                    className="block h-6 w-6 md:h-8 md:w-8"
                    aria-hidden="true"
                  />
                ) : (
                  <Bars3Icon
                    className="block h-6 w-6 md:h-8 md:w-8"
                    aria-hidden="true"
                  />
                )}
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"></div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <a
                className="relative"
                href="https://lobstr.co/trade/GSS:GDPG3WDC7UONHLOPTTZLWVA7TZEMFOGCQGNMAPNGWL6YSPRH6MYB7X5P"
              >
                <div className="w-full border-stone-900 pl-4 text-sm sm:border-l sm:pl-8 sm:text-base md:text-lg">
                  Asset Wallet
                </div>
              </a>

              {/* Profile dropdown */}
            </div>
          </div>
        </div>

        <AnimatePresence>
          {openMain && (
            <motion.div
              initial={{ y: -70, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: 'just', duration: 0.5 }}
              className=" absolute z-50 w-full"
            >
              <div className="absolute z-50 w-[18rem] transition-opacity">
                <div className="flex w-full flex-col justify-center  space-y-1 divide-y scroll-smooth bg-white px-2 pb-3 pt-2 text-sm sm:max-w-[18rem] sm:text-base">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={classNames(' mx-auto inline-flex w-full py-3')}
                      aria-current={item.current ? 'page' : undefined}
                      onClick={
                        item.withIcon
                          ? () => {
                              setOpenSecond((value) => !value);
                              isMobile && setOpenMain((value) => !value);
                            }
                          : () => {}
                      }
                    >
                      {item.name}
                      {item.withIcon && (
                        <div className="my-auto ml-auto mr-2 h-auto w-2">
                          <svg
                            width="16"
                            height="14"
                            viewBox="0 0 16 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g id="simple-line-icons:arrow-up">
                              <path
                                id="Vector"
                                d="M4.25936 0.112122C4.12498 0.112122 3.98747 0.158606 3.88434 0.24884C3.67809 0.429309 3.67809 0.724622 3.88434 0.90509L10.9437 7.08204L3.98747 13.1688C3.78122 13.3492 3.78122 13.6445 3.98747 13.825C4.19372 14.0055 4.53122 14.0055 4.73747 13.825L12.0718 7.41017C12.2781 7.2297 12.2781 6.93439 12.0718 6.75392L4.63747 0.24884C4.53122 0.155872 4.39686 0.112122 4.25936 0.112122Z"
                                fill="#1E1E1E"
                              />
                            </g>
                          </svg>
                        </div>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {openSecond && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ type: 'just', duration: 0.5 }}
              className=" absolute z-50 w-full sm:z-40"
            >
              <div className=" absolute z-[60] w-full md:z-40 md:pl-[calc(16rem)]">
                <div className="flex flex-col justify-center space-y-1  divide-y bg-white px-2 pb-3 pt-2 text-sm sm:ml-8 sm:max-w-[18rem] sm:text-base">
                  {dropdownNavigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(' mx-auto inline-flex w-full py-3')}
                      aria-current={item.current ? 'page' : undefined}
                      onClick={() => setOpenSecond(true)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    </nav>
  );
}
