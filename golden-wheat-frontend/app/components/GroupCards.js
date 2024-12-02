"use client";

// import { useRouter } from "next/router";
import Cards from "../components/Cards";
import { useState, useEffect } from "react";

import Link from "next/link";

export default function GroupCards() {
  const [products, setProducts] = useState([]); // Initialize as an empty array

  const fetchProducts = async () => {
    try {
      const endpoint =
        "https://golden-wheat-backend-ocs3ziby4-aashitas-projects-5cef0c8d.vercel.app/products/";
      const response = await fetch(endpoint);

      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }

      const responseData = await response.json(); // This will be the array
      setProducts(responseData); // Assign the array directly to state
    } catch (error) {
      console.error("Error fetching products:", error);
      // Set fallback empty array in case of error
    }
  };

  useEffect(() => {
    fetchProducts(); // Fetch products when the component mounts
  }, []);

  return (
    <div className="p-4">
      <div className="flex">
        {/* <h2 className="text-4xl font-bold text-center py-14">Breads</h2> */}
        <div className="grid grid-cols-1 gap-10 p-4 sm:grid-cols-2 md:grid-cols-4">
          {products ? (
            products.map((product) => (
              <Link href={`/products/${product._id}`} key={product._id}>
                <Cards
                  key={product._id}
                  name={product.name}
                  description={product.description}
                  price={product.price}
                  imageUrl={product.imageUrl}
                />
              </Link>
            ))
          ) : (
            <p className="text-center text-white">Loading products...</p>
          )}{" "}
        </div>
      </div>
    </div>
  );
}
