import Image from "next/image";
import img from "~/../public/musk.png";
export default function Musk({ className }: { className: string }) {
  return <Image src={img} alt="" className={className} />;
}
