import React from "react";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import ChartBlock from "./ChartBlock";
import MetricBlock from "./MetricBlock";

const CityWidget = React.memo(
  ({ city, forecast, percentage, trend, forecastChart, percentageChart }) => {
    return (
      <div style={{ borderRadius: "6px", overflow: "hidden" }}>
        <div
          className="bg-white/20 text-white rounded-xl shadow-md w-55 h-40 backdrop-blur-md relative"
          style={{
            border: "3px solid",
            borderImage: "linear-gradient(180deg, #2B0D9A, #66FFE1) 1",
            padding: "8px 8px",
          }}
        >
          <h3 className="text-lg font-semibold mb-2 relative z-10">{city}</h3>

          <div className="flex items-center justify-between relative z-10">
            <MetricBlock label="Forecast" value={forecast} trend={trend} />
            <ChartBlock data={forecastChart} dot={false} />
          </div>

          <div className="flex items-center justify-between mt-2 relative z-10">
            <MetricBlock label="Forecast" value={percentage} trend={trend} />
            <ChartBlock data={percentageChart} dot={true} />
          </div>
        </div>
      </div>
    );
  }
);

export default CityWidget;
