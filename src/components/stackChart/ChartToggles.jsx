import React from "react";

const ChartToggles = ({
  showAIForecast,
  setShowAIForecast,
  showFinalForecast,
  setShowFinalForecast,
}) => (
  <div className="flex items-center mt-4 gap-6">
    <div className="flex items-center gap-2">
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={showAIForecast}
          onChange={() => setShowAIForecast(!showAIForecast)}
        />
        <div
          className="w-11 h-6 bg-gray-700 rounded-full peer 
          peer-checked:after:translate-x-full after:content-[''] after:absolute 
          after:bg-white after:border after:rounded-full after:h-4 after:w-4 
          after:top-1 after:left-1 after:transition-all"
        />
      </label>
      <div className="inline-flex items-center">
        <span className="text-teal-500 ml-1 text-sm">AI FORECAST</span>
        <div className="h-3 w-3 rounded-full bg-teal-500 ml-3 mr-1" />
        <span className="text-teal-500">88%</span>
      </div>
    </div>
    <div className="flex items-center gap-2">
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={showFinalForecast}
          onChange={() => setShowFinalForecast(!showFinalForecast)}
        />
        <div
          className="w-11 h-6 bg-gray-700 rounded-full peer 
          peer-checked:after:translate-x-full after:content-[''] after:absolute 
          after:bg-white after:border after:rounded-full after:h-4 after:w-4 
          after:top-1 after:left-1 after:transition-all"
        />
      </label>
      <div className="inline-flex items-center">
        <span className="text-gray-300 ml-1 text-sm">FINAL FORECAST</span>
        <div className="h-3 w-3 rounded-full bg-yellow-500 ml-3 mr-1" />
        <span className="text-yellow-500 text-sm">80%</span>
      </div>
    </div>
    <div className="flex items-center">
      <span className="text-gray-300 mr-2 text-sm">Consumption:</span>
      <div className="w-12 border-b border-blue-500 border-solid" />
    </div>
  </div>
);

export default ChartToggles;
