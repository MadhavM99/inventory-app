// components/StackHeader.jsx
import React from "react";
import { useSelector } from "react-redux";

const StackHeader = () => {
  const { stacks, selectedStackId } = useSelector((state) => state.stack);
  const selectedStack = stacks.find((stack) => stack.id === selectedStackId);

  return <>Stack Header</>;
};

export default StackHeader;
