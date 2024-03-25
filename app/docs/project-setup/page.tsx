import React from "react";
import DocLayout from "../DocLayout";
import Reveal from "@/components/Reveal";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Setup",
  description:
    "Learn how to set up your project with JRui in a few simple steps. Follow the instructions to clone the template repository, install dependencies, run the template, and customize your project to fit your needs.",
  openGraph: {
    title: "Project Setup",
    description:
      "Learn how to set up your project with JRui in a few simple steps. Follow the instructions to clone the template repository, install dependencies, run the template, and customize your project to fit your needs.",
    siteName: "JRui",
    type: "website",
  },
};

const ProjectSetup = () => {
  return (
    <DocLayout>
      <Reveal className="container mx-auto py-8">
        <h1 className="text-4xl font-bold mb-4">Project Setup</h1>

        <Reveal>
          <section className="mb-8">
            <Reveal>
              <h2 className="text-primary text-2xl font-semibold mb-4">
                Overview
              </h2>
              <p>
                Setting up a project with JRui is straightforward. Follow these
                steps to get started with your chosen template:
              </p>
            </Reveal>
          </section>
        </Reveal>

        <Reveal>
          <section className="mb-8">
            <Reveal>
              <h2 className="text-primary text-2xl font-semibold mb-4">
                Cloning the Repository
              </h2>
              <p>
                Begin your project by cloning the JRui template repository using
                the provided command:
              </p>
              <pre className="dark:bg-[#3b3b3b] w-max bg-gray-200 p-4 rounded-md">
                {`git clone <repository-url>`}
              </pre>
              <p>
                Replace `{`<repository-url>`}` with the URL of the JRui template
                repository you want to use.
              </p>
            </Reveal>
          </section>
        </Reveal>

        <Reveal>
          <section className="mb-8">
            <Reveal>
              <h2 className="text-primary text-2xl font-semibold mb-4">
                Installing Dependencies
              </h2>
              <p>
                Navigate into the cloned project directory and install the
                required dependencies using npm:
              </p>
              <pre className="dark:bg-[#3b3b3b] w-max bg-gray-200 p-4 rounded-md">
                {`cd <project-directory>\nnpm install`}
              </pre>
              <p>
                Replace `{`<project-directory>`}` with the name of your project
                directory.
              </p>
            </Reveal>
          </section>
        </Reveal>

        <Reveal>
          <section className="mb-8">
            <Reveal>
              <h2 className="text-primary text-2xl font-semibold mb-4">
                Running the Template
              </h2>
              <p>Launch the project template with the following command:</p>
              <pre className="dark:bg-[#3b3b3b] w-max bg-gray-200 p-4 rounded-md">{`npm run dev`}</pre>
              <p>
                This will start a development server, and you can view your
                project by navigating to the specified URL in your browser.
              </p>
            </Reveal>
          </section>
        </Reveal>

        <Reveal>
          <section>
            <Reveal>
              <h2 className="text-primary text-2xl font-semibold mb-4">
                Customizing and Importing Components
              </h2>
              <p>
                Follow any additional project setup instructions provided with
                the template to properly integrate technologies. Once set up,
                start customizing your project to fit your preferences and
                import components as needed with the JRui CLI.
              </p>
            </Reveal>
          </section>
        </Reveal>
      </Reveal>
    </DocLayout>
  );
};

export default ProjectSetup;
