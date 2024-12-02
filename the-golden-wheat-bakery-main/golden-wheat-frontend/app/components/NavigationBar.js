"use client";

import { useState } from "react";
import ShoppingListButton from "./ShoppingListButton";
import WishListButton from "./WishListButton";
import ProfileButton from "./ProfileButton";
import Logo from "./Logo";
import Link from "next/link";

export default function NavigationBar() {
  // state to manage mobile menu visibility
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

  // function to toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuVisible(!isMobileMenuVisible);
  };

  return (
    <nav className="bg-custom-nav-brown">
      <div className="max-w-full px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <button
              id="mobile-menu-button"
              onClick={toggleMobileMenu}
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-custom-lime hover:text-black focus:outline-none focus:ring-2 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>

              <svg
                className="block size-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:justify-start">
            <Logo />
            {/* <NavListItem /> */}
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4 items-center">
                <Link
                  href={`/`}
                  className="rounded-md px-3 py-2 text-base lg:text-lg font-bold text-white hover:bg-custom-lime hover:text-black"
                  aria-current="page"
                >
                  Home
                </Link>
                <Link
                  href={`/about`}
                  className="rounded-md px-3 py-2 text-base lg:text-lg font-bold text-white hover:bg-custom-lime hover:text-black"
                >
                  About
                </Link>
                <Link
                  href={`/products`}
                  className="rounded-md px-3 py-2 text-base lg:text-lg font-bold text-white hover:bg-custom-lime hover:text-black"
                >
                  Products
                </Link>
                <Link
                  href={`contact`}
                  className="rounded-md px-3 py-2 text-base lg:text-lg font-bold text-white hover:bg-custom-lime hover:text-black"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 gap-2">
            <Link href={`/shopping-list`}>
              <ShoppingListButton />
            </Link>
            <Link href={`/wishlist`}>
              <WishListButton />
            </Link>
            {/* Profile dropdown */}
            <ProfileButton />
          </div>
        </div>
      </div>
      {/* Mobile menu, show/hide based on menu state. */}
      <div className="sm:hidden" id="mobile-menu">
        {isMobileMenuVisible && (
          <div className="space-y-1 px-2 pb-3 pt-2">
            <Link
              href={`/`}
              className="block rounded-md px-3 py-2 text-base font-bold text-white hover:text-black hover:bg-custom-lime"
              aria-current="page"
            >
              Home
            </Link>
            <Link
              href={`about`}
              className="block rounded-md px-3 py-2 text-base font-bold text-white hover:text-black hover:bg-custom-lime"
            >
              About
            </Link>
            <Link
              href={`products`}
              className="block rounded-md px-3 py-2 text-base font-bold text-white hover:text-black hover:bg-custom-lime"
            >
              Products
            </Link>
            <Link
              href={`contact`}
              className="block rounded-md px-3 py-2 text-base font-bold text-white hover:text-black hover:bg-custom-lime"
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
