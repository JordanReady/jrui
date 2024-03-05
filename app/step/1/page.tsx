import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">
        Step 1: Set up Google Cloud Account
      </h1>
      <div className="mb-4 flex gap-2">
        <Link
          className=" px-4 py-2 text-black bg-white
          border-black border-2 "
          href="/"
        >
          Home
        </Link>
        <Link
          className=" px-4 py-2 text-black bg-white
          border-black border-2 "
          href="/step/2"
        >
          Next Step
        </Link>
      </div>
      {/* Sub-step 1 */}
      <div className="bg-gray-200 p-4 rounded-md mb-4">
        <h2 className="text-xl font-semibold mb-2">
          Sub-step 1: Create a Google Cloud account
        </h2>
        <p>
          To get started, you need to create a Google Cloud account. Follow
          these steps:
        </p>
        <ol className="list-decimal pl-4 mt-2">
          <li>
            Visit{" "}
            <Link
              className="underline"
              href="https://console.cloud.google.com/"
              target="blank"
            >
              Google Cloud Console
            </Link>
            .
          </li>
          <li>
            Click on "Create account" and follow the registration process.
          </li>
        </ol>
      </div>

      {/* Sub-step 2 */}
      <div className="bg-gray-200 p-4 rounded-md mb-4">
        <h2 className="text-xl font-semibold mb-2">
          Sub-step 2: Set up a new project
        </h2>
        <p>
          Once you have your Google Cloud account, create a new project for your
          Next.js app. Here's how:
        </p>
        <ol className="list-decimal pl-4 mt-2">
          <li>Go to the Google Cloud Console.</li>
          <li>Click on the project drop-down and select "New Project".</li>
          <li>Enter a project name and click "Create".</li>
        </ol>
      </div>

      {/* Sub-step 3 */}
      <div className="bg-gray-200 p-4 rounded-md mb-4">
        <h2 className="text-xl font-semibold mb-2">
          Sub-step 3: Generate API keys and credentials
        </h2>
        <p>
          For Firebase authentication, you'll need to generate API keys and
          credentials. Follow these steps:
        </p>
        <ol className="list-decimal pl-4 mt-2">
          <li>
            Inside your project, navigate to "APIs & Services" {">"}
            "Credentials".
          </li>
          <li>
            Click on "Create Credentials" and choose "API Key" or "Service
            account key".
          </li>
          {/* Add more detailed steps as needed */}
        </ol>
      </div>

      {/* Additional information or links */}
      <p className="mt-4">
        For more detailed instructions, refer to the{" "}
        <Link
          className="underline"
          href="https://cloud.google.com/gcp/getting-started"
        >
          Google Cloud Getting Started Guide
        </Link>
        .
      </p>
    </div>
  );
};

export default page;
