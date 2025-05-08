// components/Sidebar.jsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const StatusTabs = ({ selectedStatus, setSelectedStatus }) => (
  <div className="flex border-b border-gray-800">
    {["BACKLOG", "PENDING", "FINAL_SIGNOFF"].map((status) => (
      <button
        key={status}
        onClick={() => setSelectedStatus(status)}
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

const StackItem = ({ stack, isSelected, onClick }) => (
  <div
    onClick={() => onClick(stack)}
    className={`p-3 mb-2 rounded-md cursor-pointer transition-all ${
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
        Final: {stack.finalforecast.percentage}%
      </span>
    </div>
  </div>
);

const StackList = ({ stacks, selectedStackId, onStackSelect }) => (
  <div className="flex-1 overflow-y-auto p-2">
    {stacks.map((stack) => (
      <StackItem
        key={stack.stackId}
        stack={stack}
        isSelected={stack.stackId === selectedStackId}
        onClick={onStackSelect}
      />
    ))}
  </div>
);

const Sidebar = ({ onStackSelect }) => {
  const { city } = useParams();
  const navigate = useNavigate();
  const [cityData, setCityData] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState("BACKLOG");
  const [selectedStackId, setSelectedStackId] = useState(null);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const fetchCityData = async () => {
      try {
        const response = await fetch(`/data/${city}.json`);
        if (!response.ok) throw new Error("City data not found");
        const data = await response.json();
        setCityData(data);
      } catch (error) {
        console.error("Error loading city data:", error);
        navigate("/");
      }
    };
    fetchCityData();
  }, [city, navigate]);

  const filteredStacks =
    cityData?.stacks?.filter((s) => s.stackStatus === selectedStatus) || [];

  return (
    <div
      className={`bg-black h-full flex flex-col border-r border-gray-800 transition-all duration-300 ${
        collapsed ? "w-12" : "w-[30vw]"
      }`}
    >
      <div className="p-2 border-b border-gray-800 flex justify-end">
        <Button
          variant="ghost"
          size="sm"
          className="h-8 w-8 p-0 hover:bg-gray-800"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? (
            <ChevronRight className="h-4 w-4 text-white" />
          ) : (
            <ChevronLeft className="h-4 w-4 text-white" />
          )}
        </Button>
      </div>

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
