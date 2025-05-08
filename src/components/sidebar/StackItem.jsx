// components/sidebar/StackItem.jsx
import React from "react";

const StackItem = ({ stack, isSelected, onClick }) => {
  return (
    <div
      onClick={() => onClick(stack)}
      className={`p-3 mb-2 rounded-md cursor-pointer transition-all
        ${
          isSelected
            ? "bg-gray-800 border-2 border-blue-500"
            : "hover:bg-gray-800 border-2 border-transparent"
        }`}
    >
      <div className="font-medium truncate">{stack.stackName}</div>
      <div className="flex gap-2 mt-2">
        <span className="text-xs px-2 py-1 bg-green-600 rounded">
          AI: {stack.aiforecast.percentage}%
        </span>
        <span className="text-xs px-2 py-1 bg-yellow-600 rounded">
          Final: {stack.aiforecast.percentage}%
        </span>
      </div>
    </div>
  );
};

export default React.memo(StackItem);
