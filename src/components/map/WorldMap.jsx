import React, { useState, useEffect, useMemo } from "react";
import Map, { NavigationControl } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import { motion } from "framer-motion";
import CityMarker from "./CityMarker";
import CityPopup from "./CityPopup";

const WorldMap = () => {
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);

  useEffect(() => {
    fetch("/data/cities.json")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.cities) {
          setCities(data.cities);
        }
      })
      .catch((error) => console.error("Error fetching cities:", error));
  }, []);

  const markers = useMemo(
    () =>
      cities.map((city, idx) => (
        <CityMarker
          key={city.cityId || idx}
          city={city}
          onHover={setSelectedCity}
        />
      )),
    [cities]
  );

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
          zoom: 2.5,
        }}
        style={{ width: "100%", height: "100%" }}
        mapStyle="/data/mapStyle.json"
        attributionControl={false}
      >
        {markers}
        {selectedCity && <CityPopup city={selectedCity} />}
      </Map>
    </motion.div>
  );
};

export default WorldMap;
