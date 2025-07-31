import React from "react";
import ProductCard from "./ProductCard";
import products from "../data/products";

const ProductList = () => (
  <section className="max-w-7xl mx-auto px-4 py-12" aria-label="Product List">
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </section>
);

export default ProductList;
