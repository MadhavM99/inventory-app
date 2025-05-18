import React, { useRef, lazy, Suspense, memo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { getOrientationClasses } from "@/utils/getOrientationClasses";
import { scrollToLeft, scrollToRight } from "@/utils/getScroll";
import CityWidget from "@/components/widget/CityWidget";

const CityScroll = ({ orientation, citiesData }) => {
  const scrollRef = useRef(null);
  const navigate = useNavigate();
  const { container, scrollWrapper, item } = getOrientationClasses(orientation);
  const isHorizontal = orientation === "top" || orientation === "bottom";
  const handleWidgetClick = (cityId) => {
    navigate(`/details/${encodeURIComponent(cityId)}`);
  };
  return (
    <div className={container}>
      {isHorizontal && (
        <ChevronLeft
          onClick={() => scrollToLeft(scrollRef)}
          size={24}
          className="cursor-pointer text-white hover:text-gray-300"
        />
      )}

      <div ref={scrollRef} className={scrollWrapper}>
        {citiesData.map((city) => (
          <div key={city.cityId} className={item}>
            <div
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
          </div>
        ))}
      </div>

      {isHorizontal && (
        <ChevronRight
          onClick={() => scrollToRight(scrollRef)}
          size={24}
          className="cursor-pointer text-white hover:text-gray-300"
        />
      )}
    </div>
  );
};
export default CityScroll;
