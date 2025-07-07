import React, { useState, Suspense } from "react";
import Banner from "/AURELA NEW png.png";
import Banner2 from "/AURELA NEW.png";
import Banner3 from "/logo.png";
import Banner4 from "/AURELA NEW-01.jpg";
import Banner5 from "/sameer.png";
import Carousel from "react-bootstrap/Carousel";
import "../components/css/HeroSection.css";
import GetQuoteSpecific from "./Get_Quote";
import { Link } from "react-router-dom";
import { FaArrowRight, FaLeaf, FaStar } from "react-icons/fa";

const HeroSection = () => {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  return (
    <section className="relative bg-gradient-to-br from-emerald-50 to-green-100 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-emerald-300 rounded-full"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-green-300 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-emerald-200 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="flex items-center space-x-2 text-emerald-600">
              <FaLeaf className="w-5 h-5" />
              <span className="text-sm font-medium">
                100% Natural Ingredients
              </span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Discover Your
              <span className="block text-emerald-600">Natural Radiance</span>
            </h1>

            <p className="text-lg text-gray-600 max-w-lg">
              Transform your skincare routine with our premium natural products.
              Formulated with the finest organic ingredients to nourish and
              protect your skin.
            </p>

            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-1">
                <FaStar className="w-5 h-5 text-yellow-400" />
                <FaStar className="w-5 h-5 text-yellow-400" />
                <FaStar className="w-5 h-5 text-yellow-400" />
                <FaStar className="w-5 h-5 text-yellow-400" />
                <FaStar className="w-5 h-5 text-yellow-400" />
                <span className="ml-2 text-sm text-gray-600">
                  4.9 (2,847 reviews)
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/allproduct"
                className="inline-flex items-center justify-center px-8 py-4 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Shop Now
                <FaArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                to="/category/bestsellers"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-emerald-600 text-emerald-600 font-semibold rounded-lg hover:bg-emerald-50 transition-colors"
              >
                View Bestsellers
              </Link>
            </div>

            <div className="flex items-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                <span>Free Shipping</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                <span>30-Day Returns</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                <span>Cruelty-Free</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="aspect-square bg-gradient-to-br from-emerald-100 to-green-200 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <FaLeaf className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Premium Skincare
                    </h3>
                    <p className="text-gray-600">
                      Natural ingredients for radiant skin
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-10 -right-4 bg-white rounded-full p-3 shadow-lg">
              <FaStar className="w-6 h-6 text-yellow-400" />
            </div>
            <div className="absolute bottom-10 -left-4 bg-emerald-100 rounded-full p-3 shadow-lg">
              <FaLeaf className="w-6 h-6 text-emerald-600" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
