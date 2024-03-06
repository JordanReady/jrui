import React from "react";
import Link from "next/link";
import DocLayout from "../DocLayout";
import Reveal from "@/components/Reveal";

const ProjectStructure = () => {
  return (
    <DocLayout>
      <div className="container mx-auto py-8">
        <Reveal>
          <h1 className="text-4xl font-bold mb-4">
            Understanding Project Structure
          </h1>
        </Reveal>

        {/* Overview */}

        <Reveal>
          <section className="mb-8">
            <h2 className="text-primary text-2xl font-semibold mb-4">
              Overview
            </h2>
            <p>
              In JRui, project structure is organized to align with the
              principles of Next.js, making it easy to manage and expand your
              application.
            </p>
            <p>
              The key concept is to create routes by adding folders in the `app`
              directory, each containing a `page.tsx` file to serve as the page
              for that route.
            </p>
          </section>
        </Reveal>

        {/* Creating Routes */}
        <Reveal>
          <section className="mb-8">
            <h2 className="text-primary text-2xl font-semibold mb-4">
              Creating Routes
            </h2>
            <p>
              To create a new route in your JRui project, follow these steps:
            </p>
            <ol className="list-decimal pl-6">
              <li>
                Navigate to the `app` directory in your project structure.
              </li>
              <li>Create a new folder for the desired route.</li>
              <li>
                Inside the created folder, add a `page.tsx` file to serve as the
                page for that route.
              </li>
            </ol>
            <p>
              JRui leverages Next.js's file-based routing system, making it
              intuitive and straightforward to structure your application.
            </p>
          </section>
        </Reveal>

        {/* Additional Resources */}
        <Reveal>
          <section>
            <h2 className="text-primary text-2xl font-semibold mb-4">
              Next.js Documentation
            </h2>
            <p>
              For more in-depth information on Next.js project structure and
              routing, refer to the official Next.js documentation:
            </p>
            <p className="mb-4">
              <Link
                href="https://nextjs.org/docs/getting-started"
                className="text-primary hover:underline"
              >
                Next.js Documentation
              </Link>
            </p>
            <p>
              Familiarizing yourself with Next.js conventions will empower you
              to efficiently organize and expand your JRui application.
            </p>
          </section>
        </Reveal>
      </div>
    </DocLayout>
  );
};

export default ProjectStructure;
