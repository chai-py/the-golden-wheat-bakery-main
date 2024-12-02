/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useState } from "react";

export default function ProfileButton() {
  // state to manage profile menu visibility
  const [isProfileMenuVisible, setIsProfileMenuVisible] = useState(false);

  // function to toggle profile menu visibility
  const toggleProfileMenu = () => {
    setIsProfileMenuVisible(!isProfileMenuVisible);
  };

  return (
    <div className="relative">
      <div>
        <button
          id="profile-menu-button"
          onClick={toggleProfileMenu}
          type="button"
          className="relative flex rounded-full hover:scale-110"
          aria-expanded="false"
          aria-haspopup="true"
        >
          <span className="absolute -inset-1.5" />
          <span className="sr-only">Open user menu</span>
          <img
            className="rounded-full size-12"
            src="/images/login.png"
            alt="profile avatar"
          />
        </button>
      </div>
      {/*
            Dropdown menu, show/hide based on menu state.
          */}
      {isProfileMenuVisible && (
        <div
          id="profile-menu"
          className="absolute right-0 z-10 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black/5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="user-menu-button"
          tabIndex={-1}
        >
          <Link
            href={`/SignUp`}
            className="block px-4 py-2 text-sm text-gray-700
            hover:text-black hover:font-bold hover:bg-custom-light-brown"
            role="menuitem"
            tabIndex={-1}
            id="user-menu-item-0"
          >
            Sign Up
          </Link>

          <Link
            href={`/login`}
            className="block px-4 py-2 text-sm text-gray-700
            hover:text-black hover:font-bold hover:bg-custom-light-brown"
            role="menuitem"
            tabIndex={-1}
            id="user-menu-item-1"
          >
            Sign In
          </Link>

          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:text-black hover:font-bold hover:bg-custom-light-brown"
            role="menuitem"
            tabIndex={-1}
            id="user-menu-item-2"
          >
            Sign out
          </a>
        </div>
      )}
    </div>
  );
}
