"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const DocNav: React.FC = () => {
  const [urlInput, setUrlInput] = useState<string>("");
  const [url, setUrl] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [prevTitle, setPrevTitle] = useState<string>("");
  const [prevUrl, setPrevUrl] = useState<string>("");

  useEffect(() => {
    setUrlInput(window.location.pathname);
  }, []);

  useEffect(() => {
    switch (urlInput) {
      case "/docs":
        setUrl("/docs/pick-a-template");
        setTitle("Pick a Template");
        setPrevTitle("Landing Page");
        setPrevUrl("/");
        break;
      case "/docs/pick-a-template":
        setUrl("/docs/project-setup");
        setTitle("Project Setup");
        setPrevTitle("Getting Started");
        setPrevUrl("/docs");
        break;
      case "/docs/project-setup":
        setUrl("/docs/project-structure");
        setTitle("Project Structure");
        setPrevTitle("Project Template");
        setPrevUrl("/docs/pick-a-template");
        break;
      case "/docs/project-structure":
        setUrl("/docs/adding-features");
        setTitle("Adding Features");
        setPrevTitle("Project Setup");
        setPrevUrl("/docs/project-setup");
        break;
      case "/docs/adding-features":
        setUrl("/docs/adding-sections");
        setTitle("Adding Sections");
        setPrevTitle("Project Structure");
        setPrevUrl("/docs/project-structure");
        break;
      case "/docs/adding-sections":
        setUrl("/docs/adding-components");
        setTitle("Adding Components");
        setPrevTitle("Adding Features");
        setPrevUrl("/docs/adding-features");
        break;
      case "/docs/adding-components":
        setUrl("/docs/next-oauth-firebase");
        setTitle("Next OAuth Firebase");
        setPrevTitle("Adding Sections");
        setPrevUrl("/docs/adding-sections");
        break;
      case "/docs/next-oauth-firebase":
        setUrl("/docs/next-oauth-firebase/docs");
        setTitle("Docs Layout");
        setPrevTitle("Adding Components");
        setPrevUrl("/docs/adding-components");
        break;

      case "/docs/next-oauth-firebase/docs":
        setUrl("/docs/dark-mode");
        setTitle("Dark Mode");
        setPrevTitle("Next OAuth Firebase");
        setPrevUrl("/docs/next-oauth-firebase");
        break;
      case "/docs/dark-mode":
        setUrl("/docs/hero");
        setTitle("Hero");
        setPrevTitle("Docs Layout");
        setPrevUrl("/docs/next-oauth-firebase/docs");
        break;
      case "/docs/hero":
        setUrl("/docs/reveal");
        setTitle("Reveal");
        setPrevTitle("Dark Mode");
        setPrevUrl("/docs/dark-mode");
        break;
      case "/docs/reveal":
        setUrl("/getting-started");
        setTitle("Getting Started");
        setPrevTitle("Hero");
        setPrevUrl("/docs/hero");
    }
  }, [urlInput]);

  return (
    <div className="flex flex-wrap gap-2">
      <Link href={prevUrl} className="btn-hover px-4 py-2 border-gradient">
        Prev: {prevTitle}
      </Link>
      <Link href={url} className="btn-hover px-4 py-2 border-gradient">
        Next: {title}
      </Link>
    </div>
  );
};

export default DocNav;