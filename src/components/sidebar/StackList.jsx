// components/sidebar/StackList.jsx
import React from "react";
import StackItem from "./StackItem";

const StackList = ({ stacks, selectedStackId, onStackSelect }) => {
  return (
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
};

export default React.memo(StackList);
