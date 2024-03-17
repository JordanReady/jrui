import React from "react";
import DocLayout from "@/app/docs/DocLayout";
import Reveal from "@/components/Reveal";
import CodeTemplate from "@/components/CodeTemplate";
import SectionTemplate from "@/components/SectionTemplate";
import Desktop from "@/imgs/HeroDesktop.png";
import Mobile from "@/imgs/HeroMobile.png";

const Hero = () => {
  return (
    <DocLayout>
      <div className="container mx-auto py-8 relative">
        <div className="flex min-w-full flex-col md:flex-row md:justify-between mb-4">
          <Reveal>
            <h1 className="text-4xl font-bold ">Hero Sections</h1>
          </Reveal>
        </div>
        <Reveal>
          <section className="mb-8">
            <h3 className=" text-primary text-2xl font-semibold mb-4">
              Overview
            </h3>
            <p>
              The Hero section is a customizable introductory component designed
              to catch the user's attention and set the tone for the
              application. It includes placeholder content that can be easily
              modified to suit the developer's specific needs. The section
              features a title, description, call-to-action buttons, and an
              image, all of which can be tailored to reflect the developer's
              branding and messaging. Additionally, the use of the Reveal
              component adds dynamic animations to enhance user engagement.
              Developers can easily integrate this section into their
              applications and customize it with their own content and styling
              preferences.
            </p>
          </section>
        </Reveal>
        <Reveal>
          <SectionTemplate desktopImg={Desktop} mobileImg={[Mobile]} />
        </Reveal>
        <Reveal>
          <section className="mb-8">
            <h3 className="text-primary text-2xl font-semibold mb-4">
              Component File
            </h3>
            <p>
              This is an optional component that wraps some of the elements in
              the hero section. You can either use this component by adding it
              to your project, or you can get rid of the `Reveal` wrappers in
              the hero section.
            </p>
            <CodeTemplate
              fileName="components > Reveal.tsx"
              code={`"use client";
import React, { FC, ReactNode, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface RevealProps {
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  children: ReactNode;
  className?: string;
}

const Reveal: FC<RevealProps> = ({
  direction = "up",
  delay = 0.2,
  duration = 0.5,
  children,
  className,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        x: 0,
        transition: { duration: duration, delay },
      });
    }
  }, [controls, inView, delay]);

  // Set initial styles before the animation
  const initialStyles = {
    opacity: 0,
    y: direction === "up" ? 20 : direction === "down" ? -20 : 0,
    x: direction === "left" ? 20 : direction === "right" ? -20 : 0,
  };

  return (
    <motion.div
      className={className}
      ref={ref}
      initial={initialStyles}
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
              
              
`}
            />
          </section>
        </Reveal>
        <Reveal>
          <section className="mb-8">
            <h3 className="text-primary text-2xl font-semibold mb-4">
              Section File
            </h3>
            <p>
              This is the section file for the Hero section that utilizes the
              `Reveal` component.
            </p>
            <CodeTemplate
              fileName="components > sections > Hero.tsx"
              code={`import React from "react";
import Reveal from "../components/Reveal";
import HeroImg from "@/imgs/JRuiLogo.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="container h-[80dvh] w-full grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8 items-center">
      <div className="text-center md:text-left">
        <Reveal direction="up">
          <h1 className=" text-6xl sm:text-9xl font-bold mb-4">
            JR
            <span className="bg-black text-primary font-normal">ui</span>
          </h1>
        </Reveal>
        <Reveal direction="left" delay={0.6}>
          <p className="text-sm md:text-base lg:text-lg mb-4">
            Introducing Jrui, the lovable mascot of our component library! With
            a penchant for mischief, Jrui keeps us on our toes, from turning CSS
            into spaghetti code to causing bugs that only appear on Fridays. But
            amidst the chaos, Jrui brings humor and charm to our coding
            adventures. So when you need a laugh or a reminder that coding is
            never dull, just look to Jrui!
          </p>
        </Reveal>

        <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
          <Reveal delay={0.8}>
            <button className="border-gradient btn-hover py-2 px-4 ">
              Ooo ooo click me!
            </button>
          </Reveal>
          <Reveal delay={0.8}>
            <button className="border-gradient btn-hover py-2 px-4 ">
              No click me!
            </button>
          </Reveal>
        </div>
      </div>
      <div>
        <Reveal className="flex justify-center" duration={1} delay={0}>
          <Image
            placeholder="blur"
            objectFit="fill"
            priority
            className="w-[300px] md:w-[420px]"
            src={HeroImg}
            alt="Jordan Ready AI created animated logo"
          />
        </Reveal>
      </div>
    </div>
  );
};

export default Hero;              
`}
            />
          </section>
        </Reveal>
      </div>
    </DocLayout>
  );
};
export default Hero;
