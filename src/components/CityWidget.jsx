import React from "react";
import { LineChart, Line, ResponsiveContainer } from "recharts";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

const CityWidget = ({
  city,
  forecast,
  percentage,
  trend,
  forecastChart,
  percentageChart,
}) => {
  return (
    <div style={{ borderRadius: "8px", overflow: "hidden" }}>
      <div
        className="bg-white/10 text-white rounded-xl shadow-md w-72 p-4 backdrop-blur-md relative"
        style={{
          border: "2px solid",
          borderImage: "linear-gradient(180deg, #2B0D9A, #66FFE1) 1",
          padding: "1rem",
        }}
      >
        <div className="absolute inset-0 rounded-xl pointer-events-none"></div>
        <h3 className="text-lg font-semibold mb-2 relative z-10">{city}</h3>
        <div className="flex items-center justify-between relative z-10">
          <div>
            <p className="text-sm text-gray-300">Forecast</p>
            <div className="text-xl font-bold flex items-center gap-1">
              {forecast}{" "}
              {trend === "up" ? (
                <ArrowUpRight className="text-green-400" />
              ) : (
                <ArrowDownRight className="text-red-400" />
              )}
            </div>
          </div>
          <div className="h-16 w-32">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={forecastChart}>
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#63b1d4"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="flex items-center justify-between mt-4 relative z-10">
          <div>
            <p className="text-sm text-gray-300">Forecast</p>
            <div className="text-md font-bold flex items-center gap-1">
              {percentage}{" "}
              {trend === "up" ? (
                <ArrowUpRight className="text-green-400" />
              ) : (
                <ArrowDownRight className="text-red-400" />
              )}
            </div>
          </div>
          <div className="h-16 w-32">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={percentageChart}>
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#63b1d4"
                  strokeWidth={2}
                  dot={true}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityWidget;
