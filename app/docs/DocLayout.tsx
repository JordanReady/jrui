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
    <div className="container lg:ml-8 mb-8 mt-[90px] lg:mt-[76px]">
      <div>
        {animate ? (
          <Reveal direction="right" delay={0.1}>
            <Sidebar />
          </Reveal>
        ) : (
          <Sidebar />
        )}

        <Reveal delay={0.35}>
          <div className="lg:ml-[200px]">{children}</div>
        </Reveal>
      </div>
      <Reveal className=" lg:ml-[200px]" delay={0.5}>
        <DocNav />
      </Reveal>
    </div>
  );
};

export default DocLayout;
