"use client";

import { useEffect, useState } from "react";

export default function IndividualProductPage({ params }) {
  const [product, setProduct] = useState(null);
  // const [error, setError] = useState(false);
  const [id, setId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  async function unwrapParams() {
    const { id: unwrappedId } = await params;

    setId(unwrappedId);
  }

  useEffect(() => {
    // Unwrapping the `params` Promise
    unwrapParams();
  }, [params]);

  async function fetchData() {
    try {
      const response = await fetch(
        `https://golden-wheat-backend-ocs3ziby4-aashitas-projects-5cef0c8d.vercel.app/products/${id}`
      );
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.error("Failed to fetch product data:", error);
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    if (!id) return;
    fetchData();
  }, [id]);

  if (isLoading) {
    return <p className="text-lg text-center text-red-500">Loading...</p>;
  }
  if (!product) {
    return (
      <p className="text-lg text-center text-yellow-500">Product not found</p>
    );
  }

  return (
    <div className="items-center ">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-64 h-64 mx-auto mt-6 mb-4 rounded-md"
      />
      <h1 className="text-2xl text-center">{product.name}</h1>
      <p className="text-lg text-center">{product.description}</p>
      <p className="mb-6 text-lg font-bold text-center">
        Price: ${product.price}
      </p>
    </div>
  );
}
