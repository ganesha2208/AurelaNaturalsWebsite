import React from "react";
import ProductCard from "./ProductCard";
import products from "../data/products";

const ProductList = () => {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
