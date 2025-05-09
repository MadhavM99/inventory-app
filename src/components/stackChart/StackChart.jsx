// StackChart.jsx
import React, { useState } from "react";
import ChartHeader from "./ChartHeader";
import ChartToggles from "./ChartToggles";
import ChartLegend from "./ChartLegend";
import ForecastLineChart from "./ForecastLineChart"; 
import { prepareChartData } from "../ui/utils/prepareChartData";

const StackChart = ({ stack }) => {
  const [showAIForecast, setShowAIForecast] = useState(true);
  const [showFinalForecast, setShowFinalForecast] = useState(true);
  const [showConfidenceInterval, setShowConfidenceInterval] = useState(false);

  if (!stack) return null;

  const dividerQuarter = "Q2-2024";

  const chartData = prepareChartData(stack);



  return (
    <div className="bg-gray-800 p-2 border border-gray-800">
      <ChartHeader
        showConfidenceInterval={showConfidenceInterval}
        setShowConfidenceInterval={setShowConfidenceInterval}
      />
      <div className="grid grid-cols-2 mt-4 ">
        <div className="text-right text-xs">
          <span className="text-gray-300 font-medium">HISTORICAL</span>
        </div>
        <div className="text-left border-teal-500 text-xs ml-5">
          <span className="text-[#66FFE1] font-medium">FORECAST</span>
        </div>
      </div>
      <div className="flex">
      <ChartToggles
        showAIForecast={showAIForecast}
        setShowAIForecast={setShowAIForecast}
        showFinalForecast={showFinalForecast}
        setShowFinalForecast={setShowFinalForecast}
      />
      <ChartLegend />
      </div>
      
      <ForecastLineChart
        chartData={chartData}
        showAIForecast={showAIForecast}
        showFinalForecast={showFinalForecast}
        dividerQuarter={dividerQuarter}
      />
    </div>
  );
};

export default StackChart;
