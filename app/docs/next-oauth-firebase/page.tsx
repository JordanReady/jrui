import React from "react";
import DocLayout from "../DocLayout";
import Reveal from "@/components/Reveal";
import Link from "next/link";

const NextOauthFirebase = () => {
  return (
    <DocLayout>
      <div className="container mx-auto py-8">
        <Reveal>
          <h1 className="text-4xl font-bold mb-4">Next OAuth and Firebase</h1>
        </Reveal>
        <Reveal>
          <section className="mb-8">
            <h3 className=" text-primary text-2xl font-semibold mb-4">
              Overview
            </h3>
            <p>
              Kickstart Your Next.js Journey with OAuth and Firebase. Welcome to
              your Next.js app, pre-equipped with NextAuth.js and Firebase for
              seamless authentication. Follow the outlined steps to effortlessly
              set up your project. If you're new to any part of the process,
              dive into the detailed step-by-step guides by clicking on the
              respective steps card.
            </p>
            <div className="btn-hover border-gradient border mt-2 py-2 px-4 w-max">
              <Link
                target="blank"
                href={"https://auth-firebase-starter-kit.vercel.app/"}
              >
                Live Preview
              </Link>
            </div>
          </section>
        </Reveal>

        {/* Step 1: Clone the Repo */}
        <Reveal>
          <section className="mb-8">
            <h3 className=" text-primary text-2xl font-semibold mb-4">
              Step 1: Clone the Repo
            </h3>

            <p>
              Before you begin, clone the template repository to get started
              with the project. Open your terminal and run the following command
              where you want to keep your project code:
            </p>
            <pre className="w-max bg-gray-200 p-4 rounded-md overflow-x-auto max-w-[90dvw]">
              {`git clone https://github.com/JordanReady/auth-firebase-starter-kit.git your-app-name`}
            </pre>
          </section>
        </Reveal>

        {/* Step 2: Set up Google Cloud Account */}
        <Reveal>
          <section className="mb-8">
            <h3 className=" text-primary text-2xl font-semibold mb-4">
              Step 2: Set up Google Cloud Account
            </h3>
            <p>
              Follow these steps to create a Google Cloud account and set up
              your project for this Next.js app:
            </p>
            <ol>
              <li>Create a Google Cloud account at Google Cloud Console.</li>
              <li>Set up a new project for your Next.js app.</li>
              <li>
                Generate API keys and credentials for Firebase authentication.
              </li>
            </ol>
            <p>
              For detailed instructions, refer to the Google Cloud Getting
              Started Guide.
            </p>
          </section>
        </Reveal>

        {/* Step 3: Set up Firebase Project */}
        <Reveal>
          <section className="mb-8">
            <h3 className=" text-primary text-2xl font-semibold mb-4">
              Step 3: Set up Firebase Project
            </h3>
            <p>
              Now, let's set up a Firebase project to use as the backend for
              your Next.js app:
            </p>
            <ol>
              <li>Create a Firebase account at Firebase Console.</li>
              <li>
                Add a new project and configure Firebase for web applications.
              </li>
              <li>
                Retrieve the Firebase config settings, including the apiKey,
                authDomain, projectId, and storageBucket.
              </li>
            </ol>
            <p>
              Refer to the Firebase Web Setup Guide for detailed instructions.
            </p>
          </section>
        </Reveal>

        {/* Step 4: Set up env files and firebase.ts */}
        <Reveal>
          <section className="mb-8">
            <h3 className=" text-primary text-2xl font-semibold mb-4">
              Step 4: Set up env files and firebase.ts
            </h3>
            <p>
              Configure environment files and create a firebase.ts file to
              manage Firebase settings:
            </p>
            <ol>
              <li>Create a .env file in your project root with</li>
              <pre className="w-max bg-gray-200 p-4 rounded-md">
                cp .env.example .env
              </pre>
              <li>
                Replace the placeholder values with your newly set up Google
                Cloud and Firebase configs.
              </li>
              <li>
                Create a firebase.ts file with Firebase initialization and
                configuration.
              </li>
            </ol>
            <p>
              View the Next.js Environment Variables documentation for details
              on setting up environment variables.
            </p>
          </section>
        </Reveal>

        {/* Step 5: Customize and Develop Your App */}
        <Reveal>
          <section className="mb-8">
            <h3 className=" text-primary text-2xl font-semibold mb-4">
              Step 5: Customize and Develop Your App
            </h3>
            <p>
              Congratulations on completing the initial setup! Now it's time to
              customize the starter files and start developing your Next.js app.
            </p>
            <p>
              Feel free to tailor the page.tsx file in your app directory to
              match your project requirements.
            </p>
            <p>
              You have the flexibility to either remove or build upon the
              pre-made route folders. I've included about, protected, and step
              folders to kickstart your development.
            </p>
          </section>
        </Reveal>

        {/* Step 6: Deploy Your Next.js App to Vercel */}
        <Reveal>
          <section className="mb-8">
            <h3 className=" text-primary text-2xl font-semibold mb-4">
              Step 6: Deploy Your Next.js App to Vercel
            </h3>
            <p>
              You're almost there! Let's deploy your Next.js app to Vercel and
              make it live for the world to see.
            </p>
            <h4>Prerequisites:</h4>
            <ul>
              <li>
                Make sure you have a Vercel account. If not, you can sign up at
                Vercel.
              </li>
            </ul>
            <h4>Deployment Steps:</h4>
            <ol>
              <li>Install the Vercel CLI by running:</li>
              <pre className="w-max bg-gray-200 p-4 rounded-md">
                npm install -g vercel
              </pre>
              <li>Deploy to production by running:</li>
              <pre className="w-max bg-gray-200 p-4 rounded-md">
                vercel --prod
              </pre>
              <li>Import environment variables on Vercel</li>
            </ol>
            <p>
              Congratulations! Your Next.js app is now live on the internet.
              Share the provided URL with the world.
            </p>
          </section>
        </Reveal>
      </div>
    </DocLayout>
  );
};

export default NextOauthFirebase;
