// components/sidebar/StatusTabs.jsx
import React from "react";

const StatusTabs = ({ selectedStatus, onStatusChange }) => {
  const statuses = ["BACKLOG", "PENDING", "FINAL_SIGNOFF"];

  return (
    <div className="flex border-b border-gray-800">
      {statuses.map((status) => (
        <button
          key={status}
          onClick={() => onStatusChange(status)}
          className={`flex-1 py-3 text-sm font-medium ${
            selectedStatus === status
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-gray-400 hover:text-blue-400"
          }`}
        >
          {status.replace("_", " ")}
        </button>
      ))}
    </div>
  );
};

export default React.memo(StatusTabs);
