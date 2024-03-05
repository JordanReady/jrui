"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const getLinkClassName = (path: string) => {
    const baseClassName =
      "group hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-br hover:from-purple-600 hover:to-blue-500 hover:translate-x-1 duration-100";

    return activeLink === path
      ? `${baseClassName} group text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500 translate-x-1`
      : baseClassName;
  };

  useEffect(() => {
    setActiveLink(window.location.pathname.split("/").pop() || "");

    const handleRouteChange = () => {
      setActiveLink(window.location.pathname.split("/").pop() || "");
    };

    window.addEventListener("popstate", handleRouteChange);

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Button to toggle the sidebar on mobile */}
      <button
        onClick={toggleSidebar}
        className={`md:hidden ml-2 mt-[-3.85rem] z-[999] p-2 bg-white text-black border-2 border-blue-500 absolute `}
      >
        {!isSidebarOpen ? <Menu /> : <X />}
      </button>
      <div
        className={`w-[100dvw] md:w-1/6 p-2 flex flex-col ${
          isSidebarOpen ? "md:inline-flex  md:mt-0" : "hidden md:inline-flex"
        }`}
      >
        <h1 className="text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500 font-semibold">
          Getting Started
        </h1>
        <Link
          className={getLinkClassName("pick-a-template")}
          href="/docs/pick-a-template"
        >
          Pick a Template
        </Link>
        <Link
          className={getLinkClassName("project-setup")}
          href="/docs/project-setup"
        >
          Project Setup
        </Link>
        <Link
          className={getLinkClassName("project-structure")}
          href="/docs/project-structure"
        >
          Project Structure
        </Link>
        <Link
          className={getLinkClassName("adding-components")}
          href="/docs/adding-components"
        >
          Adding Components
        </Link>
        <h1 className="text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500 font-semibold">
          Templates
        </h1>
        <Link
          className={getLinkClassName("next-oauth-firebase")}
          href="/docs/next-oauth-firebase"
        >
          Next/OAuth/Firebase
        </Link>
        <h1 className="text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500 font-semibold">
          Components
        </h1>
        <Link
          className={getLinkClassName("next-oauth-firebase")}
          href="/docs/next-oauth-firebase"
        >
          Next/OAuth/Firebase
        </Link>
      </div>
    </>
  );
};

export default Sidebar;
