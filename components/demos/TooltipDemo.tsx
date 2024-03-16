import React from "react";
import Reveal from "../Reveal";
import Jrui from "@/imgs/JRuiLogo.png";
import Scooty from "@/imgs/ScootyLogo.png";
import Booty from "@/imgs/BootyLogo.png";
import Image from "next/image";
import { Croissant, Settings } from "lucide-react";
import Tooltip from "@/app/demo/components/Tooltip";

const RevealDemo = () => {
  return (
    <div className="container relative p-5 flex gap-16 flex-col md:flex-row center ">
      <Reveal className=" flex flew-row gap-4 absolute top-2 left-2   ">
        <div className="">
          <Reveal className="flex gap-4">
            <Tooltip
              animationDirection="right"
              tip="I'm a gear"
              width={6}
              offset={2.25}
            >
              <Settings />
            </Tooltip>
            <Tooltip
              delayIn={100}
              animationDuration={0.05}
              tip="Use with caution!"
              width={8}
              offset={3}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-triangle-alert"
              >
                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
                <path d="M12 9v4" />
                <path d="M12 17h.01" />
              </svg>
            </Tooltip>
            <Tooltip
              delayIn={10}
              animationDuration={1}
              animationDirection="left"
              tip="Croissant?"
              width={5}
              offset={1.75}
            >
              <Croissant />
            </Tooltip>
            <Tooltip
              delayIn={100}
              animationDuration={0.05}
              tip="AHHH!"
              width={4}
              offset={-2}
              className="animate-bounce"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-loader-circle animate-spin"
              >
                <path d="M21 12a9 9 0 1 1-6.219-8.56" />
              </svg>
            </Tooltip>
          </Reveal>
        </div>
      </Reveal>
      <Reveal>
        <div className="h-[380px] w-[210px]  flex flex-col justify-center items-center relative">
          <Tooltip
            className="mt-[-350px]"
            animationDirection="up"
            width={8}
            tip="This is Jrui the Mascot!"
          >
            <Reveal className="h-[300px] w-[300px]">
              <Image src={Jrui} alt="It's Jrui the mascot!!" />
            </Reveal>
          </Tooltip>
        </div>
      </Reveal>
      <Reveal>
        <div className=" w-[210px] gap-8 flex flex-col justify-center items-center ">
          <Tooltip
            className="mt-[-40px]"
            offset={7}
            animationDirection="right"
            animationDuration={0.5}
            width={7}
            tip="On da right!"
          >
            <Reveal>
              <button className="btn-hover border-gradient px-4 py-2">
                Button
              </button>
            </Reveal>
          </Tooltip>
          <Tooltip
            className="mt-[-30px]"
            offset={-5}
            animationDirection="left"
            animationDuration={1}
            width={6}
            tip="On da left!"
          >
            <Reveal>
              <a className="underline" href="#">
                Link
              </a>
            </Reveal>
          </Tooltip>
          <Tooltip animationDirection="up" width={10} tip="From Down Under">
            <Reveal>
              <p>Text</p>
            </Reveal>
          </Tooltip>
        </div>
      </Reveal>
    </div>
  );
};

export default RevealDemo;
