import { type HTMLAttributes } from "react";
import AboutCard from "./about-card";
import classNames from "classnames";

export default function About(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={classNames(props.className, "flex flex-col gap-y-10 px-10")}
    >
      <AboutCard
        title="Innovative Origin"
        text="Elon Musk Coin emerges as a pioneering digital asset conceived by Elon Musk, leveraging the robust infrastructure of the Stellar blockchain. This collaboration signifies a commitment to
cutting-edge technology and sets the
stage for transformative
advancements in the digital asset space."
      />
      <AboutCard
        title="Decentralized Finance"
        text="Positioned at the forefront of decentralized finance, Elon Musk Coin unlocks new dimensions in financial accessibility. By harnessing the power of decentralized systems, we aim to redefine traditional financial paradigms, making financial services more inclusive and available to a global audience."
      />
      <AboutCard
        title="Sustainable Vision"
        text="Committed to sustainability, Elon Musk Coin aligns with Elon Musk's vision for a greener future. Beyond financial
        innovation, our focus extends to environmental
        consciousness, fostering sustainable practices within the cryptocurrency space."
      />
    </div>
  );
}
