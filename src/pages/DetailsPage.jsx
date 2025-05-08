import StackData from "../components/StackData";
import React, { useState } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import StackChart from "../components/stackChart/StackChart";

const DetailsPage = () => {
  const [selectedStack, setSelectedStack] = useState(null);

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Sidebar onStackSelect={setSelectedStack} />

      <div className="flex-1 p-8 overflow-auto">
        {selectedStack ? (
          <div className="space-y-8">
            {/* Header */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl font-bold">{selectedStack.stackName}</h2>
              <div className="flex gap-4 mt-4">
                <div className="bg-gray-700 px-4 py-2 rounded">
                  <span className="text-gray-300">Status: </span>
                  {selectedStack.stackStatus}
                </div>
                <div className="bg-blue-600 px-4 py-2 rounded">
                  AI Forecast: {selectedStack.aiforecast.percentage}%
                </div>
                <div className="bg-yellow-600 px-4 py-2 rounded">
                  Final Forecast: {selectedStack.finalforecast.percentage}%
                </div>
              </div>
            </div>

            {/* Chart */}
            <StackChart stack={selectedStack} />
            <StackData stack={selectedStack} />
          </div>
        ) : (
          <div className="text-gray-400 text-center mt-20">
            Select a stack from the sidebar
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailsPage;
