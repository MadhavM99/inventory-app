import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import StackItem from "./StackItem";
import StatusTabs from "./StatusTabs";
import StackList from "./StackList";

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

        if (data != null) {
          setSelectedStackId(data?.stacks[0]?.stackId);
          onStackSelect(data?.stacks[0]);
        }
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
      className={`bg-[#193D4D] h-full flex flex-col border-r border-gray-800 transition-all duration-300 ${collapsed ? "w-12" : "w-[25vw]"
        }`}
    >
      <div className={`flex flex-col items-start px-4 py-2 ${collapsed ?'invisible' :''}`}>
  { (
    <>
      <Button
        variant="ghost"
        size="sm"
        className="h-8 p-0 mb-2 hover:bg-gray-800"
        
        onClick={() => navigate("/")}
      >
        <ChevronLeft className="h-4 w-4 text-[#66FFE1]" />
      </Button>

      <span className="text-lg text-[#66FFE1] font-semibold">
        Sample Stack
      </span>
    </>
  )}
</div>



      <div className="relative border-b border-gray-800">
  <div className="p-2 flex justify-end">
    {/* Empty spacer to maintain structure if needed */}
  </div>
  <Button
    variant="ghost"
    size="sm"
    className="absolute top-2 -right-4 h-8 w-8 p-0 hover:bg-gray-800 bg-[#193D4D] border border-gray-700 rounded-full z-10"
    onClick={() => setCollapsed(!collapsed)}
  >
    {collapsed ? (
      <ChevronRight className="h-4 w-4 text-[#66FFE1]" />
    ) : (
      <ChevronLeft className="h-4 w-4 text-[#66FFE1]" />
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
