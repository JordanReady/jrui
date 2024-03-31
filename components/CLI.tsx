import React from "react";
import { Info } from "lucide-react";
import Tooltip from "@/app/demo/components/Tooltip";

interface CLIProps {
  command: string;
  componentState?: string;
}

const CLI: React.FC<CLIProps> = ({ command, componentState }) => {
  return (
    <>
      <span className="flex gap-2">
        <h2 className=" text-primary text-2xl font-semibold mb-4">
          Easy CLI Install
        </h2>
        <Tooltip
          className="opacity-90 mt-[-1rem] transition-all duration-100 z-10"
          animationDirection="down"
          animationDuration={0}
          width={25}
          tip="To install the jrui-cli, run `npm install jrui-cli` in your terminal. Once installed, unleash its power by running `jrui help` to explore available commands, components and features."
        >
          <svg
            className="opacity-70 dark:opacity-90"
            width="18"
            height="18"
            viewBox="0 0 24 24"
          >
            <defs>
              <linearGradient id="infoGradient" gradientTransform="rotate(90)">
                <stop offset="0%" style={{ stopColor: "#9333ea" }} />
                <stop offset="100%" style={{ stopColor: "#3b82f6" }} />
              </linearGradient>
            </defs>
            <Info fill="url(#infoGradient)" />
          </svg>
        </Tooltip>
      </span>
      {componentState && (
        <p className="text-lg mb-4">
          Component Type:{" "}
          <span className="text-primary font-bold">{componentState}</span>
        </p>
      )}
      <pre className="w-max dark:bg-[#3b3b3b] bg-gray-200 p-4 rounded-md overflow-x-scroll">
        {command}
      </pre>
    </>
  );
};

export default CLI;
