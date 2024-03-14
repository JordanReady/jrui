"use client";
import React, { useEffect, useState } from "react";
import Jrui from "@/imgs/JRuiLogo.png";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { submitIssue } from "@/utils/firebaseUtils";
import { db } from "@/firebase";
import { signIn, useSession } from "next-auth/react";
import { customEvent } from "@/utils/CustomEvent";

const IssueForm: React.FC = () => {
  const [issueName, setIssueName] = useState<string>("");
  const [issueDescription, setIssueDescription] = useState<string>("");
  const { data: session } = useSession();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await submitIssue(db, issueName, issueDescription);

      // Reset the form fields after successful submission
      setIssueName("");
      setIssueDescription("");
      customEvent("Issue Submitted", "Issue Submitted");
    } catch (error) {
      // Handle error if submission fails
      console.error("Failed to submit issue:", error);
    }
  };

  const handleButtonClick = () => {
    signIn();
  };

  return (
    <Reveal className="center mt-10">
      <div className=" w-max flex ">
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
        <Reveal>
          {session ? (
            <form
              className="md:w-[512px] mx-auto p-4 md:pr-14 "
              onSubmit={handleSubmit}
            >
              <h1 className="text-primary mb-4 text-3xl font-semibold">
                Let's fix this issue!
              </h1>
              <div className="mb-4">
                <label htmlFor="issueName" className="block font-medium">
                  What are you experiencing issues with?
                </label>
                <input
                  type="text"
                  id="issueName"
                  value={issueName}
                  onChange={(e) => setIssueName(e.target.value)}
                  required
                  className="mt-1 p-2 w-full border "
                  placeholder="Component, Section, Feature, Template"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="issueDescription" className="block font-medium">
                  Give me a detailed description:
                </label>
                <textarea
                  id="issueDescription"
                  value={issueDescription}
                  onChange={(e) => setIssueDescription(e.target.value)}
                  required
                  className="mt-1 p-2 w-full border "
                  rows={4}
                  placeholder="Fix it yourself, you know what's wrong."
                />
              </div>

              <button
                type="submit"
                className="w-full px-4 py-2 border border-gradient btn-hover"
              >
                Submit Issue
              </button>
            </form>
          ) : (
            <Reveal className="flex flex-col h-full center items-center justify-center">
              <p className="text-center text-primary text-2xl font-semibold">
                You must log in to submit an issue.
              </p>
              <button
                className=" px-4 py-2 border border-gradient btn-hover"
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

export default IssueForm;
