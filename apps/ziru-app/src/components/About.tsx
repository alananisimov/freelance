/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import Cube from '../../public/cube.png';
export default function About() {
  return (
    <div className="z-10 my-56" id="about">
      <div className=" mx-auto w-16 border-t border-[rgb(216,216,228)]"></div>
      <div className="mt-8 flex flex-col items-center justify-center">
        <span className="text-2xl font-bold text-indigo-950 md:text-3xl">
          About Ziru: Redefining Finance on Stellar
        </span>
        <div className="mt-20 grid max-w-7xl grid-cols-1 gap-x-10 px-10 lg:grid-cols-3">
          <div className="flex flex-col gap-y-10">
            <div className="flex w-full flex-row justify-between gap-x-4">
              <div className="flex flex-col gap-y-4">
                <div className="text-2xl font-semibold">Our Mission:</div>
                <div>
                  At Ziru, we're on a mission to transform the financial
                  landscape through innovation and inclusivity. We believe in
                  empowering individuals globally to access efficient and
                  cutting-edge financial services.
                </div>
              </div>
              <Image src={Cube} alt="" className="h-12 w-12" />
            </div>
            <div className="flex w-full flex-row justify-between gap-x-4">
              <div className="flex flex-col gap-y-4">
                <div className="text-2xl font-semibold">Stellar Advantage:</div>
                <div>
                  Ziru is strategically built on the Stellar blockchain for its
                  unparalleled speed, decentralized exchange integration, and
                  global interoperability. Stellar's smart contract
                  functionality complements our vision for secure and efficient
                  financial solutions.
                </div>
              </div>
              <Image src={Cube} alt="" className="h-12 w-12" />
            </div>
          </div>
          <div className="my-auto">
            <Image
              src={'/3d.png'}
              height={400}
              width={400}
              alt=""
              className="hidden h-auto w-full lg:flex"
            />
          </div>
          <div className="mt-12 flex flex-col gap-y-10 lg:mt-0">
            <div className="flex w-full flex-row justify-between gap-x-4">
              <Image src={Cube} alt="" className="h-12 w-12" />
              <div className="flex flex-col gap-y-4">
                <div className="text-2xl font-semibold">Community-Driven:</div>
                <div>
                  Ziru thrives on collaboration. Our community, like the Stellar
                  ecosystem we're part of, shares our passion for reshaping
                  finance. Together, we're building a dynamic platform that
                  transcends boundaries.
                </div>
              </div>
            </div>
            <div className="flex w-full flex-row justify-between gap-x-4">
              <Image src={Cube} alt="" className="h-12 w-12" />
              <div className="flex flex-col gap-y-4">
                <div className="text-2xl font-semibold">Welcome to Ziru:</div>
                <div>
                  Join us on this exciting journey where financial innovation
                  meets simplicity. Ziru is not just a platform; it's a global
                  movement toward a more inclusive and accessible financial
                  future. Welcome to the forefront of finance — welcome to Ziru.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
