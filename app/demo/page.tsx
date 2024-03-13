import React from "react";
import DarkMode from "./features/DarkMode";
import NavbarMenu from "./components/NavbarMenu";

const Demo = () => {
  return (
    <NavbarMenu
      transitionColor="#9333ea"
      backgroundColor="white"
      duration={0.3}
    />
  );
};

export default Demo;
