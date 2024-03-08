import React from "react";
import Reveal from "../Reveal";
import Jrui from "@/imgs/JRuiLogo.png";
import Scooty from "@/imgs/ScootyLogo.png";
import Booty from "@/imgs/BootyLogo.png";
import Image from "next/image";

const RevealDemo = () => {
  return (
    <div className="container p-5 flex gap-16 flex-col md:flex-row center">
      <Reveal delay={1}>
        <div className="h-[380px] w-[210px] dark:bg-slate-900 bg-zinc-100 border-gradient flex flex-col justify-center items-center p-2">
          <Reveal direction="down" delay={1.2}>
            <h1 className="  text-4xl font-bold my-2">
              JR
              <span className="bg-black text-primary">ui</span>
            </h1>
          </Reveal>
          <Reveal direction="left" delay={1.4}>
            <Image
              height={200}
              width={200}
              alt="JRui the mascot!"
              src={Jrui}
              className="my-2"
            ></Image>
          </Reveal>
          <Reveal direction="up" delay={1.6}>
            <p className=" font-semibold text-center my-2 ">
              Say hello to Jrui! He's the mascot of these parts!
            </p>
          </Reveal>
        </div>
      </Reveal>

      <Reveal duration={0.25} delay={2}>
        <div className="h-[380px] w-[210px] dark:bg-slate-900 bg-zinc-100 border-gradient flex flex-col justify-center items-center p-2">
          <Reveal direction="left" duration={0.75} delay={2.2}>
            <h1 className="  text-4xl font-bold my-2">
              SC
              <span className="bg-black text-primary">ooty</span>
            </h1>
          </Reveal>
          <Reveal duration={0.15} direction="right" delay={2.4}>
            <Image
              height={200}
              width={200}
              alt="JRui the mascot!"
              src={Scooty}
              className="my-2"
            ></Image>
          </Reveal>
          <Reveal duration={1.25} direction="left" delay={2.6}>
            <p className=" font-semibold text-center my-2 ">
              Say hello to Scooty! She's Jrui's step-sis!
            </p>
          </Reveal>
        </div>
      </Reveal>
      <Reveal duration={1} delay={3}>
        <div className="h-[380px] w-[210px] dark:bg-slate-900 bg-zinc-100 border-gradient flex flex-col justify-center items-center p-2">
          <Reveal duration={1.5} direction="right" delay={3.2}>
            <h1 className="  text-4xl font-bold my-2">
              BO
              <span className="bg-black text-primary">oty</span>
            </h1>
          </Reveal>
          <Reveal duration={1.8} direction="right" delay={3.4}>
            <Image
              height={200}
              width={200}
              alt="JRui the mascot!"
              src={Booty}
              className="my-2"
            ></Image>
          </Reveal>
          <Reveal duration={2} direction="right" delay={3.6}>
            <p className=" font-semibold text-center my-2 ">
              Say hello to Booty! He's Jrui's step-bro!
            </p>
          </Reveal>
        </div>
      </Reveal>
    </div>
  );
};

export default RevealDemo;
