import { Fragment, useState } from 'react';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import { products } from '@/constants';
import { classNames } from '@/utils';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-10 lg:px-8"
        aria-label="Global"
      >
        <div className="absolute left-4 md:left-8 lg:left-24">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">ZIRU</span>
            <Image
              src={'/icon.png'}
              alt="logo_full"
              width={128}
              height={48}
              className="h-16 w-auto md:h-20"
            />
          </a>
        </div>
        <div className="ml-auto flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="mx-auto hidden font-medium lg:flex lg:gap-x-8">
          <a
            href="https://stellarterm.com/buy-crypto?code=xlm"
            className="text-sm leading-6 text-gray-900"
          >
            BUY XLM
          </a>
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm leading-6 text-gray-900 focus:outline-none">
              BUY ZIRU
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-30 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex-auto">
                        <a href={item.href} className="block text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <a
            href="https://stellar.expert/explorer/public/asset/ZIRU-GBMY5L5PQRVIDNGDPIPQDUZYINXRFMSVXJ7QDQD5YVC7VR2ZMSE762FU"
            className="text-sm leading-6 text-gray-900"
          >
            TOKEN EXPLORER
          </a>
          <a
            href="https://stellar.expert/explorer/public/account/GAWGVY5X5CZHIPH2TJWSZRTDNZ565PM766HQ35KN5O4ZZ3YNLREDF567"
            className="text-sm leading-6 text-gray-900"
          >
            PAYOUT
          </a>
          <a
            href="https://t.me/ziruwealth"
            className="text-sm leading-6 text-gray-900"
          >
            OUR TELEGRAM
          </a>
          <a href="#about" className="text-sm leading-6 text-gray-900">
            ABOUT US
          </a>
        </Popover.Group>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                src={'/icon.png'}
                alt="logo_full"
                width={128}
                height={48}
                className="h-12 w-auto md:h-20"
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="https://stellarterm.com/buy-crypto?code=xlm"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-gray-900 hover:bg-gray-50"
                >
                  BUY XLM
                </a>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="font flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base leading-7 text-gray-900 hover:bg-gray-50">
                        BUY ZIRU
                        <ChevronDownIcon
                          className={classNames(
                            open ? 'rotate-180' : '',
                            'h-5 w-5 flex-none',
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {...products.map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="font block rounded-lg py-2 pl-6 pr-3 text-sm leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <a
                  href="https://stellar.expert/explorer/public/asset/ZIRU-GBMY5L5PQRVIDNGDPIPQDUZYINXRFMSVXJ7QDQD5YVC7VR2ZMSE762FU"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-gray-900 hover:bg-gray-50"
                >
                  TOKEN EXPLORER
                </a>
                <a
                  href="https://stellar.expert/explorer/public/account/GAWGVY5X5CZHIPH2TJWSZRTDNZ565PM766HQ35KN5O4ZZ3YNLREDF567"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-gray-900 hover:bg-gray-50"
                >
                  PAYOUT
                </a>
                <a
                  href="https://t.me/ziruwealth"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-gray-900 hover:bg-gray-50"
                >
                  OUR TELEGRAM
                </a>
                <a
                  href="#about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-gray-900 hover:bg-gray-50"
                >
                  ABOUT US
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
