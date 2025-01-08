// src/components/ScrollableBanner.js
import React, { useState, useEffect } from 'react';

const ScrollableBanner = () => {
  const banners = [
    {
      id: 1,
      image:
        'https://static.vecteezy.com/system/resources/previews/004/707/493/non_2x/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg',
      alt: '',
    },
    {
      id: 2,
      image:
        'https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=1350&q=80',
      alt: '',
    },
    {
      id: 3,
      image:
        'https://f.nooncdn.com/mpcms/EN0003/assets/bdcee351-a29b-49e0-a919-b0543e0ca026.png?format=avif',
      alt: '',
    },
    {
      id: 4,
      image:
        'https://f.nooncdn.com/mpcms/EN0003/assets/64ffb468-9999-4348-abda-2ab7d2a15cbc.png?format=avif',
      alt: '',
    },
  ];

  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return; // Do not set interval if paused

    const timer = setInterval(() => {
      setCurrent((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
    }, 5000); // 5 seconds

    return () => clearInterval(timer); // Cleanup on unmount or when isPaused changes
  }, [current, isPaused, banners.length]);

  const goToPrevious = () => {
    setCurrent((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrent((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      className="relative w-full h-64 md:h-96 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {banners.map((banner, index) => (
        <div
          key={banner.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={banner.image}
            alt={banner.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <h2 className="text-white text-2xl md:text-4xl font-bold">
              {banner.alt}
            </h2>
          </div>
        </div>
      ))}

      {/* Previous Button */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
        onClick={goToPrevious}
      >
        &#10094;
      </button>

      {/* Next Button */}
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
        onClick={goToNext}
      >
        &#10095;
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {banners.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === current ? 'bg-white' : 'bg-gray-400'
            }`}
            onClick={() => setCurrent(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ScrollableBanner;