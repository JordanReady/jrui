"use client";
import React from "react";
import Reveal from "../Reveal";
import Jrui from "@/imgs/JRuiLogo.png";
import UserAvatar from "@/app/demo/components/UserAvatarNextOAuthFirebase";
import { useSession } from "next-auth/react";
import { signIn } from "next-auth/react";

const RevealDemo = () => {
  const { data: session } = useSession();
  return (
    <>
      {!session && (
        <div className="flex flex-col center">
          <h1 className="text-center">Login to view this demo!</h1>
          <button
            onClick={() => signIn()}
            className="btn-hover border-gradient px-4 py-2 mt-2"
          >
            Login
          </button>
        </div>
      )}
      <div className="container relative p-5 flex gap-16 flex-col md:flex-row center no-scroll">
        <Reveal delay={0.5}>
          <UserAvatar size={25} className="hover:animate-ping" />
        </Reveal>
        <Reveal delay={0.75}>
          <UserAvatar
            size={50}
            className=" border-4 border-[#9333ea] p-1 hover:animate-spin"
          />
        </Reveal>
        <Reveal delay={1}>
          <UserAvatar
            size={75}
            className=" hover:translate-y-[-1rem] duration-100"
          />
        </Reveal>
        <Reveal delay={1.25}>
          <UserAvatar
            size={100}
            className="border-2 border-white p-4 hover:p-2 hover:scale-125 transition-all duration-300"
          />
        </Reveal>
      </div>
    </>
  );
};

export default RevealDemo;
