import React from "react";
import DocLayout from "../DocLayout";
import Reveal from "@/components/Reveal";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Adding Components",
  description:
    "Learn how to enhance your development experience by seamlessly integrating components into your project with JRui. Follow step-by-step instructions to add components, ensuring a clean and organized structure. Explore template integration options and customization possibilities to tailor components to your project's needs.",
  openGraph: {
    title: "Adding Components",
    description:
      "Learn how to enhance your development experience by seamlessly integrating components into your project with JRui. Follow step-by-step instructions to add components, ensuring a clean and organized structure. Explore template integration options and customization possibilities to tailor components to your project's needs.",
    siteName: "JRui",
    type: "website",
  },
};

const AddingComponents = () => {
  return (
    <DocLayout>
      <Reveal className="container mx-auto py-8">
        <h1 className="text-4xl font-bold mb-4">
          Adding Components to Your Project
        </h1>

        {/* Overview */}
        <Reveal>
          <section className="mb-8">
            <h2 className="text-primary text-2xl font-semibold mb-4">
              Overview
            </h2>
            <p>
              In JRui, adding components to your project is a straightforward
              process designed to enhance your development experience. Follow
              the steps below to seamlessly integrate components into your
              project.
            </p>
          </section>
        </Reveal>

        {/* Component Placement */}
        <Reveal>
          <section className="mb-8">
            <h2 className="text-primary text-2xl font-semibold mb-4">
              Component Placement
            </h2>
            <p>
              All JRui components are designed to be added to the "components"
              folder in your root directory. This ensures a clean and organized
              structure.
            </p>
            <p>
              Simply choose the component you want to import into your project,
              use the CLI to easily install the component and all necessary
              dependencies, or copy the code and paste it into your desired
              folder in your project.
            </p>
          </section>
        </Reveal>

        {/* Template Integration */}
        <Reveal>
          <section className="mb-8">
            <h2 className="text-primary text-2xl font-semibold mb-4">
              Template Integration
            </h2>
            <p>
              Components in JRui are crafted to work seamlessly with specific
              templates. When browsing components, you'll notice badges
              indicating if a component is designed for a particular template.
            </p>
            <p>
              While components are created with specific templates in mind, they
              can be modified to fit into your existing project's structure and
              styling.
            </p>
          </section>
        </Reveal>
      </Reveal>
    </DocLayout>
  );
};

export default AddingComponents;
