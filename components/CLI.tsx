import React from "react";

interface CLIProps {
  command: string;
}

const CLI: React.FC<CLIProps> = ({ command }) => {
  return (
    <>
      <h2 className=" text-primary text-2xl font-semibold mb-4">
        Easy CLI install
      </h2>
      <pre className="w-max dark:bg-[#3b3b3b] bg-gray-200 p-4 rounded-md overflow-x-scroll">
        {command}
      </pre>
    </>
  );
};

export default CLI;
