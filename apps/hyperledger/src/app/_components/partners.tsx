import Marquee from "react-fast-marquee";
import Image from "next/image";
import { partners } from "~/lib/constants";

export default function Partners() {
  return (
    <div className="py-2" id="benefits">
      <Marquee className="" autoFill>
        <div className="inline-flex gap-x-4">
          {partners.map((partner, index) => {
            if (index === 0)
              return (
                <div className="ml-4">
                  <PartnerCard key={index} image={partner.image} />
                </div>
              );
            return <PartnerCard key={index} image={partner.image} />;
          })}
        </div>
      </Marquee>
      <Marquee className="" delay={2} autoFill>
        <div className="inline-flex gap-x-4">
          {partners
            .slice()
            .reverse()
            .map((partner, index) => {
              if (index === 0)
                return (
                  <div className="ml-4">
                    <PartnerCard key={index} image={partner.image} />
                  </div>
                );
              return <PartnerCard key={index} image={partner.image} />;
            })}
        </div>
      </Marquee>
    </div>
  );
}

function PartnerCard({ image }: { image: string }) {
  return (
    <div className="py-1">
      <div className="flex h-36 w-64 items-center justify-center rounded-xl border border-gray-200 bg-white p-6 shadow-md ">
        <Image
          src={image}
          alt=""
          width={300}
          height={200}
          className=" max-h-24 w-auto"
        />
      </div>
    </div>
  );
}
