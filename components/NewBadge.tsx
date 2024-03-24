import React from "react";
import { Flame } from "lucide-react";

interface NewBadgeProps {
  children: React.ReactNode;
}

const NewBadge: React.FC<NewBadgeProps> = ({ children }) => {
  return (
    <div className="flex gap-2">
      {children}
      <svg
        className="opacity-70 dark:opacity-90"
        width="20"
        height="20"
        viewBox="0 0 24 24"
      >
        <defs>
          <linearGradient id="bugGradient" gradientTransform="rotate(90)">
            <stop offset="0%" style={{ stopColor: "#9333ea" }} />
            <stop offset="100%" style={{ stopColor: "#3b82f6" }} />
          </linearGradient>
        </defs>
        <Flame fill="url(#bugGradient)" />
      </svg>
    </div>
  );
};

export default NewBadge;
