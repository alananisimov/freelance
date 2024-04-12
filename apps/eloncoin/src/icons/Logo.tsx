/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Image from "next/image";
import img from "~/../public/logomain.svg";
export default function Logo({ className }: { className: string }) {
  return <Image src={img} alt="" className={className} priority />;
}
