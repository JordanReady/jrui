import React from "react";
import DocLayout from "../DocLayout";
import Reveal from "@/components/Reveal";

const AddingFeatures = () => {
  return (
    <DocLayout>
      <div className="container mx-auto py-8">
        <Reveal>
          <h1 className="text-4xl font-bold mb-4">
            Adding Features to Your Project
          </h1>
        </Reveal>

        {/* Overview */}
        <Reveal>
          <section className="mb-8">
            <h2 className="text-primary text-2xl font-semibold mb-4">
              Overview
            </h2>
            <p>
              Elevate your project's functionality by seamlessly integrating
              features with JRui. Follow the steps below to add powerful
              functionalities that enhance the user experience of your
              application.
            </p>
          </section>
        </Reveal>

        {/* Feature Integration */}
        <Reveal>
          <section className="mb-8">
            <h2 className="text-primary text-2xl font-semibold mb-4">
              Feature Integration
            </h2>
            <p>
              JRui features are designed to enhance specific aspects of your
              project. Integrate features by following the provided
              documentation for each feature. Copy the code snippets and apply
              them to your project as instructed.
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
              Explore the seamless integration of JRui features with various
              templates. Check feature documentation for information on template
              compatibility. Enhance your project's functionality without
              compromising its overall design.
            </p>
          </section>
        </Reveal>
      </div>
    </DocLayout>
  );
};

export default AddingFeatures;
