import React from "react";
import DocLayout from "../DocLayout";
import Reveal from "@/components/Reveal";
import CodeTemplate from "@/components/CodeTemplate";
import DemoTemplate from "@/components/DemoTemplate";
import TypedDemo from "@/components/demos/TypedDemo";
import TypedDemo2 from "@/components/demos/TypedDemo2";
import CLI from "@/components/CLI";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Typed",
  description:
    "The Typed component is a React component that creates a typing effect using the Typed.js library, customizable with props for strings, delay, and speed. It simplifies the integration of dynamic typing animations into React applications, offering easy configuration and efficient cleanup within a useEffect hook.",
  openGraph: {
    title: "Typed",
    description:
      "The Typed component is a React component that creates a typing effect using the Typed.js library, customizable with props for strings, delay, and speed. It simplifies the integration of dynamic typing animations into React applications, offering easy configuration and efficient cleanup within a useEffect hook.",
    siteName: "JRui",
    type: "website",
  },
};

const RevealComponent = () => {
  return (
    <DocLayout>
      <Reveal className="container mx-auto py-8 relative">
        <Reveal className="flex min-w-full flex-col md:flex-row md:justify-between mb-4">
          <h1 className="text-4xl font-bold ">Typed</h1>
        </Reveal>
        <Reveal>
          <section className="mb-8">
            <h3 className=" text-primary text-2xl font-semibold mb-4">
              Overview
            </h3>
            <p>
              The "Typed" Component is a React component that utilizes the
              Typed.js library to create a typing effect for a list of strings.
              This component accepts various props to customize its behavior,
              including the strings to display, start delay, typing speed,
              backspacing speed, backspacing delay, and whether the typing
              should loop. The component dynamically renders a {`<span>`}{" "}
              element with the provided class name, allowing for easy
              integration into different parts of a React application. It
              encapsulates the functionality of creating and destroying the
              Typed.js instance within a useEffect hook, ensuring proper cleanup
              and preventing memory leaks. Overall, the "Typed" Component offers
              a convenient way to add engaging typing animations to React
              projects with minimal configuration.
            </p>
            <br />
            <p>
              Helpful Tip: You can style the cursor by targeting the
              typed-cursor class with CSS
            </p>
            <DemoTemplate
              title="Demo"
              code={`import React from "react";
import Typed from "@/app/demo/components/Typed";
import Jrui from "@/imgs/JRuiLogo.png";
import Image from "next/image";

const TypedDemo = () => {
return (
    <div className="flex flex-wrap">
    <div className="md:w-[50%] p-4">
        <h1 className=" text-4xl font-semibold">Hello!</h1>
        <h2 className="text-2xl font-semibold">I'm Jrui and I'm a</h2>
        <Typed className="text-primary text-2xl font-semibold" />
        <br />
        <Typed
        strings={[
            "The 'TypedComponent' is a React component that creates a typing effect using the Typed.js library, customizable with props for strings, delay, and speed. It simplifies the integration of dynamic typing animations into React applications, offering easy configuration and efficient cleanup within a useEffect hook.",
        ]}
        startDelay={0}
        typeSpeed={10}
        loop={false}
        className=" "
        />
    </div>
    <Image className="m-4" src={Jrui} alt="This is Jrui the mascot!" />
    </div>
);
};

export default TypedDemo;
              
`}
            >
              <TypedDemo />
            </DemoTemplate>
            <Reveal className="mt-6">
              <CLI command={"jrui add typed"} />
            </Reveal>
          </section>
        </Reveal>
        <Reveal>
          <section className="mb-8">
            <h3 className="text-primary text-2xl font-semibold mb-4">Props</h3>
            <p className="mb-4">
              The `TypedComponent` accepts the following props for configuring
              its typing animation:
            </p>
            <ul>
              <li>
                <strong>
                  strings?: string[] <br />
                </strong>{" "}
                An array of strings to be displayed and typed out sequentially.
              </li>
              <li>
                <strong>
                  startDelay?: number (default: 1000) <br />
                </strong>{" "}
                The delay before the typing animation starts, measured in
                milliseconds.
              </li>
              <li>
                <strong>
                  typeSpeed?: number (default: 100) <br />
                </strong>{" "}
                The speed at which characters are typed, measured in
                milliseconds per character.
              </li>
              <li>
                <strong>
                  backSpeed?: number (default: 50) <br />
                </strong>{" "}
                The speed at which characters are deleted (backspacing),
                measured in milliseconds per character.
              </li>
              <li>
                <strong>
                  backDelay?: number (default: 500) <br />
                </strong>{" "}
                The delay before starting to backspace, measured in
                milliseconds.
              </li>
              <li>
                <strong>
                  loop?: boolean (default: true) <br />
                </strong>{" "}
                Determines whether the typing animation should loop or not.
              </li>
              <li>
                <strong>
                  className?: string <br />
                </strong>{" "}
                Custom CSS class to be applied to the {`<span>`} element
                containing the typing animation.
              </li>
            </ul>
            <DemoTemplate
              title="Props Demo"
              code={`
`}
            >
              <TypedDemo2 />
            </DemoTemplate>
          </section>
        </Reveal>
        <Reveal>
          <section className="mb-8">
            <h3 className="text-primary text-2xl font-semibold mb-4">
              Component File
            </h3>
            <CodeTemplate
              fileName="components > Typed.tsx"
              code={`"use client";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

interface Props {
strings?: string[];
startDelay?: number;
typeSpeed?: number;
backSpeed?: number;
backDelay?: number;
loop?: boolean;
className?: string;
}

export default function TypedComponent({
strings = [
    "Full-Stack Developer",
    "Keyboard Warrior",
    "Software Engineer",
    "Coding Enthusiast",
    "Problem Solver",
],
startDelay = 1000,
typeSpeed = 100,
backSpeed = 50,
backDelay = 500,
loop = true,
className,
}: Props) {
// Create Ref element.
const el = useRef(null);

useEffect(() => {
    const typed = new Typed(el.current, {
    // Strings to display
    strings,
    // Speed settings, try diffrent values untill you get good results
    startDelay: startDelay,
    typeSpeed: typeSpeed,
    backSpeed: backSpeed,
    backDelay: backDelay,
    loop: loop,
    });

    // Destroying
    return () => {
    typed.destroy();
    };
}, []);

return <span className={className} ref={el}></span>;
}              
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
import Typed from "./Typed"; // Adjust the import path based on your project structure

const Example: React.FC = () => {
  return (
    <Typed
          strings={[
            "The 'TypedComponent' is a React component that creates a typing effect using the Typed.js library, customizable with props for strings, delay, and speed. It simplifies the integration of dynamic typing animations into React applications, offering easy configuration and efficient cleanup within a useEffect hook.",
          ]}
          startDelay={0}
          typeSpeed={10}
          loop={false}
          className="text-primary text-2xl font-semibold"
        />
  );
};

export default Example;
              
`}
            />
          </section>
        </Reveal>
      </Reveal>
    </DocLayout>
  );
};

export default RevealComponent;
