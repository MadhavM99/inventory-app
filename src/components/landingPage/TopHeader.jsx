import React, { useState, useEffect, useRef, memo } from "react";
import { LayoutPanelTop, Globe, CircleUserRound } from "lucide-react";
import OrientationDropdown from "./OrientationDropdown";

const TopHeader = ({ orientation, setOrientation }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    };

    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  return (
    <div className="absolute top-0 w-full z-30 flex items-center justify-between px-6 py-1 bg-black/50 text-white">
      <div className="flex items-center gap-3">
        <h1 className="text-sm font-bold">WebApp</h1>
        {orientation && setOrientation && (
          <>
            <button
              ref={buttonRef}
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="bg-black/60 hover:bg-black/80 text-white p-1 rounded-full"
            >
              <LayoutPanelTop size={20} />
            </button>
            {dropdownOpen && (
              <div ref={dropdownRef}>
                <OrientationDropdown
                  setOrientation={setOrientation}
                  setDropdownOpen={setDropdownOpen}
                />
              </div>
            )}
          </>
        )}
      </div>

      <div className="flex items-center gap-2">
        <Globe />
        <CircleUserRound />
        <span className="text-sm">user</span>
      </div>
    </div>
  );
};

export default memo(TopHeader);
