"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const DocNav: React.FC = () => {
  const [urlInput, setUrlInput] = useState<string>("");
  const [url, setUrl] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [prevTitle, setPrevTitle] = useState<string>("");
  const [prevUrls, setPrevUrls] = useState<string[]>([]);

  useEffect(() => {
    setUrlInput(window.location.pathname);
  }, []);

  useEffect(() => {
    switch (urlInput) {
      // ... (unchanged)

      default:
        setUrl("/docs");
        setTitle("Getting Started");
    }

    // Add the current URL to the list of previous URLs
    setPrevUrls((prev) => [...prev, urlInput]);
  }, [urlInput]);

  // Handle clicking on the "Previous Doc" button
  const handlePrevDoc = () => {
    if (prevUrls.length > 1) {
      // Remove the current URL from the list and get the previous URL
      const prevUrl = prevUrls.slice(0, -1).pop();
      setPrevUrls((prev) => prev.slice(0, -1));

      // Redirect to the previous URL
      window.location.href = prevUrl || "/docs";
    }
  };

  useEffect(() => {
    switch (urlInput) {
      case "/docs":
        setUrl("/docs/pick-a-template");
        setTitle("Pick a Template");
        setPrevTitle("Landing Page");
        break;
      case "/docs/pick-a-template":
        setUrl("/docs/project-setup");
        setTitle("Project Setup");
        setPrevTitle("Getting Started");
        break;
      case "/docs/project-setup":
        setUrl("/docs/project-structure");
        setTitle("Project Structure");
        setPrevTitle("Project Setup");
        break;
      case "/docs/project-structure":
        setUrl("/docs/adding-features");
        setTitle("Adding Features");
        setPrevTitle("Project Structure");
        break;
      case "/docs/adding-features":
        setUrl("/docs/adding-sections");
        setTitle("Adding Sections");
        setPrevTitle("Adding Features");
        break;
      case "/docs/adding-sections":
        setUrl("/docs/adding-components");
        setTitle("Adding Components");
        setPrevTitle("Adding Sections");
        break;
      case "/docs/adding-components":
        setUrl("/docs/next-oauth-firebase");
        setTitle("Next OAuth Firebase");
        setPrevTitle("Adding Components");
        break;
      case "/docs/next-oauth-firebase":
        setUrl("/docs/next-oauth-firebase/docs");
        setTitle("Docs Layout");
        setPrevTitle("Next OAuth Firebase");
        break;

      case "/docs/next-oauth-firebase/docs":
        setUrl("/docs/dark-mode");
        setTitle("Dark Mode");
        setPrevTitle("Docs Layout");
        break;
      case "/docs/dark-mode":
        setUrl("/docs/hero");
        setTitle("Hero");
        setPrevTitle("Dark Mode");
        break;
      case "/docs/hero":
        setUrl("/docs/reveal");
        setTitle("Reveal");
        setPrevTitle("Hero");
        break;

      default:
        setUrl("/docs");
        setTitle("Getting Started");
        setPrevTitle("Landing Page");
    }
  }, [urlInput]);

  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={handlePrevDoc}
        className="btn-hover px-4 py-2 border-gradient "
      >
        Prev: {prevTitle}
      </button>
      <Link href={url} className="btn-hover px-4 py-2 border-gradient">
        Next: {title}
      </Link>
    </div>
  );
};

export default DocNav;
