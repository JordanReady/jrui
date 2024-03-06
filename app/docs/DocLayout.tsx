import React from "react";
import Sidebar from "@/components/Sidebar";

interface DefaultLayoutProps {
  children: any;
}

const DocLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <div className="container m-auto pt-[78px]">
      <div className="flex">
        <Sidebar />
        {/* Middle Content */}
        <div className="md:ml-[200px]">{children}</div>
      </div>
    </div>
  );
};

export default DocLayout;
