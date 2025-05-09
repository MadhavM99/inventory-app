import React from "react";
import { Popup } from "react-map-gl/maplibre";

const CityPopup = ({ city }) => {
  return (
    <Popup
      longitude={city.coords[0]}
      latitude={city.coords[1]}
      closeButton={false}
      closeOnClick={false}
      anchor="top"
    >
      <div className="text-sm text-black bg-white/10 backdrop-blur-lg p-2 rounded-lg">
        <div className="font-bold">{city.name}</div>
        <div>Forecast: {city.forecast.toLocaleString()}</div>
        <div>Trend: {city["forecast-trend"] || city.trend}</div>
        <div>Engagement: {city.percentage}%</div>
      </div>
    </Popup>
  );
};

export default CityPopup;
