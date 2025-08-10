import React from "react";
import ProductList from "../components/ProductList";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const banners = [
  "/banner01.jpg",
  "/banner-02.jpg",
  "/banner-03.jpg",
  "/banner-04.jpg",
  "/banner-05.jpg",
];

const Home = () => {
  return (
    <div className="font-sans bg-gradient-to-br from-[#e8f5e9] via-[#f2fff0] to-[#f6f8ee] min-h-screen">
      {/* Hero Carousel */}
      <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl max-w-7xl mx-auto mt-8 lg:mt-14">
        <Swiper
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          loop
          effect="fade"
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          className="rounded-2xl"
        >
          {banners.map((src, i) => (
            <SwiperSlide key={i}>
              <div className="relative w-full h-[40vh] md:h-[70vh]">
                <img
                  src={src}
                  alt={`Banner ${i + 1}`}
                  className="w-full h-full object-contain m-0 p-0 border-none"
                  loading="lazy"
                  draggable="false"
                  style={{ display: "block" }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Catchy Tagline */}
      <div className="text-center mb-2 px-4">
        <p
          className="text-xl md:text-2xl tracking-widest font-bold text-[#82b17b]/80 drop-shadow-sm"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Experience Skin Serenity, Naturally.
        </p>
      </div>

      {/* Stylish Section Header */}
      <h1
        id="products"
        className="text-3xl md:text-4xl font-extrabold text-center mb-8 text-[#333] tracking-widest drop-shadow-md px-4"
        style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '.12em' }}
      >
        Our Products
      </h1>

      <div className="px-4 md:px-6 lg:px-0">
        <ProductList />
      </div>
    </div>
  );
};

export default Home;
