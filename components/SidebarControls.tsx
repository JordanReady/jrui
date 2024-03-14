import { Lightbulb, ShieldAlert } from "lucide-react";
import React from "react";
import Tooltip from "./Tooltip";
import Link from "next/link";

const SidebarControls = () => {
  return (
    <div className="flex gap-1 absolute right-0">
      <Tooltip
        width={220}
        left="-61px"
        tip="Have an issue with something? Let me know and I'll take a look!"
      >
        <Link className="opacity-70 dark:opacity-90" href={"/issues"}>
          <svg width="24" height="24" viewBox="0 0 24 24">
            <defs>
              <linearGradient
                id="shieldGradient"
                gradientTransform="rotate(90)"
              >
                <stop offset="0%" style={{ stopColor: "#9333ea" }} />
                <stop offset="100%" style={{ stopColor: "#3b82f6" }} />
              </linearGradient>
            </defs>
            <ShieldAlert fill="url(#shieldGradient)" />
          </svg>
        </Link>
      </Tooltip>
      <Tooltip
        width={220}
        left="-89px"
        tip="Have something in mind? Let me know what you want to see!"
      >
        <Link className="opacity-70 dark:opacity-90" href={"/ideas"}>
          <svg width="24" height="24" viewBox="0 0 24 24">
            <defs>
              <linearGradient
                id="lightbulbGradient"
                gradientTransform="rotate(90)"
              >
                <stop offset="0%" style={{ stopColor: "#9333ea" }} />
                <stop offset="100%" style={{ stopColor: "#3b82f6" }} />
              </linearGradient>
            </defs>
            <Lightbulb fill="url(#lightbulbGradient)" />
          </svg>
        </Link>
      </Tooltip>
    </div>
  );
};

export default SidebarControls;
