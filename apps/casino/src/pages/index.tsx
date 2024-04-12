import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Hero } from "~/components/hero";
import Image from "next/image";
import logo from "~/../public/logo.png";
import { inter } from "./_app";
import { type InferGetStaticPropsType } from "next";
import fs from "fs";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import H1 from "~/components/h1";
import H2 from "~/components/h2";
import P from "~/components/p";

export type ConfigFile = {
  navigation: {
    name: string;
    href: string;
  }[];
  list: {
    title: string;
    description: string;
    rating: number;
    link: string;
    info: string;
  }[];
};

export default function Home({
  source,
  config,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { navigation, list } = config;
  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="absolute">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image className="h-8 w-auto" src={logo} alt="Logo" />
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
          <div className="hidden w-full justify-center lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>
        <Dialog
          as="div"
          className={`font-sans lg:hidden ${inter.variable}`}
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Casino top</span>
                <Image className="h-8 w-auto" src={logo} alt="Logo" />
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
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
      <Hero list={list} />
      <div className="mx-8 mt-12 flex max-w-4xl justify-center lg:mx-auto">
        <div className="" id="content">
          <SiteContent source={source} config={config} />
        </div>
      </div>
    </div>
  );
}

function SiteContent({
  source,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <MDXRemote
      {...source}
      components={{
        h1: H1,
        h2: H2,
        p: P,
      }}
    />
  );
}

export async function getStaticProps() {
  // retrieve the MDX blog post file associated
  // with the specified slug parameter
  const configFile = fs.readFileSync(`config.json`);
  const postFile = fs.readFileSync(`src/components/page.mdx`);

  // read the MDX serialized content along with the frontmatter
  // from the .mdx blog post file
  const config = JSON.parse(configFile.toString("utf-8")) as ConfigFile;

  const mdxSource = await serialize(postFile);
  return {
    props: {
      source: mdxSource,
      config,
    },
    // enable ISR
    revalidate: 60,
  };
}
