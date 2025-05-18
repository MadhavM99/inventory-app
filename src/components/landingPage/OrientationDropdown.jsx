import React from "react";
import { LayoutPanelTop } from "lucide-react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "../ui/menubar";

const OrientationDropdown = ({ setOrientation }) => {
  const options = [
    { label: "Top", value: "top" },
    { label: "Bottom", value: "bottom" },
    { label: "Left", value: "left" },
    { label: "Right", value: "right" },
  ];

  return (
    <Menubar className="bg-transparent border-none ">
      <MenubarMenu>
        <MenubarTrigger className="bg-transparent text-white border-none">
          <LayoutPanelTop size={20} />
        </MenubarTrigger>
        <MenubarContent>
          {options.map((option) => (
            <MenubarItem
              key={option.value}
              onClick={() => setOrientation(option.value)}
            >
              {option.label}
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default OrientationDropdown;
