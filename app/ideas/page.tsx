import React from "react";
import IdeaForm from "./IdeaForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Submit Idea",
  description:
    "Submit idea page allows users to share their creative ideas, suggestions, or feature requests. Learn how to use the Submit Idea component in JRui to encourage user participation and foster innovation.",
  openGraph: {
    title: "Submit Idea",
    description:
      "Submit idea page allows users to share their creative ideas, suggestions, or feature requests. Learn how to use the Submit Idea component in JRui to encourage user participation and foster innovation.",
    siteName: "JRui",
    type: "website",
  },
};

const Ideas = () => {
  return (
    <div className="container center">
      <IdeaForm />
    </div>
  );
};

export default Ideas;
