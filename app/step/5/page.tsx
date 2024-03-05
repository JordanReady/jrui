import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">
        Step 5: Deploy Your Next.js App to Vercel
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
          href="/step/4"
        >
          Prev Step
        </Link>
      </div>

      <p className="text-lg mb-4">
        You're almost there! Let's deploy your Next.js app to Vercel and make it
        live for the world to see.
      </p>

      <div className="bg-gray-200 p-4 rounded-md mb-4">
        <h2 className="text-xl font-semibold mb-2">Prerequisites</h2>
        <p>
          Before you proceed, make sure you have a Vercel account. If not, you
          can sign up at{" "}
          <Link className="underline" href="https://vercel.com/" target="blank">
            Vercel
          </Link>
          .
        </p>
      </div>

      <div className="bg-gray-200 p-4 rounded-md mb-4">
        <h2 className="text-xl font-semibold mb-2">Deployment Steps</h2>
        <ol className="list-decimal pl-4 mt-2">
          <li>
            Install the Vercel CLI by running:
            <pre className="bg-gray-300 p-2 rounded-md mt-2">
              npm install -g vercel
            </pre>
          </li>
          <li>Navigate to your project folder in the terminal.</li>
          <li>
            Run the following command to deploy your app:
            <pre className="bg-gray-300 p-2 rounded-md mt-2">vercel</pre>
          </li>
          <li>Follow the prompts to set up your deployment settings.</li>
          <li>
            Once deployed, your app will have a unique URL provided by Vercel.
          </li>
        </ol>
      </div>

      <p>
        Congratulations! Your Next.js app is now live on the internet. Share the
        provided URL with the world.
      </p>
    </div>
  );
};

export default page;
