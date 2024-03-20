import React from "react";
import DocLayout from "../DocLayout";
import Reveal from "@/components/Reveal";
import CodeTemplate from "@/components/CodeTemplate";
import DemoTemplate from "@/components/DemoTemplate";
import TooltipDemo from "@/components/demos/TooltipDemo";
import TooltipDemo2 from "@/components/demos/TooltipDemo2";
import CLI from "@/components/CLI";

const RevealComponent = () => {
  return (
    <DocLayout>
      <div className="container mx-auto py-8 relative">
        <div className="flex min-w-full flex-col md:flex-row md:justify-between mb-4">
          <Reveal>
            <h1 className="text-4xl font-bold ">Tooltip</h1>
          </Reveal>
        </div>
        <Reveal>
          <section className="mb-8">
            <h3 className=" text-primary text-2xl font-semibold mb-4">
              Overview
            </h3>
            <p>
              The Tooltip component provides a simple and customizable way to
              display helpful tooltips when users hover over certain elements on
              a webpage. These tooltips can contain informative text, providing
              additional context or explanations for UI elements. The Tooltip
              component is designed to be flexible, allowing developers to
              specify various properties such as the tooltip's width, offset,
              animation direction, and animation duration. With its intuitive
              API and straightforward usage, the Tooltip component enhances user
              experience by making interactions more informative and intuitive.
            </p>
            <Reveal>
              <DemoTemplate
                title="Demo"
                code={`
`}
              >
                <TooltipDemo />
              </DemoTemplate>
            </Reveal>
          </section>
        </Reveal>
        <Reveal className="mb-6">
          <CLI command={"jrui add tooltip reveal"} />
        </Reveal>
        <Reveal>
          <section className="mb-8">
            <h3 className="text-primary text-2xl font-semibold mb-4">Props</h3>
            <p className="mb-4">
              The `Tooltip` component accepts the following props for
              controlling its animation behavior:
            </p>
            <ul>
              <li>
                <strong>
                  tip: (string) <br />
                </strong>{" "}
                The text content of the tooltip, providing information or
                context to the user when they hover over the target element.
              </li>
              <li>
                <strong>
                  width?: ("max-content" | number) <br />
                </strong>{" "}
                The width of the tooltip. It can be set to "max-content" to
                adjust the width automatically based on the content, or it can
                be set to a specific number to define a fixed width in rem.
              </li>
              <li>
                <strong>
                  offset?: ("50%" | number) <br />
                </strong>{" "}
                The offset of the tooltip from the target element. It is set by
                default to "50%" to center the tooltip horizontally, or it can
                be set to a specific number to define the offset in rem.
              </li>
              <li>
                <strong>
                  animationDirection?: ("up" | "down" | "left" | "right") <br />
                </strong>{" "}
                The direction of the animation when the tooltip appears. It
                determines the direction from which the tooltip animates into
                view.
              </li>
              <li>
                <strong>
                  delayIn?: (number) <br />
                </strong>{" "}
                The delay before the tooltip appears when the user hovers over
                the target element, specified in milliseconds.
              </li>
              <li>
                <strong>
                  delayOut?: (number) <br />
                </strong>{" "}
                The delay before the tooltip disappears when the user moves the
                cursor away from the target element, specified in milliseconds.
              </li>
              <li>
                <strong>
                  animationDuration?: (number) <br />
                </strong>{" "}
                The duration of the animation when the tooltip appears or
                disappears, specified in seconds.
              </li>
              <li>
                <strong>
                  className?: (string) <br />
                </strong>{" "}
                Additional CSS classes to apply to the tooltip for custom
                styling.
              </li>
              <li>
                <strong>
                  children: (ReactNode) <br />
                </strong>{" "}
                The content that triggers the display of the tooltip when
                hovered over by the user. This can be any valid React node or
                component.
              </li>
            </ul>
            <Reveal>
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
                <TooltipDemo2 />
              </DemoTemplate>
            </Reveal>
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
                <pre className="w-max dark:bg-[#3b3b3b] bg-gray-200 p-4 rounded-md overflow-x-auto max-w-[90dvw]">
                  npm install framer-motion
                </pre>{" "}
              </li>
              <li>
                The `useInView` hook, used for detecting when the component is
                in view, requires this dependency. Install it with:
                <pre className="w-max dark:bg-[#3b3b3b] bg-gray-200 p-4 rounded-md overflow-x-auto max-w-[90dvw]">
                  npm install react-intersection-observer
                </pre>{" "}
              </li>
            </ul>
          </section>
        </Reveal>
        <Reveal>
          <section className="mb-8">
            <h3 className="text-primary text-2xl font-semibold mb-4">
              Component Files
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
            <br />
            <CodeTemplate
              fileName="Components > Tooltip.tsx"
              code={`
"use client";
import React, { ReactNode, useState } from "react";
import Reveal from "./Reveal";

interface TooltipProps {
  tip: string;
  width?: "max-content" | number;
  offset?: "50%" | number;
  animationDirection?: "up" | "down" | "left" | "right";
  delayIn?: number;
  delayOut?: number;
  animationDuration?: number;
  className?: string;
  children: ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({
  tip,
  className,
  width = "max-content",
  offset = "50%",
  animationDirection = "up",
  animationDuration = 0.2,
  delayIn = 200,
  delayOut = 200,
  children,
}) => {
  const [isHovered, setHovered] = useState(false);

  return (
    <div
      className="relative z-[999] inline-block"
      onMouseEnter={() => setTimeout(() => setHovered(true), delayIn)}
      onMouseLeave={() => setTimeout(() => setHovered(false), delayOut)}
    >
      {children}
      {isHovered && (
        <Reveal direction={animationDirection} duration={animationDuration}>
          <div
            className={\` \${className} mt-1 absolute top-full transform -translate-x-1/2 bg-white dark:bg-[#020817] border border-gradient z-[999] left-[50%]\`}
            style={{ width: width + "rem", left: \`calc(50% + \${offset}rem)\` }}
          >
            <p className="p-1 text-[14px] text-center m-0">{tip}</p>
          </div>
        </Reveal>
      )}
    </div>
  );
};

export default Tooltip;
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
