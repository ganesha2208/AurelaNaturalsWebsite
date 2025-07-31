import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white bg-opacity-80 backdrop-blur-lg border border-green-100 shadow-xl rounded-xl p-4 transition-transform transform hover:scale-105 hover:shadow-2xl relative">
      <img src={product.images[0]} alt={product.name} className="w-full h-52 object-contain rounded mb-3 bg-gradient-to-t from-lime-100 via-white"/>
      <h2 className="font-extrabold text-lg text-green-800">{product.name}</h2>
      <p className="mt-2 text-gray-700">{product.description.slice(0,80)}...</p>
      <Link
        to={`/product/${product.id}`}
        className="mt-4 inline-block bg-green-700 text-white px-4 py-2 rounded-lg shadow hover:bg-green-900 font-semibold transition"
      >
        View Details
      </Link>
    </div>
  );
};
export default ProductCard;
