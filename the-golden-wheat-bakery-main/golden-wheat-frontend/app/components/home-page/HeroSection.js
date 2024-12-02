import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function HeroSection() {
  return (
    <div className="flex flex-col md:flex-row items-stretch md:h-[60vh] lg:h-[80vh] xl:h-screen">
      <div className="md:w-3/5 md:h-full w-full mb-0 lg:w-2/3 items-center justify-center h-full">
        <img
          className="w-full h-full object-cover"
          src="../images/whole-wheat-bread.jpg"
          alt="whole wheat"
        />
      </div>
      <div className="flex flex-col items-center justify-between xl:justify-center w-full h-full gap-4 p-8 text-center text-black bg-card-beige md:w-2/5 lg:w-1/3">
        <h1 className="py-2 xl:py-4 text-2xl font-extrabold sm:text-4xl md:text-4xl lg:text-5xl xlg:text-5xl">
          Delicious Recipes
        </h1>
        <p className="text-lg sm:text-xl md:text-base max-w-3xl mx-auto lg:text-xl xl:leading-relaxed">
          Indulge in the goodness of freshly baked bread, made with the finest
          whole wheat flour. Our bakery brings you a variety of delicious
          recipes crafted with love and care, offering a perfect balance of
          nutrition and flavor. Discover the rich, nutty flavors of whole wheat
          bread – baked fresh, every day!
        </p>
        <Link href={`/products`}>
          <button className="lg:my-10 lg:text-xl text-white bg-custom-red rounded-3xl p-3 hover:font-bold">
            View Our Products
          </button>
        </Link>
      </div>
    </div>
  );
}
