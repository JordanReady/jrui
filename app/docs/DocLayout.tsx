"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Sidebar from "@/components/Sidebar";
import Reveal from "@/components/Reveal";
import DocNav from "@/components/DocNav";

interface DefaultLayoutProps {
  children: any;
  animate?: boolean;
}

const DocLayout: React.FC<DefaultLayoutProps> = ({ children, animate }) => {
  return (
    <div className="container ml-8 mb-8 pt-[78px] md:pt-[68px]">
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
      <Reveal className=" md:ml-[200px]" delay={0.5}>
        <DocNav />
      </Reveal>
    </div>
  );
};

export default DocLayout;
