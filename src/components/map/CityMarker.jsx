import React, { memo } from "react";
import { Marker } from "react-map-gl/maplibre";
import { Home } from "lucide-react";

const CityMarker = ({ city, onHover }) => {
  return (
    <Marker longitude={city.coords[0]} latitude={city.coords[1]}>
      <div
        onMouseOver={() => onHover(city)}
        onMouseLeave={() => onHover(null)}
        className="w-8 h-8 bg-red-400 rounded-full flex items-center justify-center hover:scale-125 transition-transform cursor-pointer"
      >
        <Home size={16} className="text-white" />
      </div>
    </Marker>
  );
};

export default memo(CityMarker);
