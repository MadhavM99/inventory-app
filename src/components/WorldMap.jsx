import React, { useState, useEffect } from "react";
import Map, { Marker, Popup, NavigationControl } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import { motion } from "framer-motion";
import { Home } from "lucide-react";

const WorldMap = () => {
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);

  useEffect(() => {
    fetch("/data/cities.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (data && data.cities) {
          setCities(data.cities);
        }
      })
      .catch((error) => {
        console.error("Error fetching cities data:", error);
      });
  }, []);

  return (
    <motion.div
      className="absolute inset-0 z-0"
      initial={{ scale: 1.2, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Map
        initialViewState={{
          longitude: 10,
          latitude: 20,
          zoom: 2.8,
        }}
        style={{ width: "100%", height: "100%" }}
        mapStyle="/data/mapStyle.json"
        attributionControl={false}
      >
        {cities.map((city, idx) => (
          <Marker
            key={city.cityId || idx}
            longitude={city.coords[0]}
            latitude={city.coords[1]}
          >
            <div
              onMouseOver={() => setSelectedCity(city)}
              onMouseLeave={() => setSelectedCity(null)}
              className="w-8 h-8 bg-red-400 rounded-full flex items-center justify-center hover:scale-125 transition-transform cursor-pointer"
            >
              <Home size={16} className="text-white" />
            </div>
          </Marker>
        ))}
        {selectedCity && (
          <Popup
            longitude={selectedCity.coords[0]}
            latitude={selectedCity.coords[1]}
            closeButton={false}
            closeOnClick={false}
            anchor="top"
          >
            <div className="text-sm text-black bg-white/10 backdrop-blur-lg p-2 rounded-lg">
              <div className="font-bold">{selectedCity.name}</div>
              <div>Forecast: {selectedCity.forecast.toLocaleString()}</div>
              <div>
                Trend: {selectedCity["forecast-trend"] || selectedCity.trend}
              </div>
              <div>Engagement: {selectedCity.percentage}%</div>
            </div>
          </Popup>
        )}
      </Map>
    </motion.div>
  );
};

export default WorldMap;
