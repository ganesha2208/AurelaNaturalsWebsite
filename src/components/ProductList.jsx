import React from "react";
import ProductCard from "./ProductCard";
import products from "../data/products";

const HERO_ID = "kumkumadi";

const ordered = [
  ...products.filter((p) => p.id === HERO_ID),
  ...products.filter((p) => p.id !== HERO_ID),
];

const ProductList = () => (
  <section className="max-w-7xl mx-auto" aria-label="Our Collection">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {ordered.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          featured={product.id === HERO_ID}
        />
      ))}
    </div>
  </section>
);

export default ProductList;
