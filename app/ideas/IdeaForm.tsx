"use client";
import React, { useState } from "react";
import Jrui from "@/imgs/JRuiLogo.png";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { submitIdea } from "@/utils/firebaseUtils";
import { db } from "@/firebase";
import { signIn, useSession } from "next-auth/react";

const IdeaForm = () => {
  const [ideaName, setIdeaName] = useState<string>("");
  const [ideaDescription, setIdeaDescription] = useState<string>("");
  const { data: session } = useSession();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await submitIdea(db, ideaName, ideaDescription);

      // Reset the form fields after successful submission
      setIdeaName("");
      setIdeaDescription("");
    } catch (error) {
      // Handle error if submission fails
      console.error("Failed to submit idea:", error);
    }
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
        <Reveal>
          {session ? (
            <form
              className="md:w-[512px] mx-auto p-4 md:pr-14 "
              onSubmit={handleSubmit}
            >
              <h1 className="text-primary mb-4 text-3xl font-semibold">
                Share your Ideas!
              </h1>
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

              <div className="mb-4">
                <label htmlFor="ideaDescription" className="block font-medium">
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
                className="w-full px-4 py-2 border border-gradient btn-hover"
              >
                Submit Idea
              </button>
            </form>
          ) : (
            <Reveal className="flex flex-col h-full center items-center justify-center">
              <p className="text-center text-primary text-2xl font-semibold">
                You must log in to submit an idea.
              </p>
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

export default IdeaForm;
