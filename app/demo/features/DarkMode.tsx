"use client";
import Reveal from "@/components/Reveal";
import React from "react";
import Image from "next/image";
import Sun from "@/imgs/Sun.png";
import Moon from "@/imgs/Moon.png";
import { useTheme } from "next-themes";

const Demo = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div className="container mt-24 m-auto flex flex-wrap justify-around items-center py-4 px-8">
      <div className="w-full sm:w-[50%] mt-[76px] flex-col center sm:block max-w-[469px] ">
        <Reveal className="flex">
          <h1 className=" text-6xl sm:text-[200px] font-bold mb-4">
            JR
            <span className="bg-black text-primary font-normal">ui</span>
            <span className=" font-light text-4xl text-slate-400 dark:text-slate-600">
              Demo
            </span>
          </h1>
        </Reveal>
        <Reveal className="flex" delay={0.4}>
          <p className="sm:text-4xl text-left ">
            Elevate your UI experience with{" "}
            <span className=" font-semibold">JR</span>
            <span className="bg-black text-primary">ui</span> <br />
            This is an example of what the page would look like in{" "}
            <span className="text-primary">
              {" "}
              {theme === "light" ? "Light" : "Dark"}
            </span>{" "}
            Mode.
          </p>
        </Reveal>
        <Reveal className="flex" delay={0.6}>
          <button
            className=" mt-4 btn-hover px-4 py-2 text-4xl border border-gradient"
            onClick={toggleTheme}
          >
            {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
            <span className="sr-only">Toggle theme</span>
          </button>
        </Reveal>
      </div>

      <Reveal className=" max-w-[469px] flex flex-col  content-end border-gradient center  mt-20 bg-slate-100 dark:bg-slate-900">
        {theme === "light" ? (
          <Image src={Sun} alt="img of sun"></Image>
        ) : (
          <Image src={Moon} alt="img of Moon"></Image>
        )}
      </Reveal>
    </div>
  );
};

export default Demo;
