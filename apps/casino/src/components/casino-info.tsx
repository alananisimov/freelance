import { StarIcon } from "@heroicons/react/20/solid";

interface CasinoInfoProps {
  content: string;
  rating: number;
}
export function CasinoInfo({ content, rating }: CasinoInfoProps) {
  return (
    <div className="mx-auto flex max-w-lg flex-col gap-y-3 px-4 md:hidden">
      <div className="gap-y-1">
        <h2 className="text-xl font-semibold">Номер 1</h2>
        <span className="inline-flex items-center gap-x-2">
          Рейтинг:{" "}
          <div className="inline-flex">
            {Array.from({ length: rating }, (_, index) => (
              <StarIcon key={index} className="size-4 fill-yellow-500" />
            ))}
            {Array.from({ length: 5 - rating }, (_, index) => (
              <StarIcon key={index} className="size-4 fill-gray-500" />
            ))}
          </div>
        </span>
        <p className="text-sm font-light">{content}</p>
      </div>
      <p></p>
    </div>
  );
}
