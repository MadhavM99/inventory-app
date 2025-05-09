import React, { useState } from "react";
import { Square, TriangleAlert } from "lucide-react";
import { useParams } from "react-router-dom";
import StackData from "../components/StackData";
import Sidebar from "../components/sidebar/Sidebar";
import StackChart from "../components/stackChart/StackChart";
import TopHeader from "../components/landingPage/TopHeader";
import { List } from 'lucide-react';
import { Flag } from 'lucide-react';
import { FileCheck } from 'lucide-react';
import { ToggleRight } from 'lucide-react';
import { SquareArrowDown } from 'lucide-react';



const DetailsPage = () => {
  const [selectedStack, setSelectedStack] = useState(null);
  return (
    <div className="relative h-screen bg-[#193D4D] text-white flex flex-col">
      <TopHeader />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar onStackSelect={setSelectedStack} />
        <div className="flex-1 overflow-auto pt-1">
          {selectedStack ? (
            <div className="space-y-1">
              <div className="bg-[#193D4D]">
                <div className="flex items-center text-white gap-4 mt-8">
                  <TriangleAlert className="text-yellow-500 h-6 w-6 ml-4 " />
                  <div className="flex-1 pr-4 pt-0 border-r border-gray-500 font-bold text-lg">
                    Sample Stack
                  </div>
                  <div className="flex-1 text-[12px]">
                    Stack ID: {selectedStack.stackId} 
                  </div>
                  <div className="flex-2">
                  <List className="text-[#66FFE1]"/>
                    </div>
                  <div className="flex-1 bg-gray-700/100 rounded flex text-xs py-3">
                    <div className="flex-1 text-center">
                      FORECAST {selectedStack.aiforecast.percentage}%
                    </div>
                    <div className="flex-1 text-center border-l border-gray-600">
                      FORECAST {selectedStack.finalforecast.percentage}%
                    </div>
                  </div>
                  <div><Flag className="text-gray-400"/></div>
                </div>
              </div>
              <div className="flex items-center border-t border-black">
                <FileCheck className="w-4 h-4 ml-7 my-2 text-gray-400"/>
                <span className="text-xs ml-2 text-gray-400">SPECIAL REQUIREMENTS</span>
                <ToggleRight className="w-10 h-4 text-gray-400"/>
                <SquareArrowDown className="w-10 h-4 text-gray-400" />
              </div>

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
