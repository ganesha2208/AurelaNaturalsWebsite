import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div
      className="
        bg-white bg-opacity-70 backdrop-blur-md border border-primary/40 rounded-2xl
        shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105
        flex flex-col
      "
      style={{ borderColor: "#82b17b" }} // fallback for border color
    >
      <div className="overflow-hidden rounded-t-2xl">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-56 object-contain bg-gradient-to-t from-[#dbe9d8] via-white to-white transition-transform duration-500 hover:scale-110"
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h2
          className="text-xl font-semibold mb-2"
          style={{ color: "#82b17b", fontFamily: "'Poppins', sans-serif" }}
        >
          {product.name}
        </h2>
        <p className="text-gray-700 flex-grow">{product.description.slice(0, 90)}...</p>

        <Link
          to={`/product/${product.id}`}
          className="mt-4 inline-block rounded-md bg-[#82b17b] text-white text-center font-semibold px-5 py-2 shadow-lg hover:bg-[#6a9365] transition"
          aria-label={`View details of ${product.name}`}
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
