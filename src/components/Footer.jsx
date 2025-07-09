import React from "react";
import logo from "../assets/logo.jpg";
import "../styles/fonts.css";

const Footer = () => {
  return (
    <footer className="bg-[#051C4F] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
        {/* Logo */}
        <div className="flex justify-center md:justify-start">
          <img
            src={logo}
            alt="Bakistry Logo"
            className="h-28 w-28 rounded-full object-cover"
          />
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold mb-4 dm-sans-uppercase">Quick links</h3>
          <ul className="space-y-6 font-extralight dm-sans-uppercase text-sm">
            <li>
              <a href="#" className="hover:text-yellow-400 transition-colors ">
                HOME
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400 transition-colors ">
                ABOUT US
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400 transition-colors ">
                BLOGS
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400 transition-colors ">
                CONTACT US
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="font-bold mb-4 dm-sans-uppercase">Contact us</h3>
          <div className="space-y-2">
            <p>SECTOR 121, NOIDA</p>
            <p>85XXXXXXXX</p>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex flex-col justify-center md:justify-end space-y-4">
          <a href="#" className="hover:text-yellow-400 transition-colors">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
              ></path>
            </svg>
          </a>
          <a href="#" className="hover:text-yellow-400 transition-colors">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="2"
                y="2"
                width="20"
                height="20"
                rx="5"
                ry="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              ></rect>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"
              ></path>
              <line
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                x1="17.5"
                y1="6.5"
                x2="17.51"
                y2="6.5"
              ></line>
            </svg>
          </a>
        </div>
      </div>

      <div className="mt-12 pt-8 text-center">
        <p className="dm-sans-uppercase font-light">&copy; 2025 All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
