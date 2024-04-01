import React from "react";
import Typed from "@/app/demo/components/Typed";
import Jrui from "@/imgs/JRuiLogo.png";
import Image from "next/image";

const TypedDemo = () => {
  return (
    <div className="flex flex-wrap">
      <div className="md:w-[50%] p-4">
        <h1 className=" text-4xl font-semibold">Hello!</h1>
        <h2 className="text-2xl font-semibold">I'm Jrui and I'm a</h2>
        <Typed className="text-primary text-2xl font-semibold" />
        <br />
        <Typed
          strings={[
            "The 'TypedComponent' is a React component that creates a typing effect using the Typed.js library, customizable with props for strings, delay, and speed. It simplifies the integration of dynamic typing animations into React applications, offering easy configuration and efficient cleanup within a useEffect hook.",
          ]}
          startDelay={0}
          typeSpeed={10}
          loop={false}
          className=" "
        />
      </div>
      <Image className="m-4" src={Jrui} alt="This is Jrui the mascot!" />
    </div>
  );
};

export default TypedDemo;
