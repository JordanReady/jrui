"use client";
import React, { useState } from "react";
import Reveal from "@/components/Reveal";

interface RevealDemoProps {
  direction: "up" | "down" | "left" | "right";
  delay: number;
  duration: number;
  className: string;
  animate: boolean;
}

const RevealDemo: React.FC<RevealDemoProps> = ({
  direction,
  delay,
  duration,
  className,
  animate,
}) => {
  return (
    <div className="w-[800px] mx-auto mt-8">
      <div className={`border border-gradient border-bottom-none p-1`}>
        <h2>Demo</h2>
        <div className="bg-gray-300 p-4 rounded-md">
          {animate && (
            <Reveal
              direction={direction}
              delay={delay}
              duration={duration}
              className={className}
            >
              <div className="bg-gray-300 p-4 rounded-md">Your Content</div>
            </Reveal>
          )}
        </div>
      </div>
    </div>
  );
};

const RevealDemoForm: React.FC = () => {
  const [direction, setDirection] = useState<"up" | "down" | "left" | "right">(
    "up"
  );
  const [delay, setDelay] = useState<number>(0.2);
  const [duration, setDuration] = useState<number>(0.5);
  const [className, setClassName] = useState<string>("");
  const [animate, setAnimate] = useState(false);

  const handleView = () => {
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
    }, 5000);
  };

  return (
    <div className="flex flex-col md:flex-row">
      <form className="w-1/2 p-8">
        <div className="mb-4 flex flex-col">
          <label className="text-primary font-semibold" htmlFor="direction">
            Direction:
          </label>
          <select
            id="direction"
            value={direction}
            onChange={(e) =>
              setDirection(e.target.value as "up" | "down" | "left" | "right")
            }
            className="p-2 border rounded-md"
          >
            <option value="up">Up</option>
            <option value="down">Down</option>
            <option value="left">Left</option>
            <option value="right">Right</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="text-primary font-semibold" htmlFor="delay">
            Delay (seconds):
          </label>
          <input
            type="number"
            id="delay"
            value={delay}
            onChange={(e) => setDelay(parseFloat(e.target.value))}
            step="0.1"
            min="0"
            className="p-2 border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="text-primary font-semibold" htmlFor="duration">
            Duration (seconds):
          </label>
          <input
            type="number"
            id="duration"
            value={duration}
            onChange={(e) => setDuration(parseFloat(e.target.value))}
            step="0.1"
            min="0"
            className="p-2 border rounded-md"
          />
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
            className="p-2 border rounded-md"
            placeholder="Try Tailwind here!"
          />
        </div>
        {animate ? (
          <button
            type="button"
            onClick={handleView}
            className="bg-blue-500 text-white p-2 rounded-md"
            disabled={true}
          >
            View
          </button>
        ) : (
          <button
            type="button"
            onClick={handleView}
            className="border-gradient border btn-hover p-2 rounded-md"
          >
            View Animation
          </button>
        )}
      </form>
      <div className="flex w-full h-[420] center">
        <div className="w-[300px] h-[300px] center bg-slate-200">
          {animate ? (
            <Reveal
              direction={direction}
              delay={delay}
              duration={duration}
              className={className}
            >
              <h1 className=" text-6xl md:text-9xl font-bold mb-4">
                JR
                <span className="bg-black text-primary">ui</span>
              </h1>
            </Reveal>
          ) : (
            <h1
              className={` text-6xl md:text-9xl font-bold mb-4 ${className} `}
            >
              JR
              <span className="bg-black text-primary">ui</span>
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default RevealDemoForm;
