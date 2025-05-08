// StackChart.jsx
import React, { useState } from "react";
import ChartHeader from "./ChartHeader";
import ChartToggles from "./ChartToggles";
import ChartLegend from "./ChartLegend";
import ForecastLineChart from "./ForecastLineChart";

const StackChart = ({ stack }) => {
  const [showAIForecast, setShowAIForecast] = useState(true);
  const [showFinalForecast, setShowFinalForecast] = useState(true);
  const [showConfidenceInterval, setShowConfidenceInterval] = useState(false);

  if (!stack) return null;

  const dividerQuarter = "Q2-2024";
  const quarters = [
    "Q2-2022",
    "Q3-2022",
    "Q4-2022",
    "Q1-2023",
    "Q2-2023",
    "Q3-2023",
    "Q4-2023",
    "Q1-2024",
    "Q2-2024",
    "Q3-2024",
    "Q4-2024",
    "Q1-2025",
    "Q2-2025",
    "Q3-2025",
    "Q4-2025",
    "Q1-2026",
    "Q2-2026",
  ];

  const chartData = quarters.map((quarter) => {
    const aiQuarter = stack.aiforecast.quarters.find(
      (q) => q.quarter === quarter
    );
    const consumptionQuarter = stack.consumption.quarters.find(
      (q) => q.quarter === quarter
    );
    const finalQuarter = stack.finalforecast.quarters.find(
      (q) => q.quarter === quarter
    );
    const isForecast =
      quarters.indexOf(quarter) >= quarters.indexOf(dividerQuarter);

    return {
      quarter,
      aiforecast: aiQuarter ? aiQuarter.value / 1000 : undefined,
      consumption: consumptionQuarter
        ? consumptionQuarter.value / 1000
        : undefined,
      finalforecast: finalQuarter ? finalQuarter.value / 1000 : undefined,
      isForecast,
    };
  });

  return (
    <div className="bg-black p-6 rounded-lg border border-gray-800">
      <ChartHeader
        showConfidenceInterval={showConfidenceInterval}
        setShowConfidenceInterval={setShowConfidenceInterval}
      />
      <div className="grid grid-cols-2 mt-4 border-b border-gray-700">
        <div className="text-center py-2">
          <span className="text-gray-300 font-medium">HISTORICAL</span>
        </div>
        <div className="text-center py-2 border-teal-500">
          <span className="text-teal-500 font-medium">FORECAST</span>
        </div>
      </div>
      <ChartToggles
        showAIForecast={showAIForecast}
        setShowAIForecast={setShowAIForecast}
        showFinalForecast={showFinalForecast}
        setShowFinalForecast={setShowFinalForecast}
      />
      <ChartLegend />
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
