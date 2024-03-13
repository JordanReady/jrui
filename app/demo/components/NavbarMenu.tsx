// This line is a Next.js directive that tells the server to render this component on the client
"use client";

// Importing necessary modules
import React, { useState } from "react";
import Link from "next/link";

// Defining an interface for the props that will be passed to the NavbarMenu component
interface NavbarMenuProps {
  transitionColor: string; // The color of the transition effect
  backgroundColor: string; // The background color of the navbar
  duration: number; // The duration of the transition effect in seconds
}

// Defining the NavbarMenu component as a functional component that receives the props defined in the NavbarMenuProps interface
const NavbarMenu: React.FC<NavbarMenuProps> = ({
  transitionColor,
  backgroundColor,
  duration,
}) => {
  // Using the useState hook to manage the activeLink state, initially set to "home"
  const [activeLink, setActiveLink] = useState("home");

  // Function to handle link hover event and update the activeLink state
  const handleLinkHover = (link: string) => {
    setActiveLink(link);
  };

  return (
    // The nav element that contains the navbar
    <nav
      className={`relative mx-auto h-12 shadow-md `}
      // Inline style to set the background color of the navbar based on the backgroundColor prop
      style={{ backgroundColor: backgroundColor }}
    >
      {/* The div element that represents the transition effect */}
      <div
        className={`absolute h-full ease-in-out flex m-auto ${
          activeLink === "home" ? "w-20 left-0" : ""
        } ${activeLink === "rooty" ? "w-20 left-[80px]" : ""} ${
          activeLink === "tooty" ? "w-20 left-[160px]" : ""
        } ${activeLink === "scooty" ? "w-20 left-[240px]" : ""}`}
        // Inline styles to set the background color and transition duration of the transition effect
        style={{
          backgroundColor: transitionColor,
          transition: `all ${duration}s ease-in-out`,
        }}
      />

      {/* Link elements for each menu item */}
      <Link
        href="#"
        className=" text-sm uppercase inline-flex justify-center items-center relative z-10 text-center h-12 w-20 leading-12 hover:text-gray-300"
        onMouseEnter={() => handleLinkHover("home")}
      >
        Home
      </Link>

      <Link
        href="#"
        className=" text-sm uppercase inline-flex justify-center items-center relative z-10 text-center h-12 w-20 leading-12 hover:text-gray-300"
        onMouseEnter={() => handleLinkHover("rooty")}
      >
        Rooty
      </Link>
      <Link
        href="#"
        className=" text-sm uppercase inline-flex justify-center items-center relative z-10 text-center h-12 w-20 leading-12 hover:text-gray-300"
        onMouseEnter={() => handleLinkHover("tooty")}
      >
        Tooty
      </Link>
      <Link
        href="#"
        className=" text-sm uppercase inline-flex justify-center items-center relative z-10 text-center h-12 w-20 leading-12 hover:text-gray-300"
        onMouseEnter={() => handleLinkHover("scooty")}
      >
        Scooty
      </Link>
    </nav>
  );
};

// Exporting the NavbarMenu component for use in other parts of the application
export default NavbarMenu;
