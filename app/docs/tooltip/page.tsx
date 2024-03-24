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
                code={`import React from "react";
import Reveal from "../Reveal";
import Jrui from "@/imgs/JRuiLogo.png";
import Image from "next/image";
import { Croissant, Settings } from "lucide-react";
import Tooltip from "@/app/demo/components/Tooltip";

const RevealDemo = () => {
  return (
    <div className="container relative p-5 flex gap-16 flex-col md:flex-row center ">
      <Reveal className=" flex flew-row gap-4 absolute top-2 left-2   ">
        <div className="">
          <Reveal className="flex gap-4">
            <Tooltip
              animationDirection="right"
              tip="I'm a gear"
              width={6}
              offset={2.25}
            >
              <Settings />
            </Tooltip>
            <Tooltip
              delayIn={100}
              animationDuration={0.05}
              tip="Use with caution!"
              width={8}
              offset={3}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-triangle-alert"
              >
                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
                <path d="M12 9v4" />
                <path d="M12 17h.01" />
              </svg>
            </Tooltip>
            <Tooltip
              delayIn={10}
              animationDuration={1}
              animationDirection="left"
              tip="Croissant?"
              width={5}
              offset={1.75}
            >
              <Croissant />
            </Tooltip>
            <Tooltip
              delayIn={100}
              animationDuration={0.05}
              tip="AHHH!"
              width={4}
              offset={-2}
              className="animate-bounce"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-loader-circle animate-spin"
              >
                <path d="M21 12a9 9 0 1 1-6.219-8.56" />
              </svg>
            </Tooltip>
          </Reveal>
        </div>
      </Reveal>
      <Reveal>
        <div className="h-[380px] w-[210px]  flex flex-col justify-center items-center relative">
          <Tooltip
            className="mt-[-350px]"
            animationDirection="up"
            width={8}
            tip="This is Jrui the Mascot!"
          >
            <Reveal className="h-[300px] w-[300px]">
              <Image src={Jrui} alt="It's Jrui the mascot!!" />
            </Reveal>
          </Tooltip>
        </div>
      </Reveal>
      <Reveal>
        <div className=" w-[210px] gap-8 flex flex-col justify-center items-center ">
          <Tooltip
            className="mt-[-40px]"
            offset={7}
            animationDirection="right"
            animationDuration={0.5}
            width={7}
            tip="On da right!"
          >
            <Reveal>
              <button className="btn-hover border-gradient px-4 py-2">
                Button
              </button>
            </Reveal>
          </Tooltip>
          <Tooltip
            className="mt-[-30px]"
            offset={-5}
            animationDirection="left"
            animationDuration={1}
            width={6}
            tip="On da left!"
          >
            <Reveal>
              <a className="underline" href="#">
                Link
              </a>
            </Reveal>
          </Tooltip>
          <Tooltip animationDirection="up" width={10} tip="From Down Under">
            <Reveal>
              <p>Text</p>
            </Reveal>
          </Tooltip>
        </div>
      </Reveal>
    </div>
  );
};

export default RevealDemo;

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
                code={`
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
              Component Files
            </h3>
            <CodeTemplate
              fileName="components > Tooltip.tsx"
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
            <br />
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
              Example Use Case
            </h3>
            <CodeTemplate
              fileName="Example.tsx"
              code={`import React from "react";
import Tooltip from "@/components/Tooltip"; // Adjust the import path based on your project structure

const Example: React.FC = () => {
  return (
    <div className="center h-[80dvh]">
      <Tooltip
        tip="This is a tooltip"
        width={8}
        offset={7}
        animationDirection="up"
        animationDuration={0.5}
        delayIn={200}
        delayOut={200}
        className=" border-4 border-white"
      />
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
