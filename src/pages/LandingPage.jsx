import { useEffect, useState } from "react";
import WorldMap from "../components/map/WorldMap";
import TopHeader from "../components/landingPage/TopHeader";
import CityScroll from "../components/landingPage/CityScroll";
import { useApi } from "@/api/useApi";

const LandingPage = () => {
  const [orientation, setOrientation] = useState("top");
  const { data, isLoading, error } = useApi("/data/cities.json");
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading cities</p>;
  return (
    <div>
      {data?.cities && <WorldMap citiesData={data?.cities} />}
      <TopHeader orientation={orientation} setOrientation={setOrientation} />
      {orientation && data?.cities && (
        <CityScroll orientation={orientation} citiesData={data?.cities || []} />
      )}
    </div>
  );
};

export default LandingPage;
