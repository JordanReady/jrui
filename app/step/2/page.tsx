import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">
        Step 2: Set up Firebase Project
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
          href="/step/1"
        >
          Prev Step
        </Link>
        <Link
          className=" px-4 py-2 text-black bg-white
          border-black border-2 "
          href="/step/3"
        >
          Next Step
        </Link>
      </div>

      {/* Sub-step 1 */}
      <div className="bg-gray-200 p-4 rounded-md mb-4">
        <h2 className="text-xl font-semibold mb-2">
          Sub-step 1: Create a Firebase account
        </h2>
        <p>
          To proceed with Firebase, you need to have a Firebase account. Follow
          these steps:
        </p>
        <ol className="list-decimal pl-4 mt-2">
          <li>
            Visit{" "}
            <Link
              className="underline"
              href="https://console.firebase.google.com/"
              target="blank"
            >
              Firebase Console
            </Link>
            .
          </li>
          <li>Click on "Get Started" and follow the registration process.</li>
        </ol>
      </div>

      {/* Sub-step 2 */}
      <div className="bg-gray-200 p-4 rounded-md mb-4">
        <h2 className="text-xl font-semibold mb-2">
          Sub-step 2: Add a new project
        </h2>
        <p>
          Once you have your Firebase account, create a new project for your
          Next.js app:
        </p>
        <ol className="list-decimal pl-4 mt-2">
          <li>Inside the Firebase Console, click on "Add project".</li>
          <li>Enter a project name and click "Continue".</li>
          {/* Add more detailed steps as needed */}
        </ol>
      </div>

      {/* Sub-step 3 */}
      <div className="bg-gray-200 p-4 rounded-md mb-4">
        <h2 className="text-xl font-semibold mb-2">
          Sub-step 3: Retrieve Firebase config settings
        </h2>
        <p>
          You'll need to obtain the Firebase config settings for your Next.js
          app. Here's how:
        </p>
        <ol className="list-decimal pl-4 mt-2">
          <li>Inside your Firebase project, go to "Project settings".</li>
          <li>
            Scroll down to the "Your apps" section and select the web app you
            created.
          </li>
          {/* Add more detailed steps as needed */}
        </ol>
      </div>

      {/* Additional information or links */}
      <p className="mt-4">
        For more detailed instructions, refer to the{" "}
        <Link
          className="underline"
          href="https://firebase.google.com/docs/web/setup"
          target="blank"
        >
          Firebase Web Setup Guide
        </Link>
        .
      </p>
    </div>
  );
};

export default page;
