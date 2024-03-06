"use client";
import React, { useEffect, useRef, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import styles from "./CodeTemplate.module.css";
import { ClipboardPlus } from "lucide-react";
import Clipboard from "clipboard";
import Reveal from "./Reveal";

type DemoTemplateProps = {
  title: string;
  code: string;
  children: JSX.Element;
};

function DemoTemplate({
  title,
  code,
  children,
}: DemoTemplateProps): JSX.Element {
  const codeRef = useRef<HTMLDivElement | null>(null);
  const copyButtonRef = useRef<HTMLButtonElement | null>(null);
  const [clipboardInitialized, setClipboardInitialized] = useState(false);

  useEffect(() => {
    if (codeRef.current && copyButtonRef.current && !clipboardInitialized) {
      const clipboard = new Clipboard(copyButtonRef.current, {
        text: () => code,
      });

      clipboard.on("success", (e) => {
        e.clearSelection();
        console.log("Copied to clipboard");
      });

      setClipboardInitialized(true);
    }
  }, [clipboardInitialized, code]);

  return (
    <div className={`w-[800px] max-w-[91dvw] overflow-x-scroll `}>
      <div
        className={` border border-gradient border-bottom-none flex justify-between items-center p-1  `}
      >
        <h2>{title}</h2>
        <button ref={copyButtonRef} className="copy-button flex p-2 w-[130px]">
          <ClipboardPlus />
          <span className="w-1" /> Copy Code
        </button>
      </div>
      <div
        className={`${styles.codeContainer} border-gradient border border-top-none sm:overflow-x-auto`}
        ref={codeRef}
      >
        {children}
      </div>
    </div>
  );
}

export default DemoTemplate;
