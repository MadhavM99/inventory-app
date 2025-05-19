import React from "react";
import { Mail } from "lucide-react";
import { useSelectedStack } from "../../context/SelectedStackContext";

const StackItem = ({ stack, isSelected }) => {
  const { selectedStack, setSelectedStack } = useSelectedStack();

  return (
    <div
      onClick={() => setSelectedStack(stack)}
      className={`px-3 cursor-pointer transition-all pb-5
        ${
          isSelected
            ? "overflow-hidden border-2 border-[#66FFE1]"
            : "hover:bg-gray-800 border-2 border-transparent"
        } `}
    >
      <div className="flex justify-between items-center mt-2">
        <div className="flex gap-3">
          <span className="text-black text-sm font-bold px-2 py-1 bg-gray-100/80 rounded">
            ↑ F'CAST STAB.
          </span>
          <span className="text-black text-sm font-bold px-2 py-1 bg-gray-100/80 rounded">
            ↑ F'CAST ACC.
          </span>
        </div>
        <Mail className="text-[#66FFE1] h-5 w-5" />
      </div>
      <div className="font-xs truncate p-2 text-xs">Sample Stack</div>
    </div>
  );
};

export default React.memo(StackItem);
