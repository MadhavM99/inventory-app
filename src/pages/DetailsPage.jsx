import React from "react";
import StackData from "../components/dataTable/StackData";
import Sidebar from "../components/sidebar/Sidebar";
import StackChart from "../components/stackChart/StackChart";
import TopHeader from "../components/landingPage/TopHeader";
import DetailsHeader from "../components/detailsPage/DetailsHeader";
import RequirementsBar from "../components/detailsPage/RequirementsBar";

import { useSelectedStack } from "../context/SelectedStackContext";

const DetailsPage = () => {
  const { selectedStack } = useSelectedStack();

  return (
    <div className="relative h-screen bg-[#193D4D] text-white flex flex-col">
      <TopHeader />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div className="flex-1 overflow-auto pt-1">
          {selectedStack ? (
            <div className="space-y-1">
              <DetailsHeader selectedStack={selectedStack} />
              <RequirementsBar />
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
