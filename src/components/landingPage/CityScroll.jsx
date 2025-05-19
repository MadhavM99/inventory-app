import React, { useRef, useMemo, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { getOrientationClasses } from "@/utils/getOrientationClasses";
import { scrollToLeft, scrollToRight } from "@/utils/getScroll";
import CityWidget from "@/components/widget/CityWidget";

const CityScroll = React.memo(({ orientation, citiesData }) => {
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  const { container, scrollWrapper, item } = useMemo(
    () => getOrientationClasses(orientation),
    [orientation]
  );

  const handleWidgetClick = useCallback(
    (cityId) => navigate(`/details/${encodeURIComponent(cityId)}`),
    [navigate]
  );

  const cityWidgets = useMemo(
    () =>
      citiesData.map((city) => (
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
      )),
    [citiesData, item, handleWidgetClick]
  );

  const isHorizontal = orientation === "top" || orientation === "bottom";

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
        {cityWidgets}
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
});

export default CityScroll;
