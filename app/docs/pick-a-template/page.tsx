import React from "react";
import DocLayout from "../DocLayout";
import Reveal from "@/components/Reveal";

const PickTemplate = () => {
  return (
    <DocLayout animate={false}>
      <div className="container mx-auto py-8">
        <Reveal>
          <h1 className="text-4xl font-bold mb-4">Pick a Template</h1>
        </Reveal>
        {/* Overview */}
        <Reveal>
          <section className="mb-8">
            <h2 className="text-primary text-2xl font-semibold mb-4">
              Overview
            </h2>
            <p>
              The "Pick a Template" section allows you to choose a starting
              point for your project by selecting from a variety of carefully
              crafted templates provided by JRui.
            </p>
            <p>
              Each template comes with its unique features and design, offering
              you a solid foundation to build upon.
            </p>
          </section>
        </Reveal>

        {/* Template Selection */}
        <Reveal>
          <section className="mb-8">
            <h2 className="text-primary text-2xl font-semibold mb-4">
              Template Selection
            </h2>
            <p>
              Browse through the available templates and choose the one that
              best suits your project requirements. Whether it's a sleek landing
              page, a robust admin dashboard, or something in between, JRui has
              you covered.
            </p>
            {/* Add specific details about the templates and how they cater to different needs. */}
          </section>
        </Reveal>

        {/* Usage */}
        <Reveal>
          <section>
            <h2 className="text-primary text-2xl font-semibold mb-4">
              How to Use
            </h2>
            <p>
              Once you've selected a template, follow these simple steps to
              integrate it into your project:
            </p>
            <ol className="list-decimal pl-6">
              <li>Click on the template you wish to use.</li>
              <li>
                Explore the included components and features specific to that
                template.
              </li>
              <li>
                Copy the provided code snippets and paste them into your
                project.
              </li>
              <li>Customize the template according to your project's needs.</li>
              <li>Your project is now set up with the chosen template!</li>
            </ol>
          </section>
        </Reveal>
      </div>
    </DocLayout>
  );
};

export default PickTemplate;
