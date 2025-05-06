import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopHeader from '@/components/TopHeader';
import WorldMap from '@/components/WorldMap';
import CityWidget from '@/components/CityWidget';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const cityDataList = [
    { city: 'New York', forecast: '45.7M', percentage: '65%', trend: 'up', coords: [-74.006, 40.7128] },
    { city: 'Paris', forecast: '79.2T', percentage: '62%', trend: 'down', coords: [2.3522, 48.8566] },
    { city: 'Tokyo', forecast: '567.5M', percentage: '56%', trend: 'up', coords: [139.6917, 35.6895] },
    { city: 'Sydney', forecast: '567.9M', percentage: '23%', trend: 'down', coords: [151.2093, -33.8688] },
    { city: 'London', forecast: '$23.5T', percentage: '85%', trend: 'up', coords: [-0.1276, 51.5074] },
    { city: 'Moscow', forecast: '814.1M', percentage: '39%', trend: 'down', coords: [37.6173, 55.7558] },
    { city: 'Dubai', forecast: '102.3M', percentage: '48%', trend: 'up', coords: [55.2708, 25.2048] },
    { city: 'San Francisco', forecast: '222.5M', percentage: '33%', trend: 'down', coords: [-122.4194, 37.7749] },
    { city: 'Berlin', forecast: '342.1M', percentage: '73%', trend: 'up', coords: [13.405, 52.52] },
    { city: 'Singapore', forecast: '410.9M', percentage: '58%', trend: 'up', coords: [103.8198, 1.3521] },
    { city: 'Toronto', forecast: '305.6M', percentage: '44%', trend: 'down', coords: [-79.3832, 43.6532] },
];

const LandingPage = () => {
    const scrollRef = useRef(null);
    const navigate = useNavigate();
    const [orientation, setOrientation] = useState('horizontal-top');
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            scrollRef.current.scrollTo({
                left: direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth,
                behavior: 'smooth',
            });
        }
    };

    const handleWidgetClick = (city) => {
        navigate(`/details/${encodeURIComponent(city)}`);
    };

    const isHorizontal = orientation.includes('horizontal');
    const isTop = orientation.includes('top');

    const positionClasses = isHorizontal
        ? `absolute ${isTop ? 'top-20' : 'bottom-2'} w-full z-10 flex items-center`
        : `absolute ${orientation === 'vertical-left' ? 'left-2' : 'right-2'} top-20 bottom-2 z-10 flex flex-col`;

    const scrollContainerClasses = isHorizontal
        ? 'overflow-x-auto whitespace-nowrap px-4 flex-1 scrollbar-hide'
        : 'overflow-y-auto space-y-4 scrollbar-hide';

    const wrapperClasses = isHorizontal ? 'inline-flex gap-6' : 'flex flex-col gap-6';

    return (
        <div className="relative h-screen w-screen overflow-hidden">
            <WorldMap orientation={orientation} setOrientation={setOrientation} />
            <TopHeader
                orientation={orientation}
                setOrientation={setOrientation}
            />

            <div className={positionClasses}>
                {isHorizontal && (
                    <button
                        onClick={() => scroll('left')}
                        className="bg-black/40 hover:bg-black/60 text-white p-2 rounded-full ml-2 z-20"
                    >
                        <ChevronLeft size={24} />
                    </button>
                )}

                <div ref={scrollRef} className={scrollContainerClasses}>
                    <div className={wrapperClasses}>
                        {cityDataList.map((cityData) => (
                            <div
                                key={cityData.city}
                                onClick={() => handleWidgetClick(cityData.city)}
                                className="cursor-pointer"
                            >
                                <CityWidget {...cityData} />
                            </div>
                        ))}
                    </div>
                </div>

                {isHorizontal && (
                    <button
                        onClick={() => scroll('right')}
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