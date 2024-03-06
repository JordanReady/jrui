import Link from "next/link";
import React from "react";
import UserButton from "./UserButton";
import Reveal from "./Reveal";

const Header = () => {
  return (
    <div className="">
      <Reveal
        className="bg-white p-4 flex justify-center md:justify-between items-center align-middle border-t-0 border-l-0 border-r-0 shadow fixed w-full top-0 z-50 max-w-[100dvw]"
        direction="down"
        delay={0}
      >
        <Link href={"/"}>
          <h1 className=" opacity-0 md:opacity-100 text-4xl font-bold my-0">
            JR
            <span className="bg-black text-primary">ui</span>
          </h1>
        </Link>
        <div className="flex space-x-2">
          <Link
            className=" px-4 py-2 text-black bg-white
            border border-gradient "
            href="/docs"
          >
            Docs
          </Link>
          <Link
            className=" px-4 py-2 text-black bg-white
          border border-gradient"
            href="https://www.jordanready.com/"
          >
            Developer
          </Link>
          <UserButton />
        </div>
      </Reveal>
    </div>
  );
};

export default Header;
