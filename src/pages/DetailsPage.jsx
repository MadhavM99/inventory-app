import React, { lazy, Suspense } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import TopHeader from "../components/landingPage/TopHeader";
import DetailsHeader from "../components/detailsPage/DetailsHeader";
import RequirementsBar from "../components/detailsPage/RequirementsBar";

const StackChart = lazy(() => import("../components/stackChart/StackChart"));
const StackData = lazy(() => import("../components/dataTable/StackData"));

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
              <Suspense fallback={<div>Loading chart...</div>}>
                <StackChart stack={selectedStack} />
              </Suspense>{" "}
              <Suspense fallback={<div>Loading data...</div>}>
                <StackData stack={selectedStack} />
              </Suspense>{" "}
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
