import React from "react";
import Reveal from "@/components/Reveal";
import UserButton from "@/app/demo/components/UserButton";

const UserButtonDemo = () => {
  return (
    <Reveal className=" ml-[calc(50%-25px)] my-2 h-[320px] ">
      <UserButton />
    </Reveal>
  );
};

export default UserButtonDemo;
