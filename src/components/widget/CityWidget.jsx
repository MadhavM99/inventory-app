import React from "react";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import ChartBlock from "./ChartBlock";
import MetricBlock from "./MetricBlock";

const CityWidget = React.memo(
  ({ city, forecast, percentage, trend, forecastChart, percentageChart }) => {
    return (
      <div style={{ borderRadius: "8px", overflow: "hidden" }}>
        <div
          className="bg-white/10 text-white rounded-xl shadow-md w-50 backdrop-blur-md relative"
          style={{
            border: "2px solid",
            borderImage: "linear-gradient(180deg, #2B0D9A, #66FFE1) 1",
            padding: "8px 10px",
          }}
        >
          <div className="absolute inset-0 rounded-xl pointer-events-none"></div>
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
