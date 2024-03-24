"use client";
import React, { useEffect, useState } from "react";
import DocLayout from "../DocLayout";
import Reveal from "@/components/Reveal";
import CodeTemplate from "@/components/CodeTemplate";
import DemoTemplate from "@/components/DemoTemplate";
import AuthFormDemo from "@/components/demos/AuthFormDemo";
import FormDemo from "@/components/demos/FormDemo";
import CLI from "@/components/CLI";
import { useSession } from "next-auth/react";

const Form = () => {
  const [avatarState, setAvatarState] = useState("Default");
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      setAvatarState("Next/OAuth/Firebase");
    } else {
      setAvatarState("Default");
    }
  }, [session]);

  const handleDefaultButtonClick = () => {
    setAvatarState("Default");
    console.log("avatarState: " + avatarState);
  };

  const handleNextButtonClick = () => {
    setAvatarState("Next/OAuth/Firebase");
    console.log("avatarState: " + avatarState);
  };

  const changeState = (state: string) => {
    if (state === "Default") {
      setAvatarState("Next/OAuth/Firebase");
    }
    if (state === "Next/OAuth/Firebase") {
      setAvatarState("Default");
    }
  };

  return (
    <DocLayout>
      <Reveal className="container mx-auto py-8">
        <Reveal className="flex min-w-full flex-col md:flex-row md:justify-between mb-4">
          {avatarState === "Default" && (
            <h1 className="text-4xl font-bold ">Form</h1>
          )}
          {avatarState === "Next/OAuth/Firebase" && (
            <h1 className="text-4xl font-bold ">Auth Form</h1>
          )}

          <Reveal className="flex flex-row flex-wrap gap-2">
            <button
              className="btn-hover mt-2 md:mt-0 border-gradient px-4 py-2"
              onClick={handleDefaultButtonClick}
            >
              Default
            </button>
            <button
              className="btn-hover mt-2 md:mt-0 border-gradient px-4 py-2"
              onClick={handleNextButtonClick}
            >
              Next/OAuth/Firebase
            </button>
          </Reveal>
        </Reveal>
        <Reveal className="text-lg mb-4 mt-[-1rem]">
          Component Type:{" "}
          <span className="text-primary font-bold">{avatarState}</span>
        </Reveal>
        <Reveal>
          <section className="mb-8">
            <h3 className=" text-primary text-2xl font-semibold mb-4">
              Overview
            </h3>
            {avatarState === "Default" && (
              <Reveal>
                <p>
                  The Form component encapsulates a streamlined process for
                  users to submit their ideas efficiently. It comprises input
                  fields for both the idea name and a detailed description,
                  ensuring clarity and specificity in idea submissions. The Form
                  dynamically adjusts its display based on the user's
                  authentication status and submission status, providing a
                  seamless user experience. When authenticated, users can
                  readily submit their ideas through the Form. Conversely, when
                  not authenticated, a login prompt is displayed, guiding users
                  to authenticate before accessing the submission feature. This
                  versatile Form component facilitates idea submission with
                  ease, fostering engagement and interaction within the
                  application.
                </p>
                <Reveal>
                  <DemoTemplate
                    title="Demo"
                    code={`import React from "react";
import Reveal from "../Reveal";
import Jrui from "@/imgs/JRuiLogo.png";
import UserAvatar from "@/app/demo/components/UserAvatar";

const RevealDemo = () => {
  return (
    <Reveal className="container relative p-5 flex gap-16 flex-col md:flex-row center no-scroll">
      <Reveal delay={0.5}>
        <UserAvatar img={Jrui} size={25} className="hover:animate-ping" />
      </Reveal>
      <Reveal delay={0.75}>
        <UserAvatar
          img={Jrui}
          size={50}
          className=" border-4 border-[#9333ea] p-1 hover:animate-spin"
        />
      </Reveal>
      <Reveal delay={1}>
        <UserAvatar
          img={Jrui}
          size={75}
          className=" hover:translate-y-[-1rem] duration-100"
        />
      </Reveal>
      <Reveal delay={1.25}>
        <UserAvatar
          img={Jrui}
          size={100}
          className="border-2 border-white p-4 hover:p-2 hover:scale-125 transition-all duration-300"
        />
      </Reveal>
    </Reveal>
  );
};

export default RevealDemo;

`}
                  >
                    <FormDemo />
                  </DemoTemplate>
                </Reveal>
              </Reveal>
            )}
            {avatarState === "Next/OAuth/Firebase" && (
              <Reveal>
                <p>
                  The Auth Form component integrates authentication
                  functionality with a user submission form, offering a
                  comprehensive solution for idea management. Seamlessly
                  combining form elements with authentication prompts, Auth Form
                  ensures that only authenticated users can access the
                  submission feature. This component fosters a secure
                  environment for idea sharing while maintaining a user-friendly
                  interface. Auth Form empowers users to contribute their ideas
                  confidently, knowing that their submissions are safeguarded
                  behind authentication barriers. By leveraging authentication
                  capabilities, the Auth Form component enhances application
                  security and user trust, elevating the overall user
                  experience.
                </p>
                <Reveal>
                  <DemoTemplate
                    title="Demo"
                    code={`"use client";
import React from "react";
import Reveal from "../Reveal";
import Jrui from "@/imgs/JRuiLogo.png";
import UserAvatar from "@/app/demo/components/UserAvatarNextOAuthFirebase";
import { useSession } from "next-auth/react";
import { signIn } from "next-auth/react";

const RevealDemo = () => {
  const { data: session } = useSession();
  return (
    <>
      {!session && (
        <Reveal className="flex flex-col center">
          <h1 className="text-center">Login to view this demo!</h1>
          <button
            onClick={() => signIn()}
            className="btn-hover border-gradient px-4 py-2 mt-2"
          >
            Login
          </button>
        </Reveal>
      )}
      <Reveal className="container relative p-5 flex gap-16 flex-col md:flex-row center no-scroll">
        <Reveal delay={0.5}>
          <UserAvatar size={25} className="hover:animate-ping" />
        </Reveal>
        <Reveal delay={0.75}>
          <UserAvatar
            size={50}
            className=" border-4 border-[#9333ea] p-1 hover:animate-spin"
          />
        </Reveal>
        <Reveal delay={1}>
          <UserAvatar
            size={75}
            className=" hover:translate-y-[-1rem] duration-100"
          />
        </Reveal>
        <Reveal delay={1.25}>
          <UserAvatar
            size={100}
            className="border-2 border-white p-4 hover:p-2 hover:scale-125 transition-all duration-300"
          />
        </Reveal>
      </Reveal>
    </>
  );
};

export default RevealDemo;

`}
                  >
                    <AuthFormDemo />
                  </DemoTemplate>
                </Reveal>
              </Reveal>
            )}
          </section>
        </Reveal>

        {avatarState === "Default" && (
          <Reveal className="mb-6">
            <CLI
              command={"jrui add form reveal"}
              componentState={avatarState}
            />
          </Reveal>
        )}

        {avatarState === "Next/OAuth/Firebase" && (
          <Reveal className="mb-6">
            <CLI
              command={"jrui add authForm reveal"}
              componentState={avatarState}
            />
            <p className=" font-bold">
              Note: Running this command will modify your next.config.mjs file
              to enable the component to display Google images. If you haven't
              customized this file for image handling, you're all set. However,
              any existing customizations will be overwritten. Consider backing
              up your current next.config.mjs file before proceeding.
            </p>
          </Reveal>
        )}

        <Reveal>
          <section className="mb-8">
            <h3 className="text-primary text-2xl font-semibold mb-4">
              Component Files
            </h3>
            <Reveal className="text-lg mb-4">
              Component Type:{" "}
              <span className="text-primary font-bold">{avatarState}</span>
              <br />
              <button
                className="btn-hover border-gradient px-4 py-2 mt-2"
                onClick={() => changeState(avatarState)}
              >
                Change Type
              </button>
            </Reveal>
            {avatarState === "Default" && (
              <CodeTemplate
                fileName="components > Form.tsx"
                code={`"use client";
import React, { useState } from "react";
import Jrui from "@/imgs/JRuiLogo.png";
import Image from "next/image";
import Reveal from "@/components/Reveal";

const Form = () => {
    // State to manage form input values
    const [ideaName, setIdeaName] = useState("");
    const [ideaDescription, setIdeaDescription] = useState("");
    const [submitted, setSubmitted] = useState(false);

    // Function to handle form submission
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Your form logic here
    setSubmitted(true); // Temporary logic to simulate submission
    };

    return (
    <Reveal className="center mt-10">
        <div className="w-max flex">
        <Reveal className="center">
            <Image
            src={Jrui}
            width={300}
            height={300}
            alt="It's Jrui the mascot!!"
            className="hidden md:flex"
            priority={true}
            />
        </Reveal>

        {/* Conditional rendering based on submission status */}
        <Reveal>
            {submitted ? ( // If idea has been submitted
            // Reveal animation for thank you message
            <Reveal className="md:w-[512px] mx-auto p-4 md:pr-14 ">
                <h1 className="text-primary mb-4 text-3xl font-semibold">
                Thank you!
                </h1>
                <p>
                Your idea has been submitted. I will look into it as soon as
                possible.
                </p>
            </Reveal>
            ) : (
            // If idea has not been submitted
            // Form for submitting ideas
            <form className="md:w-[512px] mx-auto p-4" onSubmit={handleSubmit}>
                <h1 className="text-primary mb-4 text-3xl font-semibold">
                Share your Ideas!
                </h1>
                {/* Input field for idea name */}
                <div className="mb-4">
                <label htmlFor="ideaName" className="block font-medium">
                    What is your idea about?
                </label>
                <input
                    type="text"
                    id="ideaName"
                    value={ideaName}
                    onChange={(e) => setIdeaName(e.target.value)}
                    required
                    className="mt-1 p-2 w-full border "
                    placeholder="Component, Section, Feature, Template"
                />
                </div>

                {/* Textarea for idea description */}
                <div className="mb-4">
                <label htmlFor="ideaDescription" className="block font-medium">
                    Give a detailed description:
                </label>
                <textarea
                    id="ideaDescription"
                    value={ideaDescription}
                    onChange={(e) => setIdeaDescription(e.target.value)}
                    required
                    className="mt-1 p-2 w-full border "
                    rows={4}
                    placeholder="Let's hear this amazing idea!"
                />
                </div>

                {/* Submit button */}
                <button
                type="submit"
                className="w-full px-4 py-2 border border-gradient btn-hover"
                >
                Submit Idea
                </button>
            </form>
            )}
        </Reveal>
        </div>
    </Reveal>
    );
};

export default Form;
                
`}
              />
            )}
            {avatarState === "Next/OAuth/Firebase" && (
              <CodeTemplate
                fileName="components > AuthForm.tsx"
                code={`"use client";
import React, { useState } from "react";
import Jrui from "@/imgs/JRuiLogo.png";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { signIn, useSession } from "next-auth/react";

const AuthForm = () => {
    // modify for your form info
    const [ideaName, setIdeaName] = useState<string>("");
    const [ideaDescription, setIdeaDescription] = useState<string>("");
    const { data: session } = useSession();
    const [submitted, setSubmitted] = useState<boolean>(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Your form logic here!
    setSubmitted(true); // Temporary logic to simulate submission
    };

    const handleButtonClick = () => {
    signIn();
    };

    return (
    <Reveal className="center mt-10">
        <div className="w-max flex">
        <Reveal className="center">
            <Image
            src={Jrui}
            width={300}
            height={300}
            alt="It's Jrui the mascot!!"
            className="hidden md:flex"
            priority={true}
            />
        </Reveal>

        {/* Conditional rendering based on session and submission status */}
        <Reveal>
            {session ? ( // If user is authenticated
            submitted ? ( // If idea has been submitted
                // Reveal animation for thank you message
                <Reveal className="md:w-[512px] mx-auto p-4 md:pr-14 ">
                <h1 className="text-primary mb-4 text-3xl font-semibold">
                    Thank you!
                </h1>
                <p>
                    Your idea has been submitted. I will look into it as soon as
                    possible.
                </p>
                </Reveal>
            ) : (
                // If idea has not been submitted
                // Form for submitting ideas
                <form
                className="md:w-[512px] mx-auto p-4"
                onSubmit={handleSubmit}
                >
                <h1 className="text-primary mb-4 text-3xl font-semibold">
                    Share your Ideas!
                </h1>
                {/* Input field for idea name */}
                <div className="mb-4">
                    <label htmlFor="ideaName" className="block font-medium">
                    What is your idea about?
                    </label>
                    <input
                    type="text"
                    id="ideaName"
                    value={ideaName}
                    onChange={(e) => setIdeaName(e.target.value)}
                    required
                    className="mt-1 p-2 w-full border "
                    placeholder="Component, Section, Feature, Template"
                    />
                </div>

                {/* Textarea for idea description */}
                <div className="mb-4">
                    <label
                    htmlFor="ideaDescription"
                    className="block font-medium"
                    >
                    Give a detailed description:
                    </label>
                    <textarea
                    id="ideaDescription"
                    value={ideaDescription}
                    onChange={(e) => setIdeaDescription(e.target.value)}
                    required
                    className="mt-1 p-2 w-full border "
                    rows={4}
                    placeholder="Let's hear this amazing idea!"
                    />
                </div>

                {/* Submit button */}
                <button
                    type="submit"
                    className="w-full px-4 py-2 border border-gradient btn-hover"
                >
                    Submit Idea
                </button>
                </form>
            )
            ) : (
            // If user is not authenticated
            // Reveal animation for login prompt
            <Reveal className="flex flex-col h-full center items-center justify-center">
                <p className="text-center text-primary text-2xl font-semibold">
                You must log in to submit an idea.
                </p>
                {/* Button to trigger authentication */}
                <button
                className="px-4 py-2 border border-gradient btn-hover"
                onClick={handleButtonClick}
                >
                Login
                </button>
            </Reveal>
            )}
        </Reveal>
        </div>
    </Reveal>
    );
};

export default AuthForm;
`}
              />
            )}
          </section>
        </Reveal>
        <Reveal>
          <section className="mb-8">
            <h3 className="text-primary text-2xl font-semibold mb-4">
              Example Use Case
            </h3>
            <Reveal className="text-lg mb-4">
              Component Type:{" "}
              <span className="text-primary font-bold">{avatarState}</span>
              <br />
              <button
                className="btn-hover border-gradient px-4 py-2 mt-2"
                onClick={() => changeState(avatarState)}
              >
                Change Type
              </button>
            </Reveal>
            {avatarState === "Default" && (
              <CodeTemplate
                fileName="Example.tsx"
                code={`import React from "react";
import Form from "@/components/Form"; // Adjust the import path based on your project structure

const Example: React.FC = () => {
  return (
    <Form/>
  );
};

export default Example;
              
`}
              />
            )}
            {avatarState === "Next/OAuth/Firebase" && (
              <CodeTemplate
                fileName="Example.tsx"
                code={`import React from "react";
import AuthForm from "@/components/AuthForm"; // Adjust the import path based on your project structure

const Example: React.FC = () => {
  return (
    <AuthForm/>
  );
};

export default Example;
              
`}
              />
            )}
          </section>
        </Reveal>
      </Reveal>
    </DocLayout>
  );
};

export default Form;
