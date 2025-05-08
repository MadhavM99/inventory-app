import React from "react";

const StackItem = ({ stack, isSelected, onClick }) => {
  return (
    <div
      onClick={() => onClick(stack)}
      className={`p-3 mb-2 rounded-md cursor-pointer transition-all
        ${
          isSelected
            ? "overflow-hidden border-2 border-[#66FFE1]"
            : "hover:bg-gray-800 border-2 border-transparent"
        }`}
    >
      <div className="flex gap-3 mt-2">
        <span className="text-black text-sm px-2 py-1 bg-gray-100 rounded">
        ↑ F'CAST STAB.
        </span>
        <span className="text-black text-sm px-2 py-1 bg-gray-100 rounded">
        ↑ F'CAST ACC.
        </span>
      </div>
      <div className="font-xs truncate p-2 text-xs">Sample Stack</div>
    </div>
  );
};

export default React.memo(StackItem);
