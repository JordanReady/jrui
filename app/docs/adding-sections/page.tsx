import React from "react";
import DocLayout from "../DocLayout";
import Reveal from "@/components/Reveal";

const AddingSections = () => {
  return (
    <DocLayout>
      <div className="container mx-auto py-8">
        <Reveal>
          <h1 className="text-4xl font-bold mb-4">
            Adding Sections to Your Project
          </h1>
        </Reveal>

        {/* Overview */}
        <Reveal>
          <section className="mb-8">
            <h2 className="text-primary text-2xl font-semibold mb-4">
              Overview
            </h2>
            <p>
              In JRui, adding sections to your project allows you to integrate
              pre-designed layouts and structures effortlessly. Follow the steps
              below to incorporate sections that enhance the visual appeal of
              your application.
            </p>
          </section>
        </Reveal>

        {/* Section Placement */}
        <Reveal>
          <section className="mb-8">
            <h2 className="text-primary text-2xl font-semibold mb-4">
              Section Placement
            </h2>
            <p>
              All JRui sections are organized within the `components` folder in
              your project. To integrate a section into your project, use the
              CLI to easily import the section into your project, or navigate to
              the desired directory you want the section to be, copy the code,
              and paste it into the selected folder in your project.
            </p>
          </section>
        </Reveal>

        {/* Layout Integration */}
        <Reveal>
          <section className="mb-8">
            <h2 className="text-primary text-2xl font-semibold mb-4">
              Layout Integration
            </h2>
            <p>
              JRui sections are crafted with specific layouts in mind, providing
              ready-made structures for common UI elements like hero sections or
              card layouts. Explore badges on sections indicating their
              compatibility with specific layouts.
            </p>
            <p>
              While sections are designed for specific layouts, they can be
              customized to fit seamlessly into your project's existing
              structure and styling.
            </p>
          </section>
        </Reveal>
      </div>
    </DocLayout>
  );
};

export default AddingSections;
