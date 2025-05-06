// WorldMap.jsx
import React, { useState } from 'react';
import Map, { Marker, Popup, NavigationControl } from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';

const cities = [
  { name: 'New York', forecast: '45.7M', percentage: '65%', trend: 'up', coords: [-74.006, 40.7128] },
  { name: 'Paris', forecast: '79.2T', percentage: '62%', trend: 'down', coords: [2.3522, 48.8566] },
  { name: 'Tokyo', forecast: '567.5M', percentage: '56%', trend: 'up', coords: [139.6917, 35.6895] },
  { name: 'Sydney', forecast: '567.9M', percentage: '23%', trend: 'down', coords: [151.2093, -33.8688] },
  { name: 'London', forecast: '$23.5T', percentage: '85%', trend: 'up', coords: [-0.1276, 51.5074] },
  { name: 'Moscow', forecast: '814.1M', percentage: '39%', trend: 'down', coords: [37.6173, 55.7558] },
];

const WorldMap = () => {
  const [selectedCity, setSelectedCity] = useState(null);

  return (
    <motion.div
      className="absolute inset-0 z-0"
      initial={{ scale: 1.2, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <Map
        initialViewState={{
          longitude: 10,
          latitude: 20,
          zoom: 2.8,
        }}
        style={{ width: '100%', height: '100%' }}
        mapStyle="https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json"
        attributionControl={false}
      >
        <NavigationControl position="top-left" />
        {cities.map((city, idx) => (
          <Marker key={idx} longitude={city.coords[0]} latitude={city.coords[1]}>
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
              <div>Forecast: {selectedCity.forecast}</div>
              <div>Trend: {selectedCity.trend}</div>
              <div>Engagement: {selectedCity.percentage}</div>
            </div>
          </Popup>
        )}
      </Map>
    </motion.div>
  );
};

export default WorldMap;
