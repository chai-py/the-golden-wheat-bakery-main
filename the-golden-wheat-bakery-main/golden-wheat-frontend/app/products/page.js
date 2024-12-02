"use client";

import { useState, useEffect } from "react";

import Link from "next/link";
import GroupCards from "../components/GroupCards";

export default function Card() {
  const [products, setProducts] = useState([]); // Initialize as an empty array

  return (
    <div>
      {/* Header Section */}
      <h1 className="mt-6 mb-6 font-bold text-center lg:text-5xl md:text-3xl">
        Delicious Bakery Products
      </h1>

      {/* Description */}
      <div className="px-40 lg:px-96">
        <p className="mb-6 font-semibold text-center text-md">
          Welcome to Our Bakery! Discover the joy of freshly baked bread,
          pastries, and buns, made with love and the finest ingredients. From
          everyday essentials to special treats, every bite is crafted to
          delight. Experience the taste of quality in every creation.
        </p>
      </div>

      {/* Bread Section */}
      <div>
        <h2 className="text-4xl font-bold text-center py-14">
          Products Available
        </h2>
        <div>
          <GroupCards />
        </div>
      </div>
    </div>
  );
}
