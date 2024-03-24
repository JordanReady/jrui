import React from "react";

interface CLIProps {
  command: string;
  componentState?: string;
}

const CLI: React.FC<CLIProps> = ({ command, componentState }) => {
  return (
    <>
      <h2 className=" text-primary text-2xl font-semibold mb-4">
        Easy CLI Install
      </h2>
      {componentState && (
        <p className="text-lg mb-4">
          Component Type:{" "}
          <span className="text-primary font-bold">{componentState}</span>
        </p>
      )}
      <pre className="w-max dark:bg-[#3b3b3b] bg-gray-200 p-4 rounded-md overflow-x-scroll">
        {command}
      </pre>
    </>
  );
};

export default CLI;
