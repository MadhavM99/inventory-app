import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

const ForecastLineChart = ({
  chartData,
  showAIForecast,
  showFinalForecast,
  dividerQuarter,
}) => {
  return (
    <div style={{ height: "400px", width: "100%" }}>
      <ResponsiveContainer>
        <LineChart
          data={chartData}
          margin={{ top: 20, right: 20, bottom: 30, left: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical stroke="#333" />
          <XAxis
            dataKey="quarter"
            tick={{ fill: "#aaa", fontSize: 10 }}
            interval={0}
            height={10}
          />
          <YAxis
            domain={[0, 900]}
            ticks={[0, 100, 200, 300, 400, 500, 600, 700, 800, 900]}
            tick={{ fill: "#aaa" }}
            label={{
              value: "CONSUMPTION (FT, THOUSANDS)",
              angle: -90,
              position: "insideLeft",
              offset: -10,
              style: { fill: "#aaa", fontSize: 12, textAnchor: "middle" },
            }}
          />
          <Tooltip />
          <ReferenceLine
            x={dividerQuarter}
            stroke="#888"
            strokeDasharray="3 3"
            strokeWidth={1}
          />

          {showAIForecast && (
            <Line
              type="linear"
              dataKey="aiforecast"
              stroke="#00bba7"
              strokeWidth={2}
              dot={{ r: 3, fill: "#00d68f" }}
              activeDot={{ r: 5 }}
            />
          )}
          {showAIForecast && (
            <Line
              type="linear"
              dataKey="Data1"
              stroke="#00bba7"
              strokeWidth={2}
              dot={{ r: 3, fill: "#00d68f" }}
              activeDot={{ r: 5 }}
              strokeDasharray="3 3"
            />
          )}
          {showFinalForecast && (
            <Line
              type="linear"
              dataKey="finalforecast"
              stroke="#efb000"
              strokeWidth={2}
              dot={{ r: 3, fill: "#efb000" }}
              activeDot={{ r: 5 }}
            />
          )}
          {showFinalForecast && (
            <Line
              type="linear"
              dataKey="Data2"
              stroke="#efb000"
              strokeWidth={2}
              dot={{ r: 3, fill: "#efb000" }}
              activeDot={{ r: 5 }}
              strokeDasharray="3 3"
            />
          )}
          <Line
            type="linear"
            dataKey="consumption"
            stroke="#2b7fff"
            strokeWidth={2}
            dot={{ r: 3, fill: "#2b7fff" }}
            activeDot={{ r: 5 }}
          />
          <Line
            type="linear"
            dataKey="Data3"
            stroke="#2b7fff"
            strokeWidth={2}
            dot={{ r: 3, fill: "#2b7fff" }}
            activeDot={{ r: 5 }}
            strokeDasharray="3 3"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ForecastLineChart;
