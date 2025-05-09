import React from "react";
import { Switch } from "@/components/ui/switch";


const ChartToggles = ({
  showAIForecast,
  setShowAIForecast,
  showFinalForecast,
  setShowFinalForecast,
}) => (
  <div className="flex items-center mt-1 gap-6">
      <div className="flex items-center gap-3">
        <Switch 
          checked={showAIForecast}
          onCheckedChange={setShowAIForecast}
        />
        <div className="h-4 w-1 bg-teal-500" />
        <div className="flex items-center">
          <span className="text-teal-500 text-[10px]">AI FORECAST</span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Switch 
          checked={showFinalForecast}
          onCheckedChange={setShowFinalForecast}
        />
        <div className="h-4 w-1 bg-yellow-500" />
        <div className="flex items-center">
          <span className="text-yellow-500 text-[10px]">FINAL FORECAST</span>
        </div>
      </div>
      <div className="flex items-center ml-auto">
        <span className="text-gray-300 mr-2 text-[10px]">Consumption:</span>
        <div className="w-12 border-b border-blue-500" />
      </div>
    </div>
);

export default ChartToggles;
