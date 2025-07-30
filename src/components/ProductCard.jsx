import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded shadow hover:shadow-lg transition p-4 flex flex-col">
      <img
        src={product.image}
        alt={product.name}
        className="object-contain h-48 w-full mb-4"
      />
      <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
      <p className="text-sm flex-grow">{product.description.slice(0, 100)}...</p>
      <Link
        to={`/product/${product.id}`}
        className="mt-4 bg-green-700 text-white text-center py-2 rounded hover:bg-green-800"
      >
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
