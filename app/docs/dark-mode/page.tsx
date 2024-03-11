import React from "react";
import DocLayout from "../DocLayout";
import Reveal from "@/components/Reveal";
import CodeTemplate from "@/components/CodeTemplate";
import DemoTemplate from "@/components/DemoTemplate";
import DemoPreview from "@/components/demos/DemoPreview";

const DarkModeSetup = () => {
  return (
    <DocLayout>
      <div className="container mx-auto py-8 relative">
        <div className="flex min-w-full flex-col md:flex-row md:justify-between mb-4">
          <Reveal>
            <h1 className="text-4xl font-bold ">Dark Mode Setup</h1>
          </Reveal>
        </div>
        <Reveal>
          <section className="mb-8">
            <h3 className=" text-primary text-2xl font-semibold mb-4">
              Overview
            </h3>
            <p>
              In this guide, we'll learn how to set up dark mode functionality
              in your application using the `next-themes` library and some help
              from Shadcn.
            </p>
          </section>
        </Reveal>
        <Reveal>
          <DemoPreview src="/Dark_Mode_Demo.mp4" />
        </Reveal>
        <Reveal>
          <section className="mb-8">
            <h3 className="text-primary text-2xl font-semibold mb-4">
              Installation
            </h3>
            <ol className="list-decimal pl-5">
              <li>
                <p className="mb-2">
                  Run the following command to install the required
                  dependencies:
                </p>
                <p className="mb-2 font-semibold">
                  Note: This will override any custom styles you have in your
                  globals.css file. Make sure to have those ready to paste back
                  in after installing.
                </p>
                <pre className="w-max dark:bg-[#3b3b3b] bg-gray-200 p-4 rounded-md overflow-x-auto max-w-[90dvw] mb-2">
                  npx shadcn-ui@latest init
                </pre>
                <pre className="w-max dark:bg-[#3b3b3b] bg-gray-200 p-4 rounded-md overflow-x-auto max-w-[90dvw]">
                  npm install next-themes
                </pre>
              </li>
              <li>
                <p className="mb-2">
                  Create a new file called `theme-provider.tsx` in the
                  `components` directory:
                </p>
              </li>
            </ol>
            <CodeTemplate
              fileName="components/theme-provider.tsx"
              code={`"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}`}
            />
          </section>
        </Reveal>
        <Reveal>
          <section className="mb-8">
            <h3 className="text-primary text-2xl font-semibold mb-4">
              Setup in Layout
            </h3>
            <p className="mb-4">
              Import the `ThemeProvider` component into your layout file and
              wrap your {`{children}`} with it inside the body tag:
            </p>
            <CodeTemplate
              fileName="layout.tsx"
              code={` // existing imports...
import { ThemeProvider } from "@/components/theme-provider";

// existing code...

  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}`}
            />
          </section>
        </Reveal>
        <Reveal>
          <section className="mb-8">
            <h3 className="text-primary text-2xl font-semibold mb-4">
              Adding a Toggle
            </h3>
            <p className="mb-4">
              You can add a toggle component to allow users to switch between
              light and dark modes:
            </p>
            <CodeTemplate
              fileName="ThemeToggle.tsx"
              code={`"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const ThemeToggle = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    return (
      <>
        {currentTheme === "dark" ? (
          <button
            className="bg-gray-200 text-gray-800 p-2 rounded"
            onClick={() => setTheme("light")}
          >
            Light Mode
          </button>
        ) : (
          <button
            className="bg-gray-800 text-gray-200 p-2 rounded"
            onClick={() => setTheme("dark")}
          >
            Dark Mode
          </button>
        )}
      </>
    );
  };

  return <div>{renderThemeChanger()}</div>;
};

export default ThemeToggle;`}
            />
          </section>
        </Reveal>
        <Reveal>
          <section className="mb-8">
            <h3 className="text-primary text-2xl font-semibold mb-4">
              Adding Styles
            </h3>
            <p className="mb-4">
              {
                "You now have default light and dark modes with your toggle now. If you want to try styling elements based on your modes, try using tailwind. This example shows how you can set a background color based on light and dark modes."
              }
            </p>
            <CodeTemplate
              fileName="Example.tsx
              "
              code={`<div className=" w-20 h-20 bg-slate-200 dark:bg-slate-600">
  <h2>Example</h2>
</div>
`}
            />
          </section>
        </Reveal>
      </div>
    </DocLayout>
  );
};

export default DarkModeSetup;
