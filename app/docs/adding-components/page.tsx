import React from "react";
import DocLayout from "../DocLayout";
import Reveal from "@/components/Reveal";

const AddingComponents = () => {
  return (
    <DocLayout>
      <div className="container mx-auto py-8">
        <Reveal>
          <h1 className="text-4xl font-bold mb-4">
            Adding Components to Your Project
          </h1>
        </Reveal>

        {/* Overview */}
        <Reveal>
          <section className="mb-8">
            <h2 className=" text-primary text-2xl font-semibold mb-4">
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
            <h2 className=" text-primary text-2xl font-semibold mb-4">
              Component Placement
            </h2>
            <p>
              All JRui components are designed to be added to the{" "}
              <code>components</code> folder in your project. This ensures a
              clean and organized structure.
            </p>
            <p>
              Simply locate the component you want to use, copy the code, and
              paste it into the <code>components</code> folder in your project.
            </p>
          </section>
        </Reveal>

        {/* Layout Integration */}
        <Reveal>
          <section className="mb-8">
            <h2 className=" text-primary text-2xl font-semibold mb-4">
              Layout Integration
            </h2>
            <p>
              Components in JRui are crafted to work seamlessly with specific
              layouts. When browsing components, you'll notice badges indicating
              if a component is designed for a particular layout.
            </p>
            <p>
              While components are created with specific layouts in mind, they
              can be modified to fit into your existing project's structure and
              styling.
            </p>
          </section>
        </Reveal>
      </div>
    </DocLayout>
  );
};

export default AddingComponents;
