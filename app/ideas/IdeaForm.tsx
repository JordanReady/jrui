"use client";
import React, { useState } from "react";
import Jrui from "@/imgs/JRuiLogo.png";
import Image from "next/image";
import Reveal from "@/components/Reveal";

const IdeaForm = () => {
  const [ideaName, setIdeaName] = useState("");
  const [ideaDescription, setIdeaDescription] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Handle the submission logic (e.g., send data to server, update state, etc.)
    console.log("Submitted:", { ideaName, ideaDescription });

    // Reset the form fields
    setIdeaName("");
    setIdeaDescription("");
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
              Share your Ideas!
            </h1>
            <div className="mb-4">
              <label htmlFor="ideaName" className="block  font-medium ">
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

            <div className="mb-4">
              <label htmlFor="ideaDescription" className="block  font-medium ">
                Give me a detailed description:
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

            <button
              type="submit"
              className=" w-full px-4 py-2 border border-gradient btn-hover"
            >
              Submit Idea
            </button>
          </form>
        </Reveal>
      </div>
    </Reveal>
  );
};

export default IdeaForm;
