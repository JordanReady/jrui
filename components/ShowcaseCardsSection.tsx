import React from "react";
import ShowcaseCard from "./ShowcaseCard";
import {
  Blocks,
  LayoutPanelTop,
  NotepadTextDashed,
  Puzzle,
} from "lucide-react";
import Reveal from "./Reveal";

const ShowcaseCardsSection = () => {
  const iconClass = "absolute right-0 bottom-0 opacity-10 z-0";
  const iconSize = 125;
  const iconStroke = 1;
  return (
    <Reveal className="container m-auto relative my-4">
      <section className=" z-10 flex center flex-wrap gap-8">
        <Reveal delay={1} className="z-10">
          <ShowcaseCard
            title="Templates"
            url="/docs/pick-a-template"
            description="Explore a variety of pre-designed templates to kickstart your project. Save time and effort with professionally crafted UI designs ready for integration."
            icon={
              <NotepadTextDashed
                className={iconClass}
                size={iconSize}
                strokeWidth={iconStroke}
              />
            }
          />
        </Reveal>
        <Reveal delay={1} className="z-10">
          <ShowcaseCard
            title="Components"
            url="/docs/adding-components"
            description="Discover reusable and customizable components designed to enhance your UI. JRui provides a collection of components for seamless integration into your Next.js and React applications."
            icon={
              <Puzzle
                className={iconClass}
                size={iconSize}
                strokeWidth={iconStroke}
              />
            }
          />
        </Reveal>
        <Reveal delay={1} className="z-10">
          <ShowcaseCard
            title="Sections"
            url="/docs/adding-sections"
            description="Build engaging and dynamic sections with ease. JRui offers a set of versatile sections to elevate your UI experience, ensuring a consistent and visually appealing design across your application."
            icon={
              <LayoutPanelTop
                className={iconClass}
                size={iconSize}
                strokeWidth={iconStroke}
              />
            }
          />
        </Reveal>
        <Reveal delay={1} className="z-10">
          <ShowcaseCard
            title="Features"
            url="/docs/adding-features"
            description="Unlock powerful features to amplify your application's capabilities. JRui provides a range of features and functionalities to empower your Next.js, React, and TypeScript projects."
            icon={
              <Blocks
                className={iconClass}
                size={iconSize}
                strokeWidth={iconStroke}
              />
            }
          />
        </Reveal>
      </section>

      {/* <div className="w-[110vw] ml-[-10vw] h-full bg-slate-500 absolute z-0 top-[4rem]" /> */}
    </Reveal>
  );
};

export default ShowcaseCardsSection;
