import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
export function About() {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  const handleVisibilityChange = (visible: boolean) => {
    if (visible && !isVisible) {
      setIsVisible(true);
      controls.start('visible');
    }
  };

  useEffect(() => {
    controls.start('hidden');
  }, [controls]);
  return (
    <div className="py-24">
      <div className="mx-auto mb-10 w-16 border-t-2 border-slate-800 md:w-28"></div>
      <h2 className="mb-8 text-center text-2xl font-medium md:text-4xl">
        About Us
      </h2>
      <div className="flex flex-col gap-y-16">
        <VisibilitySensor onChange={handleVisibilityChange} partialVisibility>
          <motion.div
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            transition={{ duration: 2 }}
            id="about_us"
          >
            <AboutUsCard
              right={true}
              image="/about1.png"
              head="About Goldman Stellar"
              content="Embracing Innovation on the Stellar Blockchain
At Goldman Sachs Stellar, we continually strive to stay at the forefront of financial innovation, providing our clients with cutting-edge solutions and opportunities. In line with our commitment to embracing emerging technologies, we are proud to announce the listing of select assets on the Stellar blockchain."
            />
          </motion.div>
        </VisibilitySensor>
        <VisibilitySensor onChange={handleVisibilityChange} partialVisibility>
          <motion.div
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            transition={{ duration: 2 }}
          >
            <AboutUsCard
              right={false}
              image="/about2.png"
              head="Enhancing Accessibility and Efficiency"
              content="By leveraging the Stellar blockchain, we aim to enhance accessibility and efficiency in the financial markets. This move reflects our dedication to providing our clients with diverse and innovative investment opportunities while maintaining the highest standards of security and transparency."
            />
          </motion.div>
        </VisibilitySensor>
        <VisibilitySensor onChange={handleVisibilityChange} partialVisibility>
          <motion.div
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            transition={{ duration: 2 }}
          >
            <AboutUsCard
              right={true}
              image="/about3.png"
              head="Our Commitment to Responsible Finance"
              content="Goldman Sachs Stellar remains committed to responsible financial practices, and our venture into blockchain technology is a testament to our belief in its potential to transform the financial landscape positively. We are excited about the possibilities this integration brings and look forward to exploring new avenues for growth and collaboration in the decentralized finance (DeFi) space."
            />
          </motion.div>
        </VisibilitySensor>
      </div>
    </div>
  );
}

type AboutUsProps = {
  image: string;
  head: string;
  content: string;
  right: boolean;
};

export function AboutUsCard({ image, head, content, right }: AboutUsProps) {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-y-4 px-8 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-6 lg:px-32">
      {right ? (
        <div className="flex w-full flex-col gap-y-2 lg:col-start-1">
          <h3 className="text-3xl font-semibold">{head}</h3>
          <p className="my-auto h-full w-full text-wrap text-sm leading-normal lg:text-base">
            {content}
          </p>
        </div>
      ) : null}

      <Image
        src={image}
        width={400}
        height={200}
        alt=""
        className={
          right
            ? 'h-auto max-h-[220px] w-full object-cover lg:col-start-2'
            : 'h-auto max-h-[220px] w-full object-cover lg:col-start-1'
        }
      />

      {!right ? (
        <div className="flex w-full flex-col gap-y-2 lg:col-start-2">
          <h3 className="text-3xl font-semibold">{head}</h3>
          <p className="my-auto h-full w-full text-sm leading-normal lg:text-base">
            {content}
          </p>
        </div>
      ) : null}
    </div>
  );
}
