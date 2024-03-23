import React from "react";
import Reveal from "../Reveal";
import Jrui from "@/imgs/JRuiLogo.png";
import UserAvatar from "@/app/demo/components/UserAvatar";
import ThemeToggle from "@/app/demo/components/ThemeToggle";

const RevealDemo = () => {
  return (
    <div className="container relative p-5 flex gap-4 flex-col center no-scroll">
      <Reveal>
        <h2>Click me to toggle light and dark mode!</h2>
      </Reveal>

      <Reveal>
        <ThemeToggle />
      </Reveal>
    </div>
  );
};

export default RevealDemo;
