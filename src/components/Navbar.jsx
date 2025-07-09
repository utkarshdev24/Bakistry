import React, { useState } from "react";
import logo from "/assets/logo.png";
import { ShoppingCart } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinkStyle = "transition-colors";

  return (
    <nav className="w-full shadow-sm bg-white sticky top-0 z-50">
      {/* Top Navbar */}
      <div className="flex items-center justify-between px-4 lg:px-8 py-3 bg-white">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Bakistry Logo"
            className="h-16 w-16 rounded-full object-cover"
          />
        </div>

        {/* Desktop Main Links */}
        <div className="hidden lg:flex items-center space-x-8 text-gray-700 uppercase text-base tracking-[-0.04em] leading-none">
          <a href="/" className={navLinkStyle}>
            HOME
          </a>
          <a href="/about" className={navLinkStyle}>
            ABOUT US
          </a>
          <a href="#" className={navLinkStyle}>
            BLOGS
          </a>
          <a href="#" className={navLinkStyle}>
            CONTACT US
          </a>
        </div>

        {/* Desktop Search + Cart + Order Button */}
        <div className="hidden lg:flex items-center space-x-4">
          <div className="relative">
            <svg
              className="absolute left-1 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="SEARCH FOR CAKES..."
              className="border border-gray-300 text-black  rounded-xs px-4 py-2  text-xs focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent w-72 pl-6 "
            />
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <ShoppingCart size={20} className="mr-2 font-light text-gray-700"  />
          </button>
          <button className="w-full mt-2 px-3 add-to-cart-gradient hover:opacity-80 text-black py-2 font-medium transition-opacity flex items-center justify-center text-sm">
                    <span className="dm-sans-uppercase font-medium">
                      Add to cart
                    </span>
                  </button>
        </div>
        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
            <svg
              className="h-6 w-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Centered Site Title */}
      <div className="flex flex-col items-center py-1 bg-white border-b border-gray-100">
        <h1 className="text-3xl md:text-4xl tracking-[0.2em] text-black font-light uppercase">
          THE BAKISTRY
        </h1>
        <span className="mt-2 text-xs tracking-[0.3em] text-gray-500 font-light uppercase">
          BY VIDHU SAXENA
        </span>
      </div>

      {/* Bottom Navbar */}
      <div className="hidden lg:flex justify-center items-center space-x-6 py-3 bg-white text-black border-b border-gray-100 text-base tracking-[-0.04em] leading-none uppercase">
        <a href="#" className={navLinkStyle}>
          OCCASION CAKES
        </a>
        <span className="text-gray-700">•</span>
        <a href="#" className={navLinkStyle}>
          FLAVOR-BASED CAKES
        </a>
        <span className="text-gray-700">•</span>
        <a href="#" className={navLinkStyle}>
          DESIGN THEMES
        </a>
        <span className="text-gray-700">•</span>
        <a href="#" className={navLinkStyle}>
          CAKE TYPES
        </a>
        <span className="text-gray-700">•</span>
        <a href="#" className={navLinkStyle}>
          CUSTOM CAKES
        </a>
        <span className="text-gray-700">•</span>
        <a href="#" className={navLinkStyle}>
          BESTSELLERS
        </a>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden bg-white absolute top-full left-0 w-full z-20 shadow-lg">
          <div className="px-4 pt-2 pb-8 space-y-4">
            {/* Search Bar */}
            <div className="relative">
              <svg
                className="absolute left-1 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="SEARCH FOR CAKES..."
                className="border border-gray-300 text-black rounded-xs px-4 py-2 text-xs focus:outline-none w-full pl-6"
              />
            </div>

            {/* Main Links */}
            <a
              href="/"
              className="block py-2 text-gray-700 uppercase"
              onClick={() => setIsMenuOpen(false)}
            >
              HOME
            </a>
            <a
              href="/about"
              className="block py-2 text-gray-700 uppercase"
              onClick={() => setIsMenuOpen(false)}
            >
              ABOUT US
            </a>
            <a
              href="#"
              className="block py-2 text-gray-700 uppercase"
              onClick={() => setIsMenuOpen(false)}
            >
              BLOGS
            </a>
            <a
              href="#"
              className="block py-2 text-gray-700 uppercase"
              onClick={() => setIsMenuOpen(false)}
            >
              CONTACT US
            </a>

            <div className="border-t border-gray-200 my-4"></div>

            {/* Bottom Links */}
            <a
              href="#"
              className="block py-2 text-gray-700 uppercase"
              onClick={() => setIsMenuOpen(false)}
            >
              OCCASION CAKES
            </a>
            <a
              href="#"
              className="block py-2 text-gray-700 uppercase"
              onClick={() => setIsMenuOpen(false)}
            >
              FLAVOR-BASED CAKES
            </a>
            <a
              href="#"
              className="block py-2 text-gray-700 uppercase"
              onClick={() => setIsMenuOpen(false)}
            >
              DESIGN THEMES
            </a>
            <a
              href="#"
              className="block py-2 text-gray-700 uppercase"
              onClick={() => setIsMenuOpen(false)}
            >
              CAKE TYPES
            </a>
            <a
              href="#"
              className="block py-2 text-gray-700 uppercase"
              onClick={() => setIsMenuOpen(false)}
            >
              CUSTOM CAKES
            </a>
            <a
              href="#"
              className="block py-2 text-gray-700 uppercase"
              onClick={() => setIsMenuOpen(false)}
            >
              BESTSELLERS
            </a>

            <div className="border-t border-gray-200 my-4"></div>

            {/* Cart and Order */}
            <div className="flex items-center justify-between">
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9h12l-2-9M9 21a2 2 0 100-4 2 2 0 000 4zm8 0a2 2 0 100-4 2 2 0 000 4z"
                  />
                </svg>
              </button>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded-md text-sm transition-colors uppercase w-full ml-4">
                Order a cake
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
