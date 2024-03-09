"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { CornerDownRight, Menu, X } from "lucide-react";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState("");
  const [activeSubLink, setActiveSubLink] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const getLinkClassName = (path: string) => {
    const baseClassName =
      "group hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-br hover:from-purple-600 hover:to-blue-500 hover:translate-x-1 duration-100";
    return activeLink === path
      ? `${baseClassName} group text-primary translate-x-1`
      : baseClassName;
  };

  const getSubLinkClassName = (path: string) => {
    const baseClassName =
      "group hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-br hover:from-purple-600 hover:to-blue-500 hover:translate-x-1 duration-100";

    const subLink = window.location.pathname.split("/").slice(-2).join("/");

    return subLink === path
      ? `${baseClassName} group text-primary translate-x-1`
      : baseClassName;
  };

  useEffect(() => {
    const [, subPath] = window.location.pathname.split("/").slice(-2);
    setActiveLink(window.location.pathname.split("/").pop() || "");
    setActiveSubLink(subPath || "");

    const handleRouteChange = () => {
      const [, subPath] = window.location.pathname.split("/").slice(-2);
      setActiveLink(window.location.pathname.split("/").pop() || "");
      setActiveSubLink(subPath || "");
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
      <button
        onClick={toggleSidebar}
        className={`fixed md:hidden border border-gradient bg-white dark:bg-[rgb(2,8,23)] top-0 left-0  mt-[76px] z-[999] p-[.35rem] mb-4 pb-4 `}
      >
        {isSidebarOpen ? <Menu /> : <X />}
      </button>
      <div
        className={`bg-white dark:bg-[rgb(2,8,23)] p-2 flex flex-col mt-[77px] overflow-y-scroll no-scroll ${
          isSidebarOpen
            ? "hidden md:inline-flex "
            : " w-[225px] border-2 z-[998] border-gradient border-t-0 border-l-0 md:flex-block md:border-none md:shadow-none left-[8px] md:left-20"
        }`}
      >
        <h1 className="text-primary font-semibold text-xl lg:mt-0">
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
          className={getLinkClassName("adding-features")}
          href="/docs/adding-features"
        >
          Adding Features
        </Link>
        <Link
          className={getLinkClassName("adding-sections")}
          href="/docs/adding-sections"
        >
          Adding Sections
        </Link>
        <Link
          className={getLinkClassName("adding-components")}
          href="/docs/adding-components"
        >
          Adding Components
        </Link>

        <h1 className="text-primary font-semibold text-xl">Templates</h1>
        <Link
          className={getLinkClassName("next-oauth-firebase")}
          href="/docs/next-oauth-firebase"
        >
          Next/OAuth/Firebase
        </Link>

        <Link
          className={` group flex ${getSubLinkClassName(
            "next-oauth-firebase/docs"
          )}`}
          href="/docs/next-oauth-firebase/docs"
        >
          <CornerDownRight
            className=" group-hover:text-purple-600 "
            size={20}
            strokeWidth={1}
          />
          Docs Layout
        </Link>
        <h1 className="text-primary font-semibold text-xl">Features</h1>
        <Link className={getLinkClassName("dark-mode")} href="/docs/dark-mode">
          Dark Mode
        </Link>

        <h1 className="text-primary font-semibold text-xl">Sections</h1>
        <Link className={getLinkClassName("hero")} href="/docs/hero">
          Hero
        </Link>

        <h1 className="text-primary font-semibold text-xl">Components</h1>
        <Link className={getLinkClassName("reveal")} href="/docs/reveal">
          Reveal
        </Link>
      </div>
    </>
  );
};

export default Sidebar;
