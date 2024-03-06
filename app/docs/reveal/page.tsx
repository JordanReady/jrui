import React from "react";
import DocLayout from "../DocLayout";
import Reveal from "@/components/Reveal";
import CodeTemplate from "@/components/CodeTemplate";
import DemoTemplate from "@/components/DemoTemplate";
import RevealDemo from "@/components/demos/RevealDemo";

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
              specified direction and delay.
            </p>
            <DemoTemplate
              title="app > Example.tsx"
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

      {/* Example with custom direction (left) and custom class name */}
      <Reveal direction="left" className="ligma-nutz">
        <p>This content will be revealed from the left with default delay.</p>
      </Reveal>

      <h1>Your Content After Reveal</h1>
    </div>
  );
};

export default Example;
              
`}
            >
              <RevealDemo />
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
  children: ReactNode;
  className?: string;
}

const Reveal: FC<RevealProps> = ({
  direction = "up",
  delay = 0.2,
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
        transition: { duration: 0.5, delay },
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

      {/* Example with custom direction (left) and custom class name */}
      <Reveal direction="left" className="ligma-nutz">
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
