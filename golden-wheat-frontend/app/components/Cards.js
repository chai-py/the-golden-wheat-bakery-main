/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import WishListButton from "./WishListButton";

export default function Cards({ name, description, price, imageUrl, _id }) {
  return (
    <div>
      <div
        key={_id}
        className="max-w-sm mx-auto overflow-hidden border border-black rounded-lg shadow-lg bg-card-background"
      >
        {/* Card Image */}
        <img className="object-cover w-full h-48" src={imageUrl} alt={name} />

        {/* Card Contents */}
        <div className="p-4 my-1">
          <div className="flex flex-row items-center justify-between">
            {/* Title */}
            <h2 className="text-2xl font-semibold text-white">{name}</h2>

            {/* Wishlist Button */}
            <WishListButton />
          </div>

          {/* Description */}
          <div className="flex flex-col justify-start p-2 mt-4 rounded-lg bg-card-beige">
            <p className="mt-2 text-base text-black">{description}</p>

            {/* Read More Button */}
            <button className="mt-2 text-sm font-semibold text-left text-custom-red hover:text-blue-800 focus:outline-none">
              Read More...
            </button>

            {/* Price */}
            <p className="text-xl font-bold text-black">${price}</p>
          </div>
        </div>
      </div>
      {/* ))
      ) : (
        <p className="text-center text-white">Loading products...</p>
      )} */}
    </div>
  );
}
