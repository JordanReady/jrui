import React from "react";
import Reveal from "../Reveal";
import Jrui from "@/imgs/JRuiLogo.png";
import UserAvatar from "@/app/demo/components/UserAvatar";

const RevealDemo = () => {
  return (
    <div className="container relative p-5 flex gap-16 flex-col md:flex-row center no-scroll">
      <Reveal delay={0.5}>
        <UserAvatar img={Jrui} size={25} className="hover:animate-ping" />
      </Reveal>
      <Reveal delay={0.75}>
        <UserAvatar
          img={Jrui}
          size={50}
          className=" border-4 border-[#9333ea] p-1 hover:animate-spin"
        />
      </Reveal>
      <Reveal delay={1}>
        <UserAvatar
          img={Jrui}
          size={75}
          className=" hover:translate-y-[-1rem] duration-100"
        />
      </Reveal>
      <Reveal delay={1.25}>
        <UserAvatar
          img={Jrui}
          size={100}
          className="border-2 border-white p-4 hover:p-2 hover:scale-125 transition-all duration-300"
        />
      </Reveal>
    </div>
  );
};

export default RevealDemo;
