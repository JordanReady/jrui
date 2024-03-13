import { Lightbulb, ShieldAlert } from "lucide-react";
import React from "react";
import Tooltip from "./Tooltip";
import Link from "next/link";

const SidebarControls = () => {
  return (
    <div className="flex gap-1 absolute right-0">
      <Tooltip
        width={220}
        left="-61px"
        tip="Have an issue with something? Let me know and I'll take a look!"
      >
        <Link href={"/issues"}>
          <ShieldAlert />
        </Link>
      </Tooltip>
      <Tooltip
        width={220}
        left="-89px"
        tip="Have something in mind? Let me know what you want to see!"
      >
        <Link href={"/ideas"}>
          <Lightbulb />
        </Link>
      </Tooltip>
    </div>
  );
};

export default SidebarControls;
