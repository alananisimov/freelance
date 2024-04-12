import Image from "next/image";

export default function WhereToBuy() {
  return (
    <div className="mt-16 hidden flex-row gap-x-16 sm:flex">
      <div className="flex flex-col justify-between">
        <div className="flex flex-col">
          <h1 className="text-3xl font-semibold">WHERE TO BUY</h1>
          <span className="text-lg">A Open Platform for our Participators</span>
        </div>
        <Image
          src={"/trump_make.svg"}
          alt=""
          width={400}
          priority
          height={200}
          className="h-24 w-auto md:h-32"
        />
      </div>
      <div className="flex flex-1 flex-col gap-y-2 text-xs">
        <div className="rounded-xl border border-white/30 bg-[#818181]/[0.08] p-5 text-white/50">
          <span>
            Welcome to the exciting world of QTT tokens, a cutting-edge digital
            asset at the forefront of technological innovation.
          </span>
        </div>
        <div className="rounded-xl border border-white/30 bg-[#818181]/[0.08] p-5 text-white/50">
          <span>
            Renowned platforms such as StellarTerm, Lobstr, and Scopuly are just
            a few examples where you can confidently buy and trade QTT tokens.
          </span>
        </div>
        <div className="rounded-xl border border-white/30 bg-[#818181]/[0.08] p-5 text-white/50">
          <span>
            For those who prefer a decentralized approach, explore decentralized
            finance (DeFi) platforms like Uniswap or SushiSwap. These platforms
            operate on blockchain technology, offering a peer-to-peer trading
            experience. By connecting your digital wallet to these DeFi
            platforms, you can buy and exchange QTT tokens directly, maintaining
            control over your assets while contributing to the decentralized
            ecosystem.
          </span>
        </div>
        <div className="rounded-xl border border-white/30 bg-[#818181]/[0.08] p-5 text-white/50">
          <span>
            Stay informed and engaged by participating in the QTT community.
            Check out official social media channels, forums, and the QTT
            project website for announcements on where to buy QTT tokens.
            Community discussions often highlight preferred platforms and
            provide valuable insights into the best practices for acquiring and
            managing QTT tokens. By staying connected, you not only gain access
            to the latest information but also become part of a vibrant
            community passionate about the success of the QTT project.
          </span>
        </div>
      </div>
    </div>
  );
}
