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
        setUrl("/docs/sitemap");
        setTitle("Sitemap");
        setPrevTitle("Docs Layout");
        setPrevUrl("/docs/next-oauth-firebase/docs");
        break;
      case "/docs/sitemap":
        setUrl("/docs/404");
        setTitle("404 Handling");
        setPrevTitle("Dark Mode");
        setPrevUrl("/docs/dark-mode");
        break;
      case "/docs/404":
        setUrl("/docs/hero");
        setTitle("Hero");
        setPrevTitle("Sitemap");
        setPrevUrl("/docs/sitemap");
        break;
      case "/docs/hero":
        setUrl("/docs/form");
        setTitle("Form");
        setPrevTitle("404 Handling");
        setPrevUrl("/docs/404");
        break;
      case "/docs/form":
        setUrl("/docs/reveal");
        setTitle("Reveal");
        setPrevTitle("Hero");
        setPrevUrl("/docs/hero");
        break;
      case "/docs/reveal":
        setUrl("/docs/theme-toggle");
        setTitle("Theme Toggle");
        setPrevTitle("Form");
        setPrevUrl("/docs/form");
        break;
      case "/docs/theme-toggle":
        setUrl("/docs/tooltip");
        setTitle("Tooltip");
        setPrevTitle("Reveal");
        setPrevUrl("/docs/reveal");
        break;
      case "/docs/tooltip":
        setUrl("/docs/typed");
        setTitle("Typed");
        setPrevTitle("Theme Toggle");
        setPrevUrl("/docs/theme-toggle");
        break;
      case "/docs/typed":
        setUrl("/docs/user-avatar");
        setTitle("User Avatar");
        setPrevTitle("Tooltip");
        setPrevUrl("/docs/tooltip");
        break;
      case "/docs/user-avatar":
        setUrl("/docs/user-button");
        setTitle("User Button");
        setPrevTitle("Typed");
        setPrevUrl("/docs/typed");
        break;
      case "/docs/user-button":
        setUrl("/docs");
        setTitle("Getting Started");
        setPrevTitle("User Avatar");
        setPrevUrl("/docs/user-avatar");
        break;
    }
  }, [urlInput]);

  return (
    <div className="flex flex-wrap gap-2 pl-8">
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
