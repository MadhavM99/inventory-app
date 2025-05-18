import React, { useState, useEffect, useRef, memo } from "react";
import { LayoutPanelTop, Globe, CircleUserRound } from "lucide-react";
import OrientationDropdown from "./OrientationDropdown";

const TopHeader = ({ orientation, setOrientation }) => {
  return (
    <div className="absolute top-0 w-full z-30 flex items-center justify-between px-6 py-0 bg-black/50 text-white">
      <div className="flex items-center gap-3 z-20">
        <h1 className="text-sm font-bold">WebApp</h1>
        <div className={setOrientation ? "" : "invisible"}>
          <OrientationDropdown setOrientation={setOrientation} />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Globe />
        <CircleUserRound />
        <span className="text-sm">user</span>
      </div>
    </div>
  );
};

export default memo(TopHeader);
