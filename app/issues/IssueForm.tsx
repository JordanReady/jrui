"use client";
import React, { useState } from "react";
import Jrui from "@/imgs/JRuiLogo.png";
import Image from "next/image";
import Reveal from "@/components/Reveal";

const IssueForm = () => {
  const [issueName, setIssueName] = useState("");
  const [issueDescription, setIssueDescription] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Handle the submission logic (e.g., send data to server, update state, etc.)
    console.log("Submitted:", { issueName, issueDescription });

    // Reset the form fields
    setIssueName("");
    setIssueDescription("");
  };

  return (
    <Reveal className="center mt-10">
      <div className=" w-max flex ">
        <Reveal className="center">
          <Image
            src={Jrui}
            width={300}
            height={300}
            alt="It's Jrui the mascott!!"
            className="hidden md:flex"
          />
        </Reveal>
        <Reveal>
          <form
            className="md:w-[512px] mx-auto p-4 md:pr-14 "
            onSubmit={handleSubmit}
          >
            <h1 className="text-primary mb-4 text-3xl font-semibold">
              Let's fix this issue!
            </h1>
            <div className="mb-4">
              <label htmlFor="issueName" className="block  font-medium ">
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
              <label htmlFor="issueDescription" className="block  font-medium ">
                Give me a detailed description:
              </label>
              <textarea
                id="issueDescription"
                value={issueDescription}
                onChange={(e) => setIssueDescription(e.target.value)}
                required
                className="mt-1 p-2 w-full border "
                rows={4}
                placeholder="Fix it yourself you stupid bitch"
              />
            </div>

            <button
              type="submit"
              className=" w-full px-4 py-2 border border-gradient btn-hover"
            >
              Submit Issue
            </button>
          </form>
        </Reveal>
      </div>
    </Reveal>
  );
};

export default IssueForm;
