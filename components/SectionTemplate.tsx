"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";

type SectionTemplateProps = {
  desktopImg: StaticImageData;
  mobileImg: StaticImageData[];
};

const SectionTemplate: React.FC<SectionTemplateProps> = ({
  desktopImg,
  mobileImg,
}) => {
  const [isDesktopView, setIsDesktopView] = useState(true);
  const [mobileIndex, setMobileIndex] = useState(0);

  const toggleViewport = () => {
    setIsDesktopView((prevState) => !prevState);
  };

  const changeMobileImage = () => {
    setMobileIndex((prevIndex) => (prevIndex + 1) % mobileImg.length);
  };

  return (
    <>
      <div className="md:w-[790px] md:max-w-[100%] max-h-[500px] border-bottom-none border-gradient relative">
        <div className={isDesktopView ? "block" : "hidden"}>
          <Image
            src={desktopImg}
            alt="Desktop Image"
            className="w-full h-full object-contain"
            height={480}
          />
        </div>
        <div
          className={
            !isDesktopView
              ? "flex justify-around items-center gap-2 w-full h-full"
              : "hidden"
          }
        >
          {mobileImg.map((imgSrc, index) => (
            <Image
              key={index}
              src={imgSrc}
              objectFit="fill"
              alt={`Mobile Image ${index + 1}`}
              height={480}
              className="border"
            />
          ))}
        </div>
      </div>
      <button
        className="btn-hover w-full md:w-[790px] md:max-w-[100%] mb-8 border border-gradient py-2 px-4 cursor-pointer "
        onClick={toggleViewport}
      >
        Change Viewport
      </button>
    </>
  );
};

export default SectionTemplate;
