"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const images = [
  "https://migrationpolicycentre.eu/wp-content/uploads/2020/06/classroom-2093744_1920.jpg",
  "https://fhmain.imgix.net/2024/08/Back-to-School-2024-058.jpg?auto=compress&fm=pjpg&ixlib=php-3.3.1&s=4926cc6348384cf4b641adf36a97828d",
  "https://cdn-images.understood.org/p0qf7j048i0q/E3C718B6580F40C3B5C7D8D1E86B4A6E/f3dbff6e10f35df96a79d58b6039b954/i499343530.jpg",
  "https://sparrowschools.co.za/wp-content/uploads/2024/02/DSC_8149lll.png",
];

const ImageBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[75vh] overflow-hidden" id="home">
      <div
        className="absolute inset-0 flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="min-w-full h-[75vh] relative">
            <Image
              src={image}
              alt={`Banner ${index + 1}`}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
      >
        &#10095;
      </button>
    </div>
  );
};

export default ImageBanner;
