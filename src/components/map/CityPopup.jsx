import { useSelectedCity } from "@/context/SelectedCityContext";
import { Popup } from "react-map-gl/maplibre";

const CityPopup = () => {
  const { selectedCity, setSelectedCity } = useSelectedCity();
  if (!selectedCity) return null;

  return (
    <Popup
      longitude={selectedCity.coords[0]}
      latitude={selectedCity.coords[1]}
      closeButton={false}
      anchor="top"
    >
      <div className="text-xs text-black">
        <div className="font-bold">{selectedCity.name}</div>
        <div>Forecast: {selectedCity.forecast.toLocaleString()}</div>
        <div>Trend: {selectedCity["forecast-trend"]}</div>
        <div>Engagement: {selectedCity.percentage}%</div>
      </div>
    </Popup>
  );
};

export default CityPopup;
