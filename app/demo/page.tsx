import React from "react";
import Jrui from "@/imgs/JRuiLogo.png";
import DarkMode from "./features/DarkMode";
import NavbarMenu from "./components/NavbarMenu";
import Tooltip from "./components/Tooltip";
import Hero from "./sections/Hero";
import UserAvatar from "./components/UserAvatarNextOAuthFirebase";
// import UserAvatar from "./components/UserAvatar";
import ThemeToggle from "./components/ThemeToggle";
import AuthForm from "./components/AuthForm";
import Form from "./components/Form";

const Demo = () => {
  return (
    <div className="center h-[80dvh]">
      <AuthForm />
    </div>
  );
};

export default Demo;
