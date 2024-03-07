import React from "react";
import DocLayout from "@/app/docs/DocLayout";
import Reveal from "@/components/Reveal";
import CodeTemplate from "@/components/CodeTemplate";
import DemoTemplate from "@/components/DemoTemplate";
import RevealDemo from "@/components/demos/RevealDemo";
import RevealDemo2 from "@/components/demos/RevealDemo2";

const DarkMode = () => {
  return (
    <DocLayout>
      <div className="container mx-auto py-8 relative">
        <div className="flex min-w-full flex-col md:flex-row md:justify-between mb-4">
          <Reveal>
            <h1 className="text-4xl font-bold ">Dark Mode</h1>
          </Reveal>
        </div>
        <Reveal>
          <section className="mb-8">
            <h3 className=" text-primary text-2xl font-semibold mb-4">
              Cumming Soon!
            </h3>
          </section>
        </Reveal>
      </div>
    </DocLayout>
  );
};
export default DarkMode;
