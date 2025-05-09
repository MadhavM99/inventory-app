import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CollapseToggle = ({ collapsed, setCollapsed }) => (
  <div className="relative border-b border-gray-800">
    <div className="p-1 flex justify-end" />
    <Button
      variant="ghost"
      size="sm"
      className="absolute top-2 -right-4 h-12 w-8 hover:bg-[#193D4D] bg-[#193D4D] z-10 text-black"
      onClick={() => setCollapsed(!collapsed)}
    >
      {collapsed ? (
        <ChevronRight className="h-4 w-4 bg-[#66FFE1] text-black border border-gray-700 transition-all duration-300`" />
      ) : (
        <ChevronLeft className="h-4 w-4 bg-[#66FFE1]" />
      )}
    </Button>
  </div>
);

export default CollapseToggle;