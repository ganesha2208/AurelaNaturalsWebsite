import React from "react";
import ProductCard from "./ProductCard";
import products from "../data/products";

const ProductList = () => (
  <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {products.map(product => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
);

export default ProductList;
