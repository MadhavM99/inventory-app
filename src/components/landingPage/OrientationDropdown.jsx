import React from "react";

const options = [
  { label: "Top Horizontal", value: "horizontal-top" },
  { label: "Bottom Horizontal", value: "horizontal-bottom" },
  { label: "Left Vertical", value: "vertical-left" },
  { label: "Right Vertical", value: "vertical-right" },
];

const OrientationDropdown = ({ setOrientation, setDropdownOpen }) => {
  return (
    <div className="absolute bg-black/80 text-white rounded shadow p-2 text-sm">
      {options.map((option) => (
        <div
          key={option.value}
          onClick={() => {
            setOrientation(option.value);
            setDropdownOpen(false);
          }}
          className="cursor-pointer hover:underline"
        >
          {option.label}
        </div>
      ))}
    </div>
  );
};

export default React.memo(OrientationDropdown);
