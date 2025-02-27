import React from "react";
import Products from "../ProductContents";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  console.log(Products);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16 my-24">
      {Products.map((product) => {
        return <ProductCard key={product} product={product} />;
      })}
    </div>
  );
}
