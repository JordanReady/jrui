import React from "react";
import DarkMode from "./features/DarkMode";
import NavbarMenu from "./components/NavbarMenu";
import Tooltip from "./components/Tooltip";

const Demo = () => {
  return (
    <div className="container center h-96">
      <Tooltip
        tip="Hello! I'm a demo tooltip!"
        width={12}
        delayIn={0}
        delayOut={0}
        offset={2.45}
        animationDirection="right"
        animationDuration={0.1}
        className="rooty-tooty-scoot"
      >
        <button className="border-gradient btn-hover py-2 px-4">
          Hover me!
        </button>
      </Tooltip>
    </div>
  );
};

export default Demo;
