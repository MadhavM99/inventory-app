import React, { useRef, lazy, Suspense, memo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CityWidget = lazy(() => import("@/components/widget/CityWidget"));

const CityScroll = ({ orientation, citiesData }) => {
  const scrollRef = useRef(null);
  const navigate = useNavigate();

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
              <MemoizedCityItem
                key={city.cityId}
                city={city}
                onClick={handleWidgetClick}
              />
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
  );
};

const CityItem = ({ city, onClick }) => (
  <div onClick={() => onClick(city.cityId)} className="cursor-pointer">
    <Suspense fallback={<div className="text-white p-4">Loading...</div>}>
      <CityWidget
        city={city.name}
        forecast={city.forecast.toLocaleString()}
        percentage={`${city.percentage}%`}
        trend={city["percentage-trend"]}
        forecastChart={city["forcast-chart"]}
        percentageChart={city["percentage-chart"]}
      />
    </Suspense>
  </div>
);

const MemoizedCityItem = memo(CityItem);

export default CityScroll;
