import React from "react";
import { TriangleAlert, List, Flag } from "lucide-react";

const DetailsHeader = ({ selectedStack }) => (
  <div className="bg-[#193D4D]">
    <div className="flex items-center text-white gap-4 mt-8">
      <TriangleAlert className="text-yellow-500 h-6 w-6 ml-4 " />
      <div className="flex-1 pr-4 pt-0 border-r border-gray-500 font-bold text-lg">
        Sample Stack
      </div>
      <div className="flex-1 text-[12px]">
        Stack ID: {selectedStack.stackId}
      </div>
      <div className="flex-2">
        <List className="text-[#66FFE1]" />
      </div>
      <div className="flex-1 bg-gray-700/100 rounded flex text-xs py-3">
        <div className="flex-1 text-center">
          FORECAST {selectedStack.aiforecast.percentage}%
        </div>
        <div className="flex-1 text-center border-l border-gray-600">
          FORECAST {selectedStack.finalforecast.percentage}%
        </div>
      </div>
      <div>
        <Flag className="text-gray-400" />
      </div>
    </div>
  </div>
);

export default DetailsHeader;
