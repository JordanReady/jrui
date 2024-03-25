import React from "react";
import UserAvatar from "./userAvatar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Avatar",
  description:
    "Learn how to integrate the User Avatar Next/OAuth/Firebase component in JRui to display user profile images fetched from NextAuth.js session data. Explore the features of this component, including customizable size, alternative text, and additional CSS classes for styling, enhancing user profile management and authentication workflows.",
  openGraph: {
    title: "User Avatar",
    description:
      "Learn how to integrate the User Avatar Next/OAuth/Firebase component in JRui to display user profile images fetched from NextAuth.js session data. Explore the features of this component, including customizable size, alternative text, and additional CSS classes for styling, enhancing user profile management and authentication workflows.",
    siteName: "JRui",
    type: "website",
  },
};

const page = () => {
  return <UserAvatar />;
};

export default page;
