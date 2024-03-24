import React from "react";
import DocLayout from "./DocLayout";
import Reveal from "@/components/Reveal";

const GettingStarted = () => {
  return (
    <DocLayout animate={true}>
      <Reveal className="container mx-auto py-8">
        <h1 className="text-4xl font-bold mb-4">
          Getting Started with JR<span className="text-primary">UI</span>
        </h1>

        {/* Overview */}
        <section className="mb-8">
          <Reveal>
            <h2 className="text-primary text-2xl font-semibold mb-4">
              Overview
            </h2>
            <p>
              Welcome to JRUI – your all-in-one solution for fast project setup
              and a powerful component library.
            </p>
            <p>
              JRUI streamlines the process of getting your projects up and
              running with seamless integration of templates, sections,
              features, and reusable components.
            </p>
          </Reveal>
        </section>

        {/* Core Concepts */}
        <section className="mb-8">
          <Reveal>
            <h2 className="text-primary text-2xl font-semibold mb-4">
              Core Concepts
            </h2>
            {/* Templates */}
            <Reveal className="mb-4">
              <h3 className="text-primary text-xl mb-2">Templates</h3>
              <p>
                JRUI provides a variety of templates designed to kickstart your
                projects efficiently. Each template is crafted with best
                practices and easy integration of JRUI features, sections, and
                components in mind.
              </p>
            </Reveal>
            {/* Component Library */}
            <Reveal className="mb-4">
              <h3 className="text-primary text-xl mb-2">Component Library</h3>
              <p>
                Explore our comprehensive component library, offering a
                collection of easily integratable components that seamlessly
                work with the provided templates.
              </p>
            </Reveal>
            {/* Easy Integration */}
            <Reveal className="mb-4">
              <h3 className="text-primary text-xl mb-2">Easy Integration</h3>
              <p>
                Getting started with JRUI is simple. Choose a template, pick the
                components you need, use the CLI or copy and paste the code into
                your project – it's that easy!
              </p>
            </Reveal>
            {/* Command Line Interface */}
            <Reveal className="mb-4">
              <h3 className="text-primary text-xl mb-2">
                Command Line Interface (CLI)
              </h3>
              <p>
                Use the CLI to quickly and easily install JRUI features,
                sections, and components into your project.
              </p>
            </Reveal>
          </Reveal>
        </section>

        {/* Quick Start Guide */}
        <section>
          <Reveal>
            <h2 className="text-primary text-2xl font-semibold mb-4">
              Quick Start Guide
            </h2>
            <p>Follow these steps to kickstart your project with JRUI:</p>
            <ol className="list-decimal pl-6">
              <li>Choose a template that suits your project requirements.</li>
              <li>
                Explore the component library and pick the components you need.
              </li>
              <li>
                Install the CLI into your project.
                <pre className="w-max dark:bg-[#3b3b3b] bg-gray-200 p-4 rounded-md overflow-x-scroll ">
                  npm i jrui-cli
                </pre>
                <p>
                  After installation, you can run
                  <pre className="w-max dark:bg-[#3b3b3b] bg-gray-200 p-4 rounded-md overflow-x-scroll ">
                    jrui help
                  </pre>
                  for an overview of the CLI.
                </p>
              </li>
              <li>
                Then run the setup command to set up your globals.css file with
                predefined custom styles.
                <pre className="w-max dark:bg-[#3b3b3b] bg-gray-200 p-4 rounded-md overflow-x-scroll ">
                  jrui setup
                </pre>
              </li>
              <li>
                Then install the components you would like to use with the add
                command.
                <pre className="w-max dark:bg-[#3b3b3b] bg-gray-200 p-4 rounded-md overflow-x-scroll ">
                  jrui add [components]
                </pre>
                <p>
                  Each component doc page will have an "Easy CLI Installation"
                  command with helpful notes when applicable.
                </p>
              </li>
              <li>
                Customize the code according to your project specifications.
              </li>
              <li>Voilà! Your project is ready to go.</li>
            </ol>
          </Reveal>
        </section>
      </Reveal>
    </DocLayout>
  );
};

export default GettingStarted;
