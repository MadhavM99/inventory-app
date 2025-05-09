import React from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const SidebarHeader = ({ collapsed, navigate }) => {
  return (
    <div className={`flex flex-col items-start px-4 pt-2 mt-8 ${collapsed ? "invisible" : ""}`}>
  <Button
    variant="ghost"
    size="sm"
    className="h-6 w-6 p-0 mb-1 hover:bg-gray-800 text-white"
    onClick={() => navigate("/")}
  >
    <ArrowLeft className="h-4 w-4" />
  </Button>
  <span className="text-base font-semibold text-white leading-none">Sample Stack</span>
</div>

  );
};

export default SidebarHeader;
