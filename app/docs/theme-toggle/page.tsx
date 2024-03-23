import React from "react";
import DocLayout from "../DocLayout";
import Reveal from "@/components/Reveal";
import CodeTemplate from "@/components/CodeTemplate";
import DemoTemplate from "@/components/DemoTemplate";
import ThemeToggleDemo from "@/components/demos/ThemeToggleDemo";
import CLI from "@/components/CLI";

const ThemeToggleComponent = () => {
  return (
    <DocLayout>
      <div className="container mx-auto py-8 relative">
        <div className="flex min-w-full flex-col md:flex-row md:justify-between mb-4">
          <Reveal>
            <h1 className="text-4xl font-bold ">Theme Toggle</h1>
          </Reveal>
        </div>
        <Reveal>
          <section className="mb-8">
            <h3 className=" text-primary text-2xl font-semibold mb-4">
              Overview
            </h3>
            <p>
              The ThemeToggle component is a React functional component that
              provides a user interface element for toggling between light and
              dark themes in a web application. It leverages the next-themes
              library to manage theme switching seamlessly. This component was
              made to be used with the Dark Mode feature.
            </p>
            <DemoTemplate
              title="Demo"
              code={`
`}
            >
              <ThemeToggleDemo />
            </DemoTemplate>
            <Reveal className="mt-6">
              <CLI command={"jrui add themeToggle"} />
            </Reveal>
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
import ThemeToggle from "./ThemeToggle"; // Adjust the import path based on your project structure

const Example: React.FC = () => {
  return (
    <div className="container relative p-5 flex gap-4 flex-col center no-scroll">
        <h2>Click me to toggle light and dark mode!</h2>
        <ThemeToggle />
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

export default ThemeToggleComponent;
