import React from "react";
import { useParams, Link } from "react-router-dom";
import products from "../data/products";
import OrderForm from "../components/OrderForm";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="text-center">
        <h2 className="text-2xl font-bold">Product not found</h2>
        <Link to="/" className="text-green-700 hover:underline">
          Go back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:w-96 object-contain rounded shadow"
        />

        <div className="flex-grow">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="mb-4">{product.description}</p>

          {product.suitableFor && (
            <>
              <h3 className="font-semibold">Suitable For:</h3>
              <p className="mb-4">{product.suitableFor}</p>
            </>
          )}

          {product.ingredientsDay && (
            <>
              <h3 className="font-semibold">Day Cream Ingredients:</h3>
              <ul className="list-disc list-inside mb-4">
                {product.ingredientsDay.map((ing, idx) => (
                  <li key={`day-${idx}`}>{ing}</li>
                ))}
              </ul>
            </>
          )}

          {product.ingredientsNight && (
            <>
              <h3 className="font-semibold">Night Cream Ingredients:</h3>
              <ul className="list-disc list-inside mb-4">
                {product.ingredientsNight.map((ing, idx) => (
                  <li key={`night-${idx}`}>{ing}</li>
                ))}
              </ul>
            </>
          )}

          {product.ingredients && (
            <>
              <h3 className="font-semibold">Ingredients:</h3>
              <ul className="list-disc list-inside mb-4">
                {product.ingredients.map((ing, idx) => (
                  <li key={idx}>{ing}</li>
                ))}
              </ul>
            </>
          )}

          {product.benefits && (
            <>
              <h3 className="font-semibold">Benefits:</h3>
              <ul className="list-disc list-inside mb-4">
                {product.benefits.map((ben, idx) => (
                  <li key={idx}>{ben}</li>
                ))}
              </ul>
            </>
          )}

          {product.directions && (
            <>
              <h3 className="font-semibold">Directions for Use:</h3>
              <ul className="list-disc list-inside mb-4">
                {product.directions.map((dir, idx) => (
                  <li key={idx}>{dir}</li>
                ))}
              </ul>
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
