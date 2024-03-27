// Tooltip.tsx
"use client";
import React, { ReactNode, useState } from "react";
import Reveal from "./Reveal";

interface TooltipProps {
  tip: string;
  width?: number;
  left?: string;
  style?: string;
  children: ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({
  tip,
  style,
  width,
  left,
  children,
}) => {
  const [isHovered, setHovered] = useState(false);

  return (
    <div
      className="relative z-[999] inline-block"
      onMouseEnter={() => setTimeout(() => setHovered(true), 300)}
      onMouseLeave={() => setTimeout(() => setHovered(false), 300)}
    >
      {children}
      {isHovered && (
        <Reveal className="mt-1" direction="up" duration={0.2}>
          <div
            className={` ${style} hidden md:block absolute top-full transform -translate-x-1/2 bg-white dark:bg-[#020817] border border-gradient z-[999]`}
            style={{ width: width, left: left }}
          >
            <p className="p-1 text-[14px] text-center m-0">{tip}</p>
          </div>
        </Reveal>
      )}
    </div>
  );
};

export default Tooltip;
