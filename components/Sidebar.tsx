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
      ? `${baseClassName} group text-primary translate-x-1`
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
        className={`md:hidden ml-2 mt-[-3.85rem] z-[999] p-2 bg-white text-black border-2 border-blue-500 fixed `}
      >
        {isSidebarOpen ? <Menu /> : <X />}
      </button>
      <div
        className={`w-[200px] min-w-[200px] max-w-[200px] md:w-1/6 p-2 flex flex-col md:mt-[1.5rem]  ${
          isSidebarOpen
            ? "hidden md:inline-flex "
            : "fixed border-2 h-[100dvh] border-blue-500 border-t-0 border-l-0 md:flex-block md:border-0  bg-white"
        }`}
      >
        <h1 className="text-primary font-semibold">Getting Started</h1>
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
        <h1 className="text-primary font-semibold">Templates</h1>
        <Link
          className={getLinkClassName("next-oauth-firebase")}
          href="/docs/next-oauth-firebase"
        >
          Next/OAuth/Firebase
        </Link>
        <h1 className="text-primary font-semibold">Components</h1>
        <Link className={getLinkClassName("reveal")} href="/docs/reveal">
          Reveal
        </Link>
      </div>
    </>
  );
};

export default Sidebar;
