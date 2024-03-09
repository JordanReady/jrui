"use client";
import React from "react";
import Sidebar from "@/components/Sidebar";
import Reveal from "@/components/Reveal";
import DocNav from "@/components/DocNav";

interface DefaultLayoutProps {
  children: any;
  animate?: boolean;
}

const DocLayout: React.FC<DefaultLayoutProps> = ({ children, animate }) => {
  return (
    <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
      {animate ? (
        <Reveal
          className="fixed top-0 z-30 -ml-2 h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block"
          direction="right"
          delay={0.1}
        >
          <Sidebar />
        </Reveal>
      ) : (
        <div className="fixed top-0 z-30 -ml-2 h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
          <Sidebar />
        </div>
      )}

      <Reveal className="relative mt-[85px] md:mt-[75px]" delay={0.35}>
        <section>
          {children}
          <Reveal className="mb-8" delay={0.5}>
            <DocNav />
          </Reveal>
        </section>
      </Reveal>
    </div>
  );
};

export default DocLayout;
