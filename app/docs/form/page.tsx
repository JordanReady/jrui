import React from "react";
import Form from "./form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Form",
  description:
    "Learn how to integrate authentication functionality with a user submission form using the Auth Form component in JRui. Explore the features of this component, including authentication prompts and secure submission capabilities, to enhance user engagement and application security.",
  openGraph: {
    title: "Form",
    description:
      "Learn how to integrate authentication functionality with a user submission form using the Auth Form component in JRui. Explore the features of this component, including authentication prompts and secure submission capabilities, to enhance user engagement and application security.",
    siteName: "JRui",
    type: "website",
  },
};

const page = () => {
  return <Form />;
};

export default page;
