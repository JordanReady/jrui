"use client";
import React, { useState } from "react";
import TypedComponent from "@/app/demo/components/Typed";
import Jrui from "@/imgs/JRuiLogo.png";
import Image from "next/image";

const TypedDemoForm: React.FC = () => {
  const [strings, setStrings] = useState<string[]>([
    "Full-Stack Developer",
    "Keyboard Warrior",
    "Software Engineer",
    "Coding Enthusiast",
    "Problem Solver",
  ]);
  const [startDelay, setStartDelay] = useState<number>(1000);
  const [typeSpeed, setTypeSpeed] = useState<number>(100);
  const [backSpeed, setBackSpeed] = useState<number>(50);
  const [backDelay, setBackDelay] = useState<number>(500);
  const [loop, setLoop] = useState<boolean>(true);
  const [className, setClassName] = useState<string>("");
  const [applySettings, setApplySettings] = useState<boolean>(false);

  const handleView = () => {
    setApplySettings(!applySettings);
    setTimeout(() => {
      setApplySettings(false);
    }, 500);
  };

  return (
    <div className="flex flex-col md:flex-row">
      <form className="w-2/3 p-8">
        <div className="mb-4 flex flex-col">
          <label className="text-primary font-semibold" htmlFor="strings">
            Strings:
          </label>
          <input
            type="text"
            id="strings"
            value={strings.join(", ")}
            onChange={(e) => setStrings(e.target.value.split(", "))}
            className="w-full p-2 border rounded-md"
            placeholder="Enter comma-separated strings"
          />
        </div>

        <div className="mb-4">
          <label className="text-primary font-semibold" htmlFor="startDelay">
            Start Delay (ms):
          </label>
          <input
            type="number"
            id="startDelay"
            value={startDelay}
            onChange={(e) => setStartDelay(parseFloat(e.target.value))}
            className="w-full p-2 border rounded-md"
            min="0"
          />
        </div>

        <div className="mb-4">
          <label className="text-primary font-semibold" htmlFor="typeSpeed">
            Type Speed (ms/char):
          </label>
          <input
            type="number"
            id="typeSpeed"
            value={typeSpeed}
            onChange={(e) => setTypeSpeed(parseFloat(e.target.value))}
            className="w-full p-2 border rounded-md"
            min="0"
          />
        </div>

        <div className="mb-4">
          <label className="text-primary font-semibold" htmlFor="backSpeed">
            Back Speed (ms/char):
          </label>
          <input
            type="number"
            id="backSpeed"
            value={backSpeed}
            onChange={(e) => setBackSpeed(parseFloat(e.target.value))}
            className="w-full p-2 border rounded-md"
            min="0"
          />
        </div>

        <div className="mb-4">
          <label className="text-primary font-semibold" htmlFor="backDelay">
            Back Delay (ms):
          </label>
          <input
            type="number"
            id="backDelay"
            value={backDelay}
            onChange={(e) => setBackDelay(parseFloat(e.target.value))}
            className="w-full p-2 border rounded-md"
            min="0"
          />
        </div>

        <div className="mb-4 flex flex-col">
          <label className="text-primary font-semibold" htmlFor="loop">
            Loop:
          </label>
          <select
            id="loop"
            value={loop.toString()}
            onChange={(e) => setLoop(e.target.value === "true")}
            className="p-2 border rounded-md"
          >
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="text-primary font-semibold" htmlFor="className">
            Class Name:
          </label>
          <input
            type="text"
            id="className"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
            className="w-full p-2 border rounded-md"
            placeholder="Try Tailwind here!"
          />
        </div>
        <div className="flex gap-1">
          <button
            type="button"
            onClick={handleView}
            className="border-gradient border  p-2 rounded-md"
          >
            Apply Settings
          </button>
        </div>
      </form>
      <div className="flex w-full h-[420] center">
        <div className="w-[300px] h-[300px] center border-gradient bg-slate-200 dark:dark:bg-slate-900">
          {applySettings ? (
            <div className="flex flex-col items-center justify-center">
              <p className="text-primary font-semibold">Loading...</p>
            </div>
          ) : (
            <TypedComponent
              strings={strings}
              startDelay={startDelay}
              typeSpeed={typeSpeed}
              backSpeed={backSpeed}
              backDelay={backDelay}
              loop={loop}
              className={className}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default TypedDemoForm;
