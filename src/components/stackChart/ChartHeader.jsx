import React from "react";

const ChartHeader = ({ showConfidenceInterval, setShowConfidenceInterval }) => (
  <div className="flex justify-between items-center">
    <div className="flex gap-4">
      <div className="text-gray-300">Forecast Horizon</div>
      <div className="text-gray-300">Latest Issue</div>
      <div className="ml-2">
        <svg
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          className="text-teal-400 inline"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path d="M12 16v-4M12 8h.01" strokeLinecap="round" strokeWidth="2" />
        </svg>
      </div>
    </div>
    <div className="flex items-center">
      <div className="text-white mr-2 text-sm">SHOW CONFIDENCE INTERVAL</div>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={showConfidenceInterval}
          onChange={() => setShowConfidenceInterval(!showConfidenceInterval)}
        />
        <div
          className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer 
          peer-checked:after:translate-x-full after:content-[''] after:absolute 
          after:bg-white after:border after:rounded-full after:h-4 after:w-4 
          after:top-1 after:left-1 after:transition-all"
        />
      </label>
    </div>
  </div>
);

export default ChartHeader;
