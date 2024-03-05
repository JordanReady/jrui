import Link from "next/link";
import React from "react";
import UserButton from "./UserButton";

const Header = () => {
  return (
    <div className="bg-white p-4 flex justify-center md:justify-between items-center align-middle border-black border-b-2">
      <Link href={"/"}>
        <h1 className="text-black text-3xl hidden md:block">
          Next.js OAuth/Firebase Starter Kit
        </h1>
      </Link>
      <div className="flex space-x-4">
        <Link
          className=" px-4 py-2 text-black bg-white
            border-black border-2"
          href="/about"
        >
          About
        </Link>
        <Link
          className=" px-4 py-2 text-black bg-white
          border-black border-2"
          href="https://www.jordanready.com/"
        >
          Developer
        </Link>
        <UserButton />
      </div>
    </div>
  );
};

export default Header;
