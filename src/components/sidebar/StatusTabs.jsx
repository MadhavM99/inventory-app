// components/sidebar/StatusTabs.jsx
import React from "react";
import { ListFilter } from 'lucide-react';


const StatusTabs = ({ selectedStatus, setSelectedStatus }) => (
  <div>
  <div className="flex border-b border-[#66FFE1]">
    {["BACKLOG", "PENDING", "FINAL_SIGNOFF"].map((status) => (
      <button
        key={status}
        onClick={() => setSelectedStatus(status)}
        className={`flex-1 py-3 text-sm font-medium ${
          selectedStatus === status
            ? "border-b-2 border-[#66FFE1] text-[#66FFE1]"
            : "text-gray-400 hover:text-[#66FFE1]"
        }`}
      >
        {status.replace("_", " ")} 
      </button>
    ))}
  </div>
  <div className="flex items-center text-[#66FFE1] font-semibold ml-4 gap-x-2 py-2 text-sm">
  Filter
  <ListFilter className="text-[#66FFE1] my-[2px]" size={20}/>
</div>
   
    </div>  

);

export default React.memo(StatusTabs);
