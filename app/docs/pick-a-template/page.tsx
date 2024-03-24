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
              The "Templates" section allows you to choose a starting point for
              your project by selecting from a variety of carefully crafted
              templates provided by JRUI.
            </p>
            <p>
              Each template comes with its unique features and design, offering
              you step-by-step instructions on configuring the project, giving
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
              best suits your project requirements. You can choose the barebones
              template that will come with step-by-step instructions on getting
              your project configured, or pick a layout that will serve as a
              starting foundation for a particular project.
            </p>
          </section>
        </Reveal>
      </div>
    </DocLayout>
  );
};

export default PickTemplate;
