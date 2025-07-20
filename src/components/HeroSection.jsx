import React, { useState, Suspense } from "react";
import Banner from "/banner01.jpg";
import Banner2 from "/banner-02.jpg";
import Banner3 from "/banner-03.jpg";
import Banner4 from "/banner-04.jpg";
import Banner5 from "/banner-05.jpg";
import Carousel from "react-bootstrap/Carousel";
import "../components/css/HeroSection.css";
import GetQuoteSpecific from "./Get_Quote";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaLeaf,
  FaStar,
  FaHeart,
  FaShieldAlt,
  FaTruck,
} from "react-icons/fa";

const HeroSection = () => {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-emerald-100 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-300 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-green-300 rounded-full opacity-15 animate-bounce"></div>
        <div className="absolute bottom-40 left-1/4 w-20 h-20 bg-emerald-200 rounded-full opacity-25 animate-pulse"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-green-400 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-emerald-300 rounded-full opacity-15 animate-pulse"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex space-x-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-full p-4 shadow-lg animate-float">
            <FaLeaf className="w-6 h-6 text-emerald-600" />
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-full p-4 shadow-lg animate-float-delayed">
            <FaHeart className="w-6 h-6 text-pink-500" />
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-full p-4 shadow-lg animate-float">
            <FaStar className="w-6 h-6 text-yellow-400" />
          </div>
        </div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 xl:py-12">
        {/* Hero Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none px-4">
          <div className="text-center text-white w-full max-w-4xl">
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 justify-center items-center pointer-events-auto px-4">
              <Link
                to="/allproduct"
                className="group inline-flex items-center justify-center px-6 sm:px-8 lg:px-10 py-3 sm:py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/30 transition-all duration-300 shadow-lg hover:shadow-xl border border-white/30 hover:border-white/50 min-w-[140px] sm:min-w-[160px] text-sm sm:text-base"
              >
                Shop Now
                <FaArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/category/bestsellers"
                className="group inline-flex items-center justify-center px-6 sm:px-8 lg:px-10 py-3 sm:py-4 bg-emerald-600/90 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-emerald-700/90 transition-all duration-300 shadow-lg hover:shadow-xl min-w-[140px] sm:min-w-[160px] text-sm sm:text-base"
              >
                View Bestsellers
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-6 sm:mt-8 lg:mt-12 flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 text-white/90 px-4">
              <div className="flex items-center space-x-1 sm:space-x-2">
                <FaTruck className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-xs sm:text-sm font-medium">
                  Free Shipping
                </span>
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2">
                <FaShieldAlt className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-xs sm:text-sm font-medium">
                  30-Day Returns
                </span>
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2">
                <FaHeart className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-xs sm:text-sm font-medium">
                  Cruelty-Free
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Carousel */}
        <div className="relative">
          <Carousel
            className="rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border-2 sm:border-4 border-white/20"
            indicators={true}
            controls={true}
            interval={6000}
            pause="hover"
            fade={true}
          >
            <Carousel.Item>
              <div className="relative">
                <img
                  className="d-block w-100"
                  src={Banner}
                  alt="Natural Skincare Products"
                  style={{
                    height: "60vh",
                    minHeight: "400px",
                    objectFit: "cover",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="relative">
                <img
                  className="d-block w-100"
                  src={Banner2}
                  alt="Organic Beauty Products"
                  style={{
                    height: "60vh",
                    minHeight: "400px",
                    objectFit: "cover",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="relative">
                <img
                  className="d-block w-100"
                  src={Banner3}
                  alt="Natural Wellness Products"
                  style={{
                    height: "60vh",
                    minHeight: "400px",
                    objectFit: "cover",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="relative">
                <img
                  className="d-block w-100"
                  src={Banner4}
                  alt="Eco-Friendly Skincare"
                  style={{
                    height: "60vh",
                    minHeight: "400px",
                    objectFit: "cover",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="relative">
                <img
                  className="d-block w-100"
                  src={Banner5}
                  alt="Natural Radiance Collection"
                  style={{
                    height: "60vh",
                    minHeight: "400px",
                    objectFit: "cover",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              </div>
            </Carousel.Item>
          </Carousel>

          {/* Custom Carousel Controls */}
          <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 z-40">
            <div className="flex space-x-2 sm:space-x-3">
              {[0, 1, 2, 3, 4].map((index) => (
                <button
                  key={index}
                  className="w-2 h-2 sm:w-3 sm:h-3 bg-white/50 rounded-full hover:bg-white transition-colors duration-300"
                  aria-label={`Go to slide ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-4 sm:mt-6 lg:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center border border-white/20">
            <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">
              4.9★
            </div>
            <div className="text-white/80 text-xs sm:text-sm">
              Customer Rating
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center border border-white/20">
            <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">
              10K+
            </div>
            <div className="text-white/80 text-xs sm:text-sm">
              Happy Customers
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center border border-white/20 sm:col-span-2 lg:col-span-1">
            <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">
              100%
            </div>
            <div className="text-white/80 text-xs sm:text-sm">
              Natural Ingredients
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(-5px);
          }
          50% {
            transform: translateY(5px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
