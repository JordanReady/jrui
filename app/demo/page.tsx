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
import Contact from "./sections/Contact";
import UserButton from "./components/UserButton";
import Typed from "./components/Typed";

const Demo = () => {
  return (
    <div className="center h-[80dvh]">
      <Typed
        strings={["JRui", "Rooty", "Scooty", "Tooty"]}
        startDelay={500}
        typeSpeed={10}
        backSpeed={100}
        backDelay={100}
        loop={true}
        className="text-2xl text-primary"
      />
    </div>
  );
};

export default Demo;
