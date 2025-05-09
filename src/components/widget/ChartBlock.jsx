import React from "react";
import { LineChart, Line, ResponsiveContainer } from "recharts";

const ChartBlock = ({ data, dot }) => (
  <div className="h-10 w-32">
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <Line
          type="monotone"
          dataKey="value"
          stroke="#63b1d4"
          strokeWidth={2}
          dot={dot}
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default React.memo(ChartBlock);
