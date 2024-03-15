"use client";
import React, { useState } from "react";
import Tooltip from "@/app/demo/components/Tooltip";
import Jrui from "@/imgs/JRuiLogo.png";
import Image from "next/image";
import Reveal from "../Reveal";

const TooltipDemoForm = () => {
  const [tip, setTip] = useState(
    "What's Crakin! It's ya boi Jrui coming at ya with a tip!"
  );
  const [width, setWidth] = useState("14");
  const [offset, setOffset] = useState("0");
  const [animationDirection, setAnimationDirection] = useState("up");
  const [delayIn, setDelayIn] = useState(420);
  const [delayOut, setDelayOut] = useState(200);
  const [animationDuration, setAnimationDuration] = useState(0.2);
  const [className, setClassName] = useState("");

  return (
    <div className="flex flex-col md:flex-row">
      <form className="w-2/3 p-8">
        <div className="mb-4 flex flex-col">
          <label className="text-primary font-semibold" htmlFor="tip">
            Tip:
          </label>
          <input
            type="text"
            id="tip"
            value={tip}
            onChange={(e) => setTip(e.target.value)}
            className="p-2 border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="text-primary font-semibold" htmlFor="width">
            Width (rem):
          </label>
          <input
            type="text"
            id="width"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
            className="p-2 border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="text-primary font-semibold" htmlFor="offset">
            Offset (rem):
          </label>
          <input
            type="text"
            id="offset"
            value={offset}
            onChange={(e) => setOffset(e.target.value)}
            className="p-2 border rounded-md"
          />
        </div>

        <div className="mb-4 flex flex-col">
          <label
            className="text-primary font-semibold"
            htmlFor="animationDirection"
          >
            Animation Direction:
          </label>
          <select
            id="animationDirection"
            value={animationDirection}
            onChange={(e) =>
              setAnimationDirection(
                e.target.value as "up" | "down" | "left" | "right"
              )
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
          <label className="text-primary font-semibold" htmlFor="delayIn">
            Delay In (milliseconds):
          </label>
          <input
            type="number"
            id="delayIn"
            value={delayIn}
            onChange={(e) => setDelayIn(parseInt(e.target.value))}
            className="p-2 border rounded-md w-full"
          />
        </div>

        <div className="mb-4">
          <label className="text-primary font-semibold" htmlFor="delayOut">
            Delay Out (milliseconds):
          </label>
          <input
            type="number"
            id="delayOut"
            value={delayOut}
            onChange={(e) => setDelayOut(parseInt(e.target.value))}
            className="p-2 border rounded-md w-full"
          />
        </div>

        <div className="mb-4">
          <label
            className="text-primary font-semibold"
            htmlFor="animationDuration"
          >
            Animation Duration (seconds):
          </label>
          <input
            type="number"
            id="animationDuration"
            value={animationDuration}
            onChange={(e) => setAnimationDuration(parseFloat(e.target.value))}
            step="0.1"
            min="0"
            className="p-2 border rounded-md w-full"
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
            placeholder="Enter additional CSS classes for custom styling"
          />
        </div>
      </form>

      <div className="flex w-full  flex-col gap-4 center">
        <div className="w-[300px] h-[420px] center border-gradient bg-slate-200 dark:dark:bg-slate-900">
          <Tooltip
            tip={tip}
            width={width as number | "max-content"}
            offset={offset as number | "50%"}
            animationDirection={
              animationDirection as "up" | "down" | "left" | "right"
            }
            delayIn={delayIn}
            delayOut={delayOut}
            animationDuration={animationDuration}
            className={className}
          >
            <Reveal className="z-10">
              <Image
                className="mt-[-3rem]"
                width={375}
                src={Jrui}
                alt="It's Jrui the mascott!!"
              />
            </Reveal>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default TooltipDemoForm;
