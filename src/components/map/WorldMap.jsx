import React, { useState, useEffect, useMemo } from "react";
import Map, { NavigationControl } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import { motion } from "framer-motion";
import CityMarker from "./CityMarker";
import CityPopup from "./CityPopup";

const WorldMap = ({ citiesData }) => {
  const markers = useMemo(
    () =>
      citiesData.map((city) => <CityMarker key={city.cityId} city={city} />),
    [citiesData]
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
          longitude: 60,
          latitude: 20,
          zoom: 2.8,
        }}
        style={{ width: "100%", height: "100%" }}
        mapStyle="/data/mapStyle.json"
        attributionControl={false}
      >
        {markers}
        {<CityPopup />}
      </Map>
    </motion.div>
  );
};

export default WorldMap;
