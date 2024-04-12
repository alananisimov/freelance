import { StarIcon } from "@heroicons/react/20/solid";
import { type StaticImageData } from "next/image";
import Image from "next/image";
interface CasinoCardProps {
  image: string | StaticImageData;
  title: string;
  content: string;
  link: string;
  rating: number;
}
export function CasinoCard({
  image,
  title,
  content,
  link,
  rating,
}: CasinoCardProps) {
  return (
    <>
      <div className="mx-auto flex w-full max-w-lg flex-col rounded-lg border bg-white p-4">
        <div className="grid grid-cols-3 gap-x-3 md:grid-cols-1 md:justify-center">
          <div className=" col-span-1 md:hidden">
            <Image
              src={image}
              alt="casino"
              className="h-full rounded-md object-cover"
            />
          </div>
          <div className="col-span-2 flex flex-col gap-y-2 md:items-center md:text-center">
            <div className="flex flex-col text-sm">
              <h1 className="text-lg font-semibold md:text-2xl">{title}</h1>
              <span className="mb-3 hidden items-center justify-center gap-x-2 md:inline-flex">
                <div className="inline-flex">
                  {Array.from({ length: rating }, (_, index) => (
                    <StarIcon key={index} className="size-4 fill-yellow-500" />
                  ))}
                  {Array.from({ length: 5 - rating }, (_, index) => (
                    <StarIcon key={index} className="size-4 fill-gray-500" />
                  ))}
                </div>
              </span>
              {content}
            </div>
            <div className=" mt-auto flex items-center gap-x-3">
              <a
                href={link}
                className=" w-fit rounded-md bg-yellow-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
              >
                Перейти
              </a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Подробнее <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
