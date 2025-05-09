import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import SidebarHeader from "./SidebarHeader";
import CollapseToggle from "./CollapseToggle";
import StatusTabs from "./StatusTabs";
import StackList from "./StackList";
import useCityData from "./hooks/useCityData";

const Sidebar = ({ onStackSelect }) => {
  const { city } = useParams();
  const navigate = useNavigate(); 
  const [collapsed, setCollapsed] = useState(false);
  const {cityData,
    selectedStatus,
    setSelectedStatus,
    selectedStackId,
    setSelectedStackId,
    filteredStacks,} = useCityData(onStackSelect);

  return (
    <div
      className={`bg-[#193D4D] h-full flex flex-col border-r border-gray-800 transition-all duration-300 ${collapsed ? "w-12" : "w-[30vw]"}`}
    >
      <SidebarHeader collapsed={collapsed} navigate={navigate}  />
      <CollapseToggle collapsed={collapsed} setCollapsed={setCollapsed} />

      {!collapsed && (
        <>
          <StatusTabs
            selectedStatus={selectedStatus}
            setSelectedStatus={setSelectedStatus}
          />
          <StackList
            stacks={filteredStacks}
            selectedStackId={selectedStackId}
            onStackSelect={(stack) => {
              setSelectedStackId(stack.stackId);
              onStackSelect(stack);
            }}
          />
        </>
      )}
    </div>
  );
};

export default Sidebar;
