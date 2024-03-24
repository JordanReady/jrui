import React from "react";
import DocLayout from "../DocLayout";
import Reveal from "@/components/Reveal";
import CodeTemplate from "@/components/CodeTemplate";
import DemoTemplate from "@/components/DemoTemplate";
import DemoPreview from "@/components/demos/DemoPreview";

const DarkModeSetup = () => {
  return (
    <DocLayout>
      <Reveal className="container mx-auto py-8 relative">
        <Reveal className="flex min-w-full flex-col md:flex-row md:justify-between mb-4">
          <h1 className="text-4xl font-bold ">Dark Mode Setup</h1>
        </Reveal>
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
            <h3 className="text-primary text-2xl font-semibold my-4">
              Easy CLI Install
            </h3>
            <ol className="list-decimal pl-5">
              <li>
                <p className="mb-2">
                  Run the following command to install the required
                  dependencies:
                </p>
                <pre className="w-max dark:bg-[#3b3b3b] bg-gray-200 p-4 rounded-md overflow-x-auto max-w-[90dvw] mb-2">
                  jrui add themeProvider
                </pre>
                <p className="mb-2 font-bold">
                  Note: This will override any custom styles you have in your
                  globals.css file. Make sure to have those ready to paste back
                  in after installing.
                </p>
              </li>
              <li>
                <p className="mb-2">
                  The command below is recommended for a button that toggles
                  light and dark mode.
                </p>
                <pre className="w-max dark:bg-[#3b3b3b] bg-gray-200 p-4 rounded-md overflow-x-auto max-w-[90dvw]">
                  jrui add themeToggle
                </pre>
              </li>
            </ol>
          </section>
        </Reveal>
        <Reveal>
          <section className="mb-8">
            <h3 className=" text-primary text-2xl font-semibold mb-4">
              Component Files
            </h3>
            <CodeTemplate
              fileName="components/ThemeProvider.tsx"
              code={`"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export default function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}`}
            />
            <br />
            <CodeTemplate
              fileName="components/ThemeToggle.tsx"
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
import ThemeProvider from "@/components/ThemeProvider";

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
            <p className="mt-4">
              Note: You may need to restart your development server for the
              changes to take effect!
            </p>
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
              code={`<Reveal className=" w-20 h-20 bg-slate-200 dark:bg-slate-600">
  <h2>Example</h2>
</Reveal>
`}
            />
          </section>
        </Reveal>
      </Reveal>
    </DocLayout>
  );
};

export default DarkModeSetup;
