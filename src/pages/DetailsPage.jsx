import StackData from "../components/StackData";
import React, { useState } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import StackChart from "../components/stackChart/StackChart";
import { TriangleAlert } from 'lucide-react';
import TopHeader from "../components/TopHeader";

const DetailsPage = () => {
    const [selectedStack, setSelectedStack] = useState(null);

    return (
        <div className="relative h-screen bg-[#193D4D] text-white">
            {/* Fixed Top Header */}
            <TopHeader />

            <div className="flex pt-16 h-full">
                <Sidebar onStackSelect={setSelectedStack} />

                <div className="flex-1 overflow-auto py-2 px-4">
                    {selectedStack ? (
                        <div className="space-y-8">
                            {/* Header */}
                            <div className="bg-[#193D4D] mt-2 rounded-lg mb-4">
                                <div className="flex items-center text-white gap-4">
                                    {/* Warning Icon */}
                                    <TriangleAlert className="text-yellow-500 h-6 w-6 ml-4" />

                                    {/* Sample Stack */}
                                    <div className="flex-1 pr-4 border-r border-gray-500 font-bold text-lg">
                                        Sample Stack
                                    </div>

                                    {/* Stack ID */}
                                    <div className="flex-1">
                                        Stack ID: {selectedStack.stackId}
                                    </div>

                                    {/* Forecasts (side by side) */}
                                    <div className="flex-1 bg-gray-700/40 rounded flex justify-between items-center text-sm">
                                        <div className="flex-1 text-center">AI Forecast: {selectedStack.aiforecast.percentage}%</div>
                                        <div className="flex-1 text-center border-l border-gray-600">
                                            Final Forecast: {selectedStack.finalforecast.percentage}%
                                        </div>
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
        </div>
    );
};

export default DetailsPage;
