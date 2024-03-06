import React from "react";
import DocLayout from "../DocLayout";
import Reveal from "@/components/Reveal";
import CodeTemplate from "@/components/CodeTemplate";

const RevealComponent = () => {
  return (
    <DocLayout>
      <div className="container mx-auto py-8 relative">
        <div className="flex min-w-full flex-col md:flex-row md:justify-between mb-4">
          <Reveal>
            <h1 className="text-4xl font-bold mb-4">Reveal</h1>
          </Reveal>
          <div className="flex gap-2">
            <Reveal>
              <span className="  border border-gradient px-4 py-2">
                Framer Motion
              </span>
            </Reveal>
          </div>
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
}

const Reveal: FC<RevealProps> = ({
  direction = "up",
  delay = 0.2,
  children,
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
    <motion.div ref={ref} initial={initialStyles} animate={controls}>
      {children}
    </motion.div>
  );
};

export default Reveal;
`}
            />
          </section>
        </Reveal>
      </div>
    </DocLayout>
  );
};

export default RevealComponent;
