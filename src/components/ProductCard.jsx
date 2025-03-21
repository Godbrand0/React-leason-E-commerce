import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <Link>
      <div className="shadow-lg rounded-md cursor-pointer">
        <img src={product.image} alt={product.name} />
        <h2 className="text-lg font-semibold my-4">
          {product.title.substring(0, 24) + "..."}
        </h2>
        <p className="text-sm text-zinc-500 border-b-2 pb-4">
          {product.description.substring(0, 70) + "..."}
        </p>
        <div className="flex justify-between mt-4 py-3 items-center">
          <p className="text-xl font-semibold">${product.price}</p>
          <p>View detials</p>
        </div>
      </div>
    </Link>
  );
}
