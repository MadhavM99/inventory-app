import React, { useEffect, useState } from "react";
import WorldMap from "../components/map/WorldMap";
import TopHeader from "../components/landingPage/TopHeader";
import CityScroll from "../components/landingPage/CityScroll";

const LandingPage = () => {
  const [orientation, setOrientation] = useState("horizontal-top");
  const [citiesData, setCitiesData] = useState([]);

  useEffect(() => {
    const fetchCities = () => {
      fetch("/data/cities.json")
        .then((res) => res.json())
        .then((data) => {
          if (data?.cities) setCitiesData(data.cities);
        })
        .catch((err) => console.error("Error loading cities.json:", err));
    };

    if ("requestIdleCallback" in window) {
      requestIdleCallback(fetchCities);
    } else {
      setTimeout(fetchCities, 100);
    }
  }, []);

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <WorldMap orientation={orientation} setOrientation={setOrientation} />
      <TopHeader orientation={orientation} setOrientation={setOrientation} />
      <CityScroll orientation={orientation} citiesData={citiesData} />
    </div>
  );
};

export default LandingPage;
