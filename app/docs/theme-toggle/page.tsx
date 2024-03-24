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
      <Reveal className="container mx-auto py-8 relative">
        <Reveal className="flex min-w-full flex-col md:flex-row md:justify-between mb-4">
          <h1 className="text-4xl font-bold ">Theme Toggle</h1>
        </Reveal>
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
              fileName="components > ThemeToggle.tsx"
              code={`"use client";
import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button onClick={toggleTheme}>
      {theme === "light" ? (
        <Sun
          className=" h-11 w-11 p-[.25rem] border-gradient card-hover"
          strokeWidth={1}
        />
      ) : (
        <Moon
          className="h-11 w-11 p-[.25rem] border-gradient card-hover"
          strokeWidth={1}
        />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
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
import ThemeToggle from "./ThemeToggle"; // Adjust the import path based on your project structure

const Example: React.FC = () => {
  return (
    <Reveal className="container relative p-5 flex gap-4 flex-col center no-scroll">
        <h2>Click me to toggle light and dark mode!</h2>
        <ThemeToggle />
    </Reveal>
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

export default ThemeToggleComponent;
