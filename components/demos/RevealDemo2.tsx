"use client";
import React, { useState } from "react";
import Reveal from "@/components/Reveal";
import Jrui from "@/imgs/JRuiLogo.png";
import Image from "next/image";

const RevealDemoForm: React.FC = () => {
  const [direction, setDirection] = useState<"up" | "down" | "left" | "right">(
    "up"
  );
  const [delay, setDelay] = useState<number>(0.2);
  const [duration, setDuration] = useState<number>(0.5);
  const [className, setClassName] = useState<string>("");
  const [animate, setAnimate] = useState(false);
  const [showImg, setShowImg] = useState(false);

  const handleView = () => {
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
    }, 3500);
  };

  const handleImg = () => {
    setShowImg(!showImg);
  };

  return (
    <div className="flex flex-col md:flex-row">
      <form className="w-2/3 p-8">
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
            className="p-2 border rounded-md w-full"
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
            className="w-full p-2 border rounded-md"
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
            className="w-full p-2 border rounded-md"
            placeholder="Try Tailwind here!"
          />
        </div>
        <div className="flex gap-1">
          {animate ? (
            <button
              type="button"
              onClick={handleView}
              className="border-gradient border  p-2 rounded-md"
              disabled={true}
            >
              View Animation
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
          <button
            type="button"
            onClick={handleImg}
            className="border-gradient border btn-hover p-2 rounded-md"
          >
            Change Child
          </button>
        </div>
      </form>
      <div className="flex w-full h-[420] center">
        <div className="w-[300px] h-[300px] center border-gradient bg-slate-200 dark:dark:bg-slate-900">
          {animate && (
            <Reveal
              direction={direction}
              delay={delay}
              duration={duration}
              className={className}
            >
              <div>
                {showImg ? (
                  <Image
                    alt="It's Jrui the mascott!!"
                    src={Jrui}
                    width={300}
                    height={300}
                    placeholder="blur"
                  />
                ) : (
                  <h1 className="text-6xl md:text-9xl font-bold mb-4">
                    JR
                    <span className=" text-primary font-normal">ui</span>
                  </h1>
                )}
              </div>
            </Reveal>
          )}
          {!animate && (
            <div className={className}>
              {showImg ? (
                <Image
                  alt="It's Jrui the mascott!!"
                  src={Jrui}
                  width={300}
                  height={300}
                />
              ) : (
                <h1 className="text-6xl md:text-9xl font-bold mb-4">
                  JR
                  <span className=" text-primary font-normal">ui</span>
                </h1>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RevealDemoForm;
