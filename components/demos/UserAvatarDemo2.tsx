"use client";
import React, { useState } from "react";
import UserAvatar from "@/app/demo/components/UserAvatar";
import DefaultAvatar from "@/imgs/JRuiLogo.png"; // Replace with your default avatar image
import Image from "next/image";

const UserAvatarDemoForm = () => {
  const [size, setSize] = useState(50);
  const [alt, setAlt] = useState("User profile image");
  const [img, setImg] = useState(DefaultAvatar);
  const [className, setClassName] = useState("");

  return (
    <div className="flex flex-col md:flex-row">
      <form className="w-2/3 p-8">
        <div className="mb-4">
          <label className="text-primary font-semibold" htmlFor="size">
            Size (pixels):
          </label>
          <input
            type="number"
            id="size"
            value={size}
            onChange={(e) => setSize(parseInt(e.target.value))}
            className="p-2 border rounded-md w-full"
          />
        </div>

        <div className="mb-4">
          <label className="text-primary font-semibold" htmlFor="alt">
            Alternative Text:
          </label>
          <input
            type="text"
            id="alt"
            value={alt}
            onChange={(e) => setAlt(e.target.value)}
            className="p-2 border rounded-md w-full"
          />
        </div>

        <div className="mb-4">
          <label className="text-primary font-semibold" htmlFor="className">
            Class Name:
          </label>
          <input
            type="text"
            id="className"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
            className="w-full p-2 border rounded-md"
            placeholder="Enter additional CSS classes for custom styling"
          />
        </div>
      </form>

      <div className="flex w-full  flex-col gap-4 center">
        <div className="w-[300px] h-[300px] center border-gradient bg-slate-200 dark:dark:bg-slate-900">
          <UserAvatar size={size} alt={alt} img={img} className={className} />
        </div>
      </div>
    </div>
  );
};

export default UserAvatarDemoForm;
