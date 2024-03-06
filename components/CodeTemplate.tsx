"use client";
import React, { useEffect, useRef, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import styles from "./CodeTemplate.module.css";
import Clipboard from "clipboard";
import { ClipboardPlus } from "lucide-react";

type CodeTemplateProps = {
  code: string;
  fileName: string;
};

function CodeTemplate({ code, fileName }: CodeTemplateProps): JSX.Element {
  const codeRef = useRef<HTMLDivElement | null>(null);
  const copyButtonRef = useRef<HTMLButtonElement | null>(null);
  const [clipboardInitialized, setClipboardInitialized] = useState(false);
  const [expanded, setExpanded] = useState(false);

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

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`w-[800px] max-w-[91dvw] overflow-x-scroll `}>
      <div
        className={` border border-gradient border-bottom-none flex justify-between items-center p-1  `}
      >
        <h2>{fileName}</h2>
        <button ref={copyButtonRef} className="copy-button flex p-2 w-[130px]">
          <ClipboardPlus />
          <span className="w-1" /> Copy Code
        </button>
      </div>
      <div
        className={`${styles.codeContainer} border-gradient border border-top-none sm:overflow-x-auto`}
        ref={codeRef}
        style={{ maxHeight: expanded ? "none" : "420px", overflow: "hidden" }}
      >
        <SyntaxHighlighter language="jsx" style={vscDarkPlus}>
          {code}
        </SyntaxHighlighter>
      </div>
      {!expanded && (
        <button
          className="btn-hover border border-gradient py-2 px-4 mt-[-2px]  cursor-pointer"
          onClick={toggleExpand}
        >
          View More
        </button>
      )}
    </div>
  );
}

export default CodeTemplate;
