import React from "react";

const ChartLegend = () => (
  <div className="flex items-center mt-4 mb-2 ml-16">
    <div className="flex gap-6 ml-8">
      <div className="flex items-center gap-1">
        <div className="h-2 w-2 border border-dashed border-teal-400 rounded-full" />
        <span className="text-gray-300 text-[10px]">AI Forecast</span>
      </div>
      <div className="flex items-center gap-1">
        <div className="h-2 w-2 border border-dashed border-yellow-400 rounded-full" />
        <span className="text-gray-300 text-[10px]">Final Forecast</span>
      </div>
      <div className="flex items-center gap-1">
        <div className="h-2 w-2 border border-dashed border-gray-400 rounded-full" />
        <span className="text-gray-300 text-[10px]">
          Previous Quarter Final Forecast
        </span>
      </div>
    </div>
  </div>
);

export default ChartLegend;
