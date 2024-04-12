import image from "~/../public/casino.jpg";
import { CasinoCard } from "./casino-card";
import { CasinoInfo } from "./casino-info";
import { type ConfigFile } from "~/pages";

export function Hero({ list }: { list: ConfigFile["list"] }) {
  return (
    <div className="relative isolate px-6  lg:px-8">
      <div className="mx-auto max-w-4xl pb-16 pt-32 sm:pt-28 lg:pt-32">
        <div className="hidden sm:mb-4 sm:flex sm:justify-center">
          <a
            href="#content"
            className="relative inline-flex items-center justify-center gap-x-1 rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
          >
            Подробнее{" "}
            <div className="font-semibold text-indigo-600">
              <span className="absolute inset-0" aria-hidden="true" />
              <span aria-hidden="true">&rarr;</span>
            </div>
          </a>
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Лучшие онлайн казино
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-6">
          {list.map((casino) => (
            <div className="space-y-3" key={casino.title}>
              <CasinoCard
                title={casino.title}
                content={casino.description}
                image={image}
                rating={casino.rating}
                link={casino.link}
              />
              <CasinoInfo content={casino.info} rating={casino.rating} />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          />
        </svg>
      </div>
    </div>
  );
}
