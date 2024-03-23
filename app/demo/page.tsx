import React from "react";
import Jrui from "@/imgs/JRuiLogo.png";
import DarkMode from "./features/DarkMode";
import NavbarMenu from "./components/NavbarMenu";
import Tooltip from "./components/Tooltip";
import Hero from "./sections/Hero";
import UserAvatar from "./components/UserAvatarNextOAuthFirebase";
// import UserAvatar from "./components/UserAvatar";
import ThemeToggle from "./components/ThemeToggle";

const Demo = () => {
  return (
    <div className="center h-[80dvh]">
      <ThemeToggle />
    </div>
  );
};

export default Demo;
