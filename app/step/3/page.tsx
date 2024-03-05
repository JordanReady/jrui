import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">
        Step 3: Set up env files and firebase.ts
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
          Prev Step
        </Link>
        <Link
          className=" px-4 py-2 text-black bg-white
          border-black border-2 "
          href="/step/4"
        >
          Next Step
        </Link>
      </div>

      {/* Sub-step 1 */}
      <div className="bg-gray-200 p-4 rounded-md mb-4">
        <h2 className="text-xl font-semibold mb-2">
          Sub-step 1: Create a .env file
        </h2>
        <p>
          Configure environment variables by creating a `.env` file in your
          project's root:
        </p>
        <ol className="list-decimal pl-4 mt-2">
          <li>
            Create a new file named `.env` in your project's root directory.
          </li>
          <li>
            Add environment variables for your Google Cloud and Firebase
            configurations.
          </li>
          {/* Add more detailed steps as needed */}
        </ol>
      </div>

      {/* Sub-step 2 */}
      <div className="bg-gray-200 p-4 rounded-md mb-4">
        <h2 className="text-xl font-semibold mb-2">
          Sub-step 2: Create a firebase.ts file
        </h2>
        <p>
          Create a `firebase.ts` file to manage Firebase initialization and
          configuration:
        </p>
        <ol className="list-decimal pl-4 mt-2">
          <li>Create a new file named `firebase.ts` in your project.</li>
          <li>
            Copy the necessary Firebase initialization code into this file.
          </li>
          {/* Add more detailed steps as needed */}
        </ol>
      </div>

      {/* Additional information or links */}
      <p className="mt-4">
        View the{" "}
        <Link
          className="underline"
          href="https://nextjs.org/docs/basic-features/environment-variables"
        >
          Next.js Environment Variables documentation
        </Link>
        for details on setting up environment variables.
      </p>
    </div>
  );
};

export default page;
