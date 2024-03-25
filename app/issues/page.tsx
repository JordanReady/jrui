import React from "react";
import IssueForm from "./IssueForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Report Issues",
  description:
    "Report issues page allows users to submit feedback, bug reports, or suggestions for improvement. Learn how to use the Report Issues component in JRui to enhance user engagement and improve application quality.",
  openGraph: {
    title: "Report Issues",
    description:
      "Report issues page allows users to submit feedback, bug reports, or suggestions for improvement. Learn how to use the Report Issues component in JRui to enhance user engagement and improve application quality.",
    siteName: "JRui",
    type: "website",
  },
};

const page = () => {
  return (
    <div className="container">
      <IssueForm />
    </div>
  );
};

export default page;
