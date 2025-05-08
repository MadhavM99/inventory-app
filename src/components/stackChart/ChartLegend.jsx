import React from "react";

const ChartLegend = () => (
  <div className="flex items-center mt-4 mb-2">
    <div className="flex gap-6 ml-8">
      <div className="flex items-center gap-1">
        <div className="h-2 w-2 bg-teal-500 rounded-full" />
        <span className="text-gray-300 text-sm">AI Forecast</span>
      </div>
      <div className="flex items-center gap-1">
        <div className="h-2 w-2 bg-yellow-500 rounded-full" />
        <span className="text-gray-300 text-sm">Final Forecast</span>
      </div>
      <div className="flex items-center gap-1">
        <div className="h-2 w-2 border border-dashed border-gray-400 rounded-full" />
        <span className="text-gray-300 text-sm">
          Previous Quarter Final Forecast
        </span>
      </div>
    </div>
  </div>
);

export default ChartLegend;
