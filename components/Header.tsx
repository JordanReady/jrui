import Link from "next/link";
import React from "react";
import UserButton from "./UserButton";
import Reveal from "./Reveal";
import { ThemeToggle } from "./ThemeToggle";

const Header = () => {
  return (
    <Reveal
      className=" p-4 flex center sm:justify-center items-center align-middle border-top-none border-right-none border-left-none border border-gradient shadow fixed w-full top-0 z-50 bg-white dark:bg-[rgb(2,8,23)] "
      direction="down"
      delay={0}
    >
      <div className="container max-w-[1400px] flex justify-center sm:justify-between">
        <Link
          className="hidden sm:flex opacity-0 sm:opacity-100 text-4xl font-bold my-0"
          href={"/"}
        >
          <h1>
            JR
            <span className=" text-primary font-normal">ui</span>
          </h1>
        </Link>
        <div className="flex gap-2">
          <Link
            className=" btn-hover px-4 py-2 
            border border-gradient "
            href="/docs"
          >
            Docs
          </Link>
          <Link
            className="btn-hover px-4 py-2 
          border border-gradient"
            href="https://www.jordanready.com/"
          >
            Developer
          </Link>
          <ThemeToggle />
          <UserButton />
        </div>
      </div>
    </Reveal>
  );
};

export default Header;
