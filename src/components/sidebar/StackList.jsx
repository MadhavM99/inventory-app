import React from "react";
import StackItem from "./StackItem";
import { useSelectedStack } from "../../context/SelectedStackContext";

const StackList = ({ stacks }) => {
  const { selectedStack } = useSelectedStack();

  return (
    <div className="flex-1 overflow-y-auto py-2">
      {stacks.map((stack) => (
        <StackItem
          key={stack.stackId}
          stack={stack}
          isSelected={selectedStack?.stackId === stack.stackId}
        />
      ))}
    </div>
  );
};

export default React.memo(StackList);
