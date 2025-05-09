import React from "react";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

const MetricBlock = ({ label, value, trend }) => (
  <div>
    <p className="text-sm text-gray-300">{label}</p>
    <div className="text-md font-bold flex items-center gap-1">
      {value}{" "}
      {trend === "up" ? (
        <ArrowUpRight className="text-green-400" />
      ) : (
        <ArrowDownRight className="text-red-400" />
      )}
    </div>
  </div>
);

export default React.memo(MetricBlock);
