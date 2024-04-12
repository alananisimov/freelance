import Image from "next/image";
import blob from "~/../public/blob.png";
interface AboutCardProps {
  title: string;
  text: string;
}
export default function AboutCard({ title, text }: AboutCardProps) {
  return (
    <div className="flex max-w-lg flex-row gap-x-6">
      <div>
        <Image src={blob} alt="blob" />
      </div>
      <div className="mt-4 flex flex-1 flex-col gap-y-4">
        <h2 className="text-3xl font-bold">{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}
