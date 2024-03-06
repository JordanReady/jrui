import React from "react";

interface CodeTemplateProps {
  fileName: string;
  code: string;
}

const CodeTemplate: React.FC<CodeTemplateProps> = ({ fileName, code }) => {
  return (
    <div className="container mx-auto py-4">
      <h1 className="text-2xl text-white p-2 font-bold bg-slate-500 ">
        {fileName}
      </h1>
      <div className="bg-gray-900 p-4 overflow-x-auto">
        <pre className="text-white line-numbers">
          <code className="block whitespace-pre overflow-x-auto">{code}</code>
        </pre>
      </div>
    </div>
  );
};

export default CodeTemplate;
