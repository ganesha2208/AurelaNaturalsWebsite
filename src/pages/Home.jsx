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
              <div className="relative h-[40vh] md:h-[70vh] w-full">
                <img
                  src={src}
                  alt={`Banner ${i + 1}`}
                  className="w-full h-full object-cover"
                  draggable="false"
                />
                {/* <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/80 px-10 py-8 rounded-2xl shadow-xl flex flex-col items-center max-w-xl text-center border border-[#82b17b]/30">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide text-[#82b17b] drop-shadow-lg mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Aurela Naturals
                    </h1>
                    <p className="text-gray-700 text-lg md:text-2xl font-medium mb-6 drop-shadow-sm">
                      Pure Botanical Skincare for a Radiant Glow
                    </p>
                    <a
                      href="#products"
                      className="inline-block mt-2 bg-[#82b17b] text-white font-semibold px-8 py-3 rounded-full shadow hover:bg-[#6a9365] transition text-lg tracking-wide"
                    >
                      Shop Now
                    </a>
                  </div>
                </div> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Catchy Tagline */}
      <div className="text-center mb-2">
        <p className="text-xl md:text-2xl tracking-widest font-bold text-[#82b17b]/80 drop-shadow-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Experience Skin Serenity, Naturally.
        </p>
      </div>

      {/* Stylish Section Header */}
      <h1
        id="products"
        className="text-3xl md:text-4xl font-extrabold text-center mb-8 text-[#333] tracking-widest drop-shadow-md"
        style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '.12em' }}
      >
        Our Products
      </h1>

      <ProductList />
    </div>
  );
};

export default Home;
