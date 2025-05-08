import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TopHeader from "@/components/TopHeader";
import WorldMap from "@/components/WorldMap";
import CityWidget from "@/components/CityWidget";
import { ChevronLeft, ChevronRight } from "lucide-react";

const LandingPage = () => {
  const scrollRef = useRef(null);
  const navigate = useNavigate();
  const [orientation, setOrientation] = useState("horizontal-top");
  const [citiesData, setCitiesData] = useState([]); // Declare citiesData state

  // Fetch cities.json once on mount
  useEffect(() => {
    fetch("/data/cities.json")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.cities) {
          setCitiesData(data.cities);
        }
      })
      .catch((err) => console.error("Error loading cities.json:", err));
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      scrollRef.current.scrollTo({
        left:
          direction === "left"
            ? scrollLeft - clientWidth
            : scrollLeft + clientWidth,
        behavior: "smooth",
      });
    }
  };

  const handleWidgetClick = (cityId) => {
    navigate(`/details/${encodeURIComponent(cityId)}`);
  };

  const isHorizontal = orientation.includes("horizontal");
  const isTop = orientation.includes("top");

  const positionClasses = isHorizontal
    ? `absolute ${isTop ? "top-20" : "bottom-2"} w-full z-10 flex items-center`
    : `absolute ${
        orientation === "vertical-left" ? "left-2" : "right-2"
      } top-20 bottom-2 z-10 flex flex-col`;

  const scrollContainerClasses = isHorizontal
    ? "overflow-x-auto whitespace-nowrap px-4 flex-1 scrollbar-hide"
    : "overflow-y-auto space-y-4 scrollbar-hide";

  const wrapperClasses = isHorizontal
    ? "inline-flex gap-6"
    : "flex flex-col gap-6";

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <WorldMap orientation={orientation} setOrientation={setOrientation} />
      <TopHeader orientation={orientation} setOrientation={setOrientation} />

      <div className={positionClasses}>
        {isHorizontal && (
          <button
            onClick={() => scroll("left")}
            className="bg-black/40 hover:bg-black/60 text-white p-2 rounded-full ml-2 z-20"
          >
            <ChevronLeft size={24} />
          </button>
        )}
        <div ref={scrollRef} className={scrollContainerClasses}>
          <div className={wrapperClasses}>
            {citiesData.length > 0 ? (
              citiesData.map((city) => (
                <div
                  key={city.cityId}
                  onClick={() => handleWidgetClick(city.cityId)}
                  className="cursor-pointer"
                >
                  <CityWidget
                    city={city.name}
                    forecast={city.forecast.toLocaleString()}
                    percentage={`${city.percentage}%`}
                    trend={city["percentage-trend"]}
                    forecastChart={city["forcast-chart"]}
                    percentageChart={city["percentage-chart"]}
                  />
                </div>
              ))
            ) : (
              <p className="text-white p-4">Loading cities data...</p>
            )}
          </div>
        </div>
        {isHorizontal && (
          <button
            onClick={() => scroll("right")}
            className="bg-black/40 hover:bg-black/60 text-white p-2 rounded-full mr-2 z-20"
          >
            <ChevronRight size={24} />
          </button>
        )}
      </div>
    </div>
  );
};

export default LandingPage;
