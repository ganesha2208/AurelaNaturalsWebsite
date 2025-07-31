import React from "react";
import { useParams, Link } from "react-router-dom";
import products from "../data/products";
import OrderForm from "../components/OrderForm";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold">Product not found</h2>
        <Link to="/" className="text-green-700 hover:underline">Go back to Home</Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-96 rounded-xl overflow-hidden shadow-xl">
          <Swiper
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 2200 }}
            loop
            modules={[Navigation, Pagination, Autoplay]}
            className="rounded-xl"
          >
            {product.images.map((src, idx) => (
              <SwiperSlide key={idx}>
                <img src={src} alt={`${product.name} image ${idx + 1}`} className="w-full h-80 object-contain bg-white"/>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex-grow">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">{product.name}</h1>
          <p className="mb-4 text-gray-700">{product.description}</p>
          {product.suitableFor && (
            <>
              <h3 className="font-semibold">Suitable For:</h3>
              <p className="mb-4">{product.suitableFor}</p>
            </>
          )}
          {product.ingredientsDay && (
            <>
              <h3 className="font-semibold">Day Cream Ingredients:</h3>
              <ul className="list-disc list-inside mb-4">{product.ingredientsDay.map((ing, idx) => <li key={`day-${idx}`}>{ing}</li>)}</ul>
            </>
          )}
          {product.ingredientsNight && (
            <>
              <h3 className="font-semibold">Night Cream Ingredients:</h3>
              <ul className="list-disc list-inside mb-4">{product.ingredientsNight.map((ing, idx) => <li key={`night-${idx}`}>{ing}</li>)}</ul>
            </>
          )}
          {product.ingredients && (
            <>
              <h3 className="font-semibold">Ingredients:</h3>
              <ul className="list-disc list-inside mb-4">{product.ingredients.map((ing, idx) => <li key={idx}>{ing}</li>)}</ul>
            </>
          )}
          {product.benefits && (
            <>
              <h3 className="font-semibold">Benefits:</h3>
              <ul className="list-disc list-inside mb-4">{product.benefits.map((ben, idx) => <li key={idx}>{ben}</li>)}</ul>
            </>
          )}
          {product.directions && (
            <>
              <h3 className="font-semibold">Directions for Use:</h3>
              <ul className="list-disc list-inside mb-4">{product.directions.map((dir, idx) => <li key={idx}>{dir}</li>)}</ul>
            </>
          )}
        </div>
      </div>
      <div>
        <OrderForm productName={product.name} />
      </div>
    </div>
  );
};

export default ProductDetails;
