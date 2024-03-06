import React from "react";
import DocLayout from "../DocLayout";
import Reveal from "@/components/Reveal";
import CodeTemplate from "@/components/CodeTemplate";
import DemoTemplate from "@/components/DemoTemplate";
import RevealDemo from "@/components/demos/RevealDemo";
import RevealDemo2 from "@/components/demos/RevealDemo2";

const RevealComponent = () => {
  return (
    <DocLayout>
      <div className="container mx-auto py-8 relative">
        <div className="flex min-w-full flex-col md:flex-row md:justify-between mb-4">
          <Reveal>
            <h1 className="text-4xl font-bold ">Reveal</h1>
          </Reveal>
        </div>
        <Reveal>
          <section className="mb-8">
            <h3 className=" text-primary text-2xl font-semibold mb-4">
              Overview
            </h3>
            <p>
              The Reveal component utilizes the Framer Motion library for
              animation and the React Intersection Observer hook to detect when
              the component comes into view. It provides a smooth transition by
              gradually revealing or moving the child elements based on the
              specified direction, duration and delay. That's tripple D's right
              there! I use this component and variations similar, accross this
              entire site!
            </p>
            <DemoTemplate
              title="Demo"
              code={`<div className="container p-5 flex gap-16">
<Reveal delay={1}>
  <div className="h-[380px] w-[210px] bg-zinc-100 border-gradient flex flex-col justify-center items-center p-2">
    <Reveal direction="down" delay={1.2}>
      <h1 className=" opacity-0 md:opacity-100 text-4xl font-bold my-2">
        JR
        <span className="bg-black text-primary">ui</span>
      </h1>
    </Reveal>
    <Reveal direction="left" delay={1.4}>
      <Image
        height={200}
        width={200}
        alt="JRui the mascot!"
        src={Jrui}
        className="my-2"
      ></Image>
    </Reveal>
    <Reveal direction="up" delay={1.6}>
      <p className=" font-semibold text-center my-2 ">
        Say hello to Jrui! He's the mascot of these parts!
      </p>
    </Reveal>
  </div>
</Reveal>

<Reveal duration={0.25} delay={2}>
  <div className="h-[380px] w-[210px] bg-zinc-100 border-gradient flex flex-col justify-center items-center p-2">
    <Reveal direction="left" duration={0.75} delay={2.2}>
      <h1 className=" opacity-0 md:opacity-100 text-4xl font-bold my-2">
        SC
        <span className="bg-black text-primary">ooty</span>
      </h1>
    </Reveal>
    <Reveal duration={0.15} direction="right" delay={2.4}>
      <Image
        height={200}
        width={200}
        alt="JRui the mascot!"
        src={Scooty}
        className="my-2"
      ></Image>
    </Reveal>
    <Reveal duration={1.25} direction="left" delay={2.6}>
      <p className=" font-semibold text-center my-2 ">
        Say hello to Scooty! She's Jrui's step-sis!
      </p>
    </Reveal>
  </div>
</Reveal>
<Reveal duration={1} delay={3}>
  <div className="h-[380px] w-[210px] bg-zinc-100 border-gradient flex flex-col justify-center items-center p-2">
    <Reveal duration={1.5} direction="right" delay={3.2}>
      <h1 className=" opacity-0 md:opacity-100 text-4xl font-bold my-2">
        BO
        <span className="bg-black text-primary">oty</span>
      </h1>
    </Reveal>
    <Reveal duration={1.8} direction="right" delay={3.4}>
      <Image
        height={200}
        width={200}
        alt="JRui the mascot!"
        src={Booty}
        className="my-2"
      ></Image>
    </Reveal>
    <Reveal duration={2} direction="right" delay={3.6}>
      <p className=" font-semibold text-center my-2 ">
        Say hello to Booty! He's Jrui's step-bro!
      </p>
    </Reveal>
  </div>
</Reveal>
</div>
`}
            >
              <RevealDemo />
            </DemoTemplate>
          </section>
        </Reveal>
        <Reveal>
          <section className="mb-8">
            <h3 className="text-primary text-2xl font-semibold mb-4">Props</h3>
            <p className="mb-4">
              The `Reveal` component accepts the following props for controlling
              its animation behavior:
            </p>
            <ul>
              <li>
                <strong>
                  direction?: "up" | "down" | "left" | "right" (default: "up"){" "}
                  <br />
                </strong>{" "}
                This prop determines the direction from which the component will
                be revealed. Possible values: "up", "down", "left", or "right".
              </li>
              <li>
                <strong>
                  delay?: number (default: 0.2) <br />
                </strong>{" "}
                Specifies the delay before the animation starts after the
                component comes into view. Measured in seconds.
              </li>
              <li>
                <strong>
                  duration?: number (default: 0.5) <br />
                </strong>{" "}
                Determines the duration of the animation. Measured in seconds.
              </li>
              <li>
                <strong>children: ReactNode:</strong>
                <br /> Required prop representing the content that you want to
                animate.
              </li>
              <li>
                <strong>className?: string:</strong> <br /> Prop for adding
                custom classes to the animated component for styling purposes.
              </li>
            </ul>
            <DemoTemplate
              title="Props Demo"
              code={`<div className="container p-5 flex gap-16">
<Reveal delay={1}>
  <div className="h-[380px] w-[210px] bg-zinc-100 border-gradient flex flex-col justify-center items-center p-2">
    <Reveal direction="down" delay={1.2}>
      <h1 className=" opacity-0 md:opacity-100 text-4xl font-bold my-2">
        JR
        <span className="bg-black text-primary">ui</span>
      </h1>
    </Reveal>
    <Reveal direction="left" delay={1.4}>
      <Image
        height={200}
        width={200}
        alt="JRui the mascot!"
        src={Jrui}
        className="my-2"
      ></Image>
    </Reveal>
    <Reveal direction="up" delay={1.6}>
      <p className=" font-semibold text-center my-2 ">
        Say hello to Jrui! He's the mascot of these parts!
      </p>
    </Reveal>
  </div>
</Reveal>

<Reveal duration={0.25} delay={2}>
  <div className="h-[380px] w-[210px] bg-zinc-100 border-gradient flex flex-col justify-center items-center p-2">
    <Reveal direction="left" duration={0.75} delay={2.2}>
      <h1 className=" opacity-0 md:opacity-100 text-4xl font-bold my-2">
        SC
        <span className="bg-black text-primary">ooty</span>
      </h1>
    </Reveal>
    <Reveal duration={0.15} direction="right" delay={2.4}>
      <Image
        height={200}
        width={200}
        alt="JRui the mascot!"
        src={Scooty}
        className="my-2"
      ></Image>
    </Reveal>
    <Reveal duration={1.25} direction="left" delay={2.6}>
      <p className=" font-semibold text-center my-2 ">
        Say hello to Scooty! She's Jrui's step-sis!
      </p>
    </Reveal>
  </div>
</Reveal>
<Reveal duration={1} delay={3}>
  <div className="h-[380px] w-[210px] bg-zinc-100 border-gradient flex flex-col justify-center items-center p-2">
    <Reveal duration={1.5} direction="right" delay={3.2}>
      <h1 className=" opacity-0 md:opacity-100 text-4xl font-bold my-2">
        BO
        <span className="bg-black text-primary">oty</span>
      </h1>
    </Reveal>
    <Reveal duration={1.8} direction="right" delay={3.4}>
      <Image
        height={200}
        width={200}
        alt="JRui the mascot!"
        src={Booty}
        className="my-2"
      ></Image>
    </Reveal>
    <Reveal duration={2} direction="right" delay={3.6}>
      <p className=" font-semibold text-center my-2 ">
        Say hello to Booty! He's Jrui's step-bro!
      </p>
    </Reveal>
  </div>
</Reveal>
</div>
`}
            >
              <RevealDemo2></RevealDemo2>
            </DemoTemplate>
          </section>
        </Reveal>
        <Reveal>
          <section className="mb-8">
            <h3 className="text-primary text-2xl font-semibold mb-4">
              Dependencies
            </h3>
            <p>
              Ensure you have the following dependencies installed in your
              project:
            </p>
            <ul>
              <li>
                The `Reveal` component utilizes Framer Motion for animations.
                Install it with:
                <pre className="w-max bg-gray-200 p-4 rounded-md overflow-x-auto max-w-[90dvw]">
                  npm install framer-motion
                </pre>{" "}
              </li>
              <li>
                The `useInView` hook, used for detecting when the component is
                in view, requires this dependency. Install it with:
                <pre className="w-max bg-gray-200 p-4 rounded-md overflow-x-auto max-w-[90dvw]">
                  npm install react-intersection-observer
                </pre>{" "}
              </li>
            </ul>
          </section>
        </Reveal>
        <Reveal>
          <section className="mb-8">
            <h3 className="text-primary text-2xl font-semibold mb-4">
              Component File
            </h3>
            <CodeTemplate
              fileName="Components > Reveal.tsx"
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
              Example Use Case
            </h3>
            <CodeTemplate
              fileName="app > Example.tsx"
              code={`import React from "react";
import Reveal from "./Reveal"; // Adjust the import path based on your project structure

const Example: React.FC = () => {
  return (
    <div>
      <h1>Your Content Before Reveal</h1>

      {/* Example with default settings (up direction, default delay) */}
      <Reveal>
        <p>This content will be revealed with default settings.</p>
      </Reveal>

      {/* Example with custom direction (right) and delay */}
      <Reveal direction="right" delay={0.5}>
        <p>This content will be revealed from the right with a delay of 0.5 seconds.</p>
      </Reveal>

      {/* Example with custom direction (down) and no delay */}
      <Reveal direction="down">
        <p>This content will be revealed from the bottom with no delay.</p>
      </Reveal>

      {/* Example with custom direction (left), duration and custom class name */}
      <Reveal duration={1} direction="left" className="ligma-nutz">
        <p>This content will be revealed from the left with default delay.</p>
      </Reveal>

      <h1>Your Content After Reveal</h1>
    </div>
  );
};

export default Example;
              
`}
            />
          </section>
        </Reveal>
      </div>
    </DocLayout>
  );
};

export default RevealComponent;
