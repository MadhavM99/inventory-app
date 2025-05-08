import React, { useState } from 'react';
import { LayoutPanelTop } from 'lucide-react';

const TopHeader = ({ orientation, setOrientation }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="absolute top-0 w-full z-30 flex items-center justify-between px-6 py-3 bg-black/50 text-white">
      <div className="flex items-center gap-3">
        <h1 className="text-xl font-bold">WebApp</h1>
        {orientation && setOrientation && (
          <>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="bg-black/60 hover:bg-black/80 text-white p-1 rounded-full"
            >
              <LayoutPanelTop size={20} />
            </button>
            {dropdownOpen && (
              <div className="absolute mt-12 bg-black/80 text-white rounded shadow p-2 space-y-1 text-sm">
                <div onClick={() => { setOrientation('horizontal-top'); setDropdownOpen(false); }} className="cursor-pointer hover:underline">Top Horizontal</div>
                <div onClick={() => { setOrientation('horizontal-bottom'); setDropdownOpen(false); }} className="cursor-pointer hover:underline">Bottom Horizontal</div>
                <div onClick={() => { setOrientation('vertical-left'); setDropdownOpen(false); }} className="cursor-pointer hover:underline">Left Vertical</div>
                <div onClick={() => { setOrientation('vertical-right'); setDropdownOpen(false); }} className="cursor-pointer hover:underline">Right Vertical</div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default TopHeader;
