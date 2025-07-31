import React from "react";
import ProductList from "../components/ProductList";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const banners = [
  "/banner01.jpg",
  "/banner-02.jpg",
  "/banner-03.jpg",
  "/banner-04.jpg",
  "/banner-05.jpg",
];

const Home = () => {
  return (
    <div>
      <div className="mb-10 rounded-xl overflow-hidden shadow-xl max-w-5xl mx-auto">
        <Swiper
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          loop
          modules={[Navigation, Pagination, Autoplay]}
          className="rounded-xl"
        >
          {banners.map((src, i) => (
            <SwiperSlide key={i}>
              <div className="relative h-60 md:h-96">
                <img src={src} alt={`Banner ${i + 1}`}
                  className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-white text-center">
                  <h1 className="text-2xl md:text-5xl font-extrabold drop-shadow-lg tracking-wide">Aurela Naturals</h1>
                  <p className="text-base md:text-xl mt-2 font-medium">Nature’s Best for Your Glow</p>
                  <a href="#products" className="mt-5 bg-green-600 px-8 py-3 rounded-lg shadow-md hover:bg-green-800 transition text-lg md:text-xl">Shop Now</a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <h1 className="text-3xl md:text-4xl font-bold mb-7 text-center" id="products">Our Products</h1>
      <ProductList />
    </div>
  );
};
export default Home;
