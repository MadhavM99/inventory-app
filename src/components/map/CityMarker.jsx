import React, { memo } from "react";
import { Marker } from "react-map-gl/maplibre";
import { Home } from "lucide-react";
import { useSelectedCity } from "../../context/SelectedCityContext";

const CityMarker = ({ city }) => {
  const { selectedCity, setSelectedCity } = useSelectedCity();
  return (
    <Marker longitude={city.coords[0]} latitude={city.coords[1]}>
      <div
        onMouseOver={() => setSelectedCity(city)}
        onMouseLeave={() => setSelectedCity(null)}
        className="w-8 h-8 bg-red-400 rounded-full flex items-center justify-center hover:scale-125 transition-transform cursor-pointer"
      >
        <Home size={16} className="text-white" />
      </div>
    </Marker>
  );
};

export default memo(CityMarker);
