import React from "react";
import { FileCheck, ToggleRight, SquareArrowDown } from "lucide-react";

const RequirementsBar = () => (
  <div className="flex items-center border-t border-black">
    <FileCheck className="w-4 h-4 ml-7 my-2 text-gray-400" />
    <span className="text-xs ml-2 text-gray-400">SPECIAL REQUIREMENTS</span>
    <ToggleRight className="w-10 h-4 text-gray-400" />
    <SquareArrowDown className="w-10 h-4 text-gray-400" />
  </div>
);

export default RequirementsBar;
