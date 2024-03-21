import React from "react";
import DarkMode from "./features/DarkMode";
import NavbarMenu from "./components/NavbarMenu";
import Tooltip from "./components/Tooltip";
import Hero from "./sections/Hero";
import UserAvatar from "./components/UserAvatarNextOAuthFirebase";
// import UserAvatar from "./components/UserAvatar";
import Jrui from "@/imgs/JRuiLogo.png";

const Demo = () => {
  return (
    <div className="center h-[80dvh]">
      <UserAvatar
        size={200}
        alt="This is my alt text"
        className=" border-4 border-white"
      />
      {/* <UserAvatar
        img={Jrui}
        size={200}
        alt="This is my alt text"
        className="border-4 border-[#9333ea] p-2"
      /> */}
    </div>
  );
};

export default Demo;
