import React from "react";
import DocLayout from "./DocLayout";

const GettingStarted = () => {
  return (
    <DocLayout animate={true}>
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold mb-4">
          Getting Started with JR
          <span className="text-primary">ui</span>
        </h1>

        {/* Overview */}
        <section className="mb-8">
          <h2 className=" text-primary text-2xl font-semibold mb-4">
            Overview
          </h2>
          <p>
            Welcome to JRui – your all-in-one solution for fast project setup
            and a powerful component library.
          </p>
          <p>
            JRui streamlines the process of getting your projects up and running
            with a seamless integration of templates and reusable components.
          </p>
        </section>

        {/* Core Concepts */}
        <section className="mb-8">
          <h2 className=" text-primary text-2xl font-semibold mb-4">
            Core Concepts
          </h2>

          {/* Templates */}
          <div className="mb-4">
            <h3 className="text-primary text-xl mb-2">Templates</h3>
            <p>
              JRui provides a variety of templates designed to kickstart your
              projects efficiently. Each template is crafted with best practices
              and integration in mind.
            </p>
          </div>

          {/* Component Library */}
          <div className="mb-4">
            <h3 className="text-primary text-xl mb-2">Component Library</h3>
            <p>
              Explore our comprehensive component library, offering a collection
              of easily integratable components that seamlessly work with the
              provided templates.
            </p>
          </div>

          {/* Easy Integration */}
          <div className="mb-4">
            <h3 className="text-primary text-xl mb-2">Easy Integration</h3>
            <p>
              Getting started with JRui is simple. Choose a template, pick the
              components you need, copy and paste the code into your project –
              it's that easy!
            </p>
          </div>
        </section>

        {/* Quick Start Guide */}
        <section>
          <h2 className=" text-primary text-2xl font-semibold mb-4">
            Quick Start Guide
          </h2>
          <p>Follow these steps to kickstart your project with JRui:</p>
          <ol className="list-decimal pl-6">
            <li>Choose a template that suits your project requirements.</li>
            <li>
              Explore the component library and pick the components you need.
            </li>
            <li>
              Copy and paste the provided code snippets into your project.
            </li>
            <li>
              Customize the code according to your project specifications.
            </li>
            <li>Voila! Your project is ready to go.</li>
          </ol>
        </section>
      </div>
    </DocLayout>
  );
};

export default GettingStarted;
