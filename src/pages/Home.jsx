import React, { useState, useEffect } from "react";
import ProductList from "../components/ProductList";

const banners = [
  "/banner01.jpg",
  "/banner-02.jpg",
  "/banner-03.jpg",
  "/banner-04.jpg",
  "/banner-05.jpg",
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Handler for manual navigation
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div>
      <div className="mb-8 relative max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg">
        <img
          src={banners[currentIndex]}
          alt={`Banner ${currentIndex + 1}`}
          className="w-full h-64 md:h-80 object-cover transition duration-700 ease-in-out"
        />

        {/* Dots / indicators */}
        <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
          {banners.map((_, i) => (
            <button
              key={i}
              className={`w-3 h-3 rounded-full focus:outline-none ${
                i === currentIndex ? "bg-green-700" : "bg-gray-300"
              }`}
              onClick={() => goToSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <h1 className="text-3xl font-bold mb-6 text-center">Our Products</h1>
      <ProductList />
    </div>
  );
};

export default Home;
