import React from "react";
import Link from "next/link";
import { LayoutPanelTop } from "lucide-react";

interface ShowcaseCardProps {
  url: string;
  title: string;
  description: string;
  icon?: JSX.Element;
}

const ShowcaseCard: React.FC<ShowcaseCardProps> = ({
  url,
  title,
  description,
  icon,
}) => {
  return (
    <Link
      className="relative group w-[300px] min-h-[275px] border border-gradient p-4 flex flex-col justify-between z-10 card-hover"
      href={url}
      passHref
    >
      <div className="flex justify-between">
        <h1 className="text-xl text-primary font-bold mb-2">{title}</h1>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="url(#gradient)"
          className="w-6 h-6 rotate-90 group-hover:-rotate-45 transition-all duration-200 opacity-20 group-hover:opacity-100"
        >
          <linearGradient id="gradient" x1="0" y1="0" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#9333ea" }} />
            <stop offset="100%" style={{ stopColor: "#3b82f6" }} />
          </linearGradient>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </div>
      <p>{description}</p>
      {icon}
    </Link>
  );
};

export default ShowcaseCard;
