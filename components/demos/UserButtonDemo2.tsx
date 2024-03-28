"use client";
import React, { useState } from "react";
import UserButton from "@/app/demo/components/UserButton";

const UserButtonDemo: React.FC = () => {
  const [size, setSize] = useState<number>(50);
  const [className, setClassName] = useState<string>("");

  return (
    <div className="flex flex-col md:flex-row">
      <form className="w-2/3 p-8">
        <div className="mb-4 flex flex-col">
          <label className="text-primary font-semibold" htmlFor="size">
            Size:
          </label>
          <input
            type="number"
            id="size"
            value={size}
            onChange={(e) => setSize(parseInt(e.target.value))}
            className="p-2 border rounded-md"
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
            placeholder="Enter custom class name"
          />
        </div>
      </form>
      <div className="flex flex-col gap-10">
        <UserButton size={size} className={className} />
      </div>
    </div>
  );
};

export default UserButtonDemo;
