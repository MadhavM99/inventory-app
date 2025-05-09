import { ToggleRight } from "lucide-react";
import React from "react";
import { Info } from 'lucide-react';


const ChartHeader = ({ showConfidenceInterval, setShowConfidenceInterval }) => (
  <div>
    <div className="flex items-center">
      <span className="text-xs ml-2 text-white">FORECAST HORIZON</span>
      <span className="text-xs ml-2 text-white">Latest Issue</span>
      < Info className="w-10 h-4 text-[#66FFE1]" />
      <ToggleRight className="w-10 h-4 text-gray-400" />
      <span className="text-xs ml-2 text-white">SHOW CONFIDENCE LEVEL</span>
    </div>
  </div>
);

export default ChartHeader;
