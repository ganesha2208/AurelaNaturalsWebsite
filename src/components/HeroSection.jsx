import React, { useState, Suspense } from "react";
import Banner from "/AURELA NEW png.png";
import Banner2 from "/AURELA NEW.png";
import Banner3 from "/logo.png";
import Banner4 from "/AURELA NEW-01.jpg";
import Banner5 from "/sameer.png";
import Carousel from "react-bootstrap/Carousel";
import "../components/css/HeroSection.css";
import GetQuoteSpecific from "./Get_Quote";

const HeroSection = () => {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  return (
    <div className="carousel-container">
      <Carousel
        fade
        interval={3000}
        controls={true}
        indicators={true}
        pause={false}
      >
        {[Banner, Banner2, Banner3, Banner4, Banner5].map((banner, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100  carousel-image"
              src={banner}
              alt={`Slide ${index + 1}`}
            />
            <Carousel.Caption>
              {/* <button
                className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-colors duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 mt-4"
                onClick={() => setIsQuoteOpen(true)}
              >
                Get Quote
              </button> */}
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      {isQuoteOpen && (
        <Suspense fallback={<div>Loading...</div>}>
          <GetQuoteSpecific onClose={() => setIsQuoteOpen(false)} />
        </Suspense>
      )}
    </div>
  );
};

export default HeroSection;
