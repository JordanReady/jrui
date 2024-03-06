"use client";
import React, { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import Reveal from "@/components/Reveal";

interface DefaultLayoutProps {
  children: any;
  animate?: boolean;
}

const DocLayout: React.FC<DefaultLayoutProps> = ({ children, animate }) => {
  return (
    <div className="container m-auto pt-[78px]">
      <div className="flex">
        {animate ? (
          <Reveal direction="right" delay={0.1}>
            <Sidebar />
          </Reveal>
        ) : (
          <Sidebar />
        )}

        <Reveal delay={0.35}>
          <div className="md:ml-[200px]">{children}</div>
        </Reveal>
      </div>
    </div>
  );
};

export default DocLayout;
