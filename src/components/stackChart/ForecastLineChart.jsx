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
  const formatQuarter = (quarter) => {
    const [q, year] = quarter.split("-");
    return `${q}\n${year}`;
  };

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
            tickFormatter={formatQuarter}
            interval={0}
            height={60}
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

          <Line
            type="linear"
            dataKey="consumption"
            stroke="#3182bd"
            strokeWidth={2}
            dot={{ r: 3, fill: "#3182bd" }}
            activeDot={{ r: 5 }}
            connectNulls
          />

          {showAIForecast && (
            <Line
              type="linear"
              dataKey="aiforecast"
              stroke="#00d68f"
              strokeWidth={2}
              dot={{ r: 3, fill: "#00d68f" }}
              activeDot={{ r: 5 }}
              strokeDasharray="5 5"
            />
          )}

          {showFinalForecast && (
            <Line
              type="linear"
              dataKey="finalforecast"
              stroke="#ffd700"
              strokeWidth={2}
              dot={{ r: 3, fill: "#ffd700" }}
              activeDot={{ r: 5 }}
              strokeDasharray="5 5"
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ForecastLineChart;
