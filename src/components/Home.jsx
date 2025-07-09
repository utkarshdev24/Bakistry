import React, { useState } from "react";
import cake1 from "../assets/cake1.jpg";
import cake2 from "../assets/cake2.jpg";
import "../styles/TestimonialCard.css";
import "../styles/fonts.css";
import "../styles/Bestsellers.css";
import { ShoppingCart } from "lucide-react";
import why from "../../public/assets/why.jpg";

const Home = () => {
  const testimonials = [
    {
      id: 1,
      image: "/assets/testimonials.jpg",
      text: "Amazing experience with the Bakistry! She took care of every detail. Cake was delivered on time. The quality was fantastic. This was the best cake I've ever had",
      author: "Ankur Dwivedi",
      rating: 4,
    },
    {
      id: 2,
      image: "/assets/testimonials.jpg",
      text: "The chocolate truffle cake was divine. It was rich, moist, and not too sweet. Perfect for our anniversary celebration. Will be ordering again soon!",
      author: "Priya Singh",
      rating: 5,
    },
    {
      id: 3,
      image: "/assets/testimonials.jpg",
      text: "I am so impressed with the custom design. It looked exactly like the picture I sent. And it tasted even better than it looked! Thank you Vidhu!",
      author: "Sameer Verma",
      rating: 5,
    },
    {
      id: 4,
      image: "/assets/testimonials.jpg",
      text: "Best eggless cakes in town. As a vegetarian, it's hard to find good options, but The Bakistry nails it. The texture and flavors are top-notch.",
      author: "Kavita Rao",
      rating: 4,
    },
  ];

  const bestsellers = [
    {
      id: 1,
      image: "/assets/bestseller.jpg",
      name: "CLASSIC BELGIAN",
      type: "CHOCOLATE TRUFFLE CAKE",
      price: "₹560",
    },
    {
      id: 2,
      image: "/assets/bestseller.png",
      name: "CLASSIC BELGIAN",
      type: "CHOCOLATE TRUFFLE CAKE",
      price: "₹560",
    },
    {
      id: 3,
      image: "/assets/bestseller.png",
      name: "CLASSIC BELGIAN",
      type: "CHOCOLATE TRUFFLE CAKE",
      price: "₹560",
    },
    {
      id: 4,
      image: "/assets/bestseller.png",
      name: "CLASSIC BELGIAN",
      type: "CHOCOLATE TRUFFLE CAKE",
      price: "₹560",
    },
    {
      id: 5,
      image: "/assets/bestseller.png",
      name: "CLASSIC BELGIAN",
      type: "CHOCOLATE TRUFFLE CAKE",
      price: "₹560",
    },
  ];

  const [currentTestimonialPage, setCurrentTestimonialPage] = useState(0);
  const [currentBestsellerPage, setCurrentBestsellerPage] = useState(0);

  const testimonialsItemsPerPage = 4;
  const bestsellersItemsPerPage = 4;

  const totalTestimonialPages = Math.ceil(
    testimonials.length / testimonialsItemsPerPage
  );
  const totalBestsellerPages = Math.ceil(
    bestsellers.length / bestsellersItemsPerPage
  );

  const handleTestimonialPrev = () => {
    setCurrentTestimonialPage((prevPage) =>
      prevPage === 0 ? totalTestimonialPages - 1 : prevPage - 1
    );
  };

  const handleTestimonialNext = () => {
    setCurrentTestimonialPage((prevPage) =>
      prevPage === totalTestimonialPages - 1 ? 0 : prevPage + 1
    );
  };

  const handleBestsellerPrev = () => {
    setCurrentBestsellerPage((prevPage) =>
      prevPage === 0 ? totalBestsellerPages - 1 : prevPage - 1
    );
  };

  const handleBestsellerNext = () => {
    setCurrentBestsellerPage((prevPage) =>
      prevPage === totalBestsellerPages - 1 ? 0 : prevPage + 1
    );
  };

  const testimonialStartIndex =
    currentTestimonialPage * testimonialsItemsPerPage;
  const currentTestimonials = testimonials.slice(
    testimonialStartIndex,
    testimonialStartIndex + testimonialsItemsPerPage
  );

  const bestsellerStartIndex = currentBestsellerPage * bestsellersItemsPerPage;
  const currentBestsellers = bestsellers.slice(
    bestsellerStartIndex,
    bestsellerStartIndex + bestsellersItemsPerPage
  );

  const testimonialProgress =
    ((currentTestimonialPage + 1) / totalTestimonialPages) * 100;
  const bestsellerProgress =
    ((currentBestsellerPage + 1) / totalBestsellerPages) * 100;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Bespoke Cakes */}
      <section className="relative bg-[#D5F1FC]">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left px-6 lg:pl-12 py-12 lg:py-16">
            <div className="space-y-4 lg:space-y-6">
              <p
                className="text-gray-800 uppercase font-light py-2 text-sm lg:text-xl"
                style={{
                  fontFamily: "DM Sans",
                  fontWeight: 400,
                  fontStyle: "normal",
                  lineHeight: "100%",
                  letterSpacing: "5%",
                  borderTop: "1px solid black",
                  borderBottom: "1px solid black",
                  display: "inline-block",
                }}
              >
                HANDCRAFTED WITH LOVE & DETAIL
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-6xl text-black leading-[1.5] font-light uppercase tracking-tight">
                BESPOKE CAKES
                <br />
                THAT SPEAK TO
                <br />
                YOUR HEART
              </h1>
            </div>
            <button className="mt-2 px-4 lg:px-6 add-to-cart-gradient hover:opacity-80 text-black py-2 lg:py-3 font-medium transition-opacity flex items-center justify-center text-sm lg:text-base">
              <span className="dm-sans-uppercase font-medium">
                Order a cake
              </span>
            </button>
          </div>

          {/* Right Images - Multiple smaller cakes */}
          <div className="flex flex-col lg:flex-row justify-center lg:justify-end items-center gap-2 lg:gap-0 mt-6 lg:mt-0">
            <div className="relative">
              <img
                src={cake1}
                alt="Artistic cake with cherry blossoms under glass dome"
                className="w-full max-w-sm lg:w-[55vw] h-auto lg:h-[600px] object-cover shadow-xl"
              />
            </div>
            <div className="relative">
              <img
                src={cake2}
                alt="Artistic cake with cherry blossoms under glass dome"
                className="w-full max-w-sm lg:w-[55vw] h-auto lg:h-[600px] object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Bestsellers Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <img src="/assets/union.svg" alt="decoration" className="w-24 md:w-48 lg:w-96" />
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mx-4 lg:mx-8">
                OUR BESTSELLERS
              </h2>
              <img src="/assets/union_right.svg" alt="decoration" className="w-24 md:w-48 lg:w-96" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentBestsellers.map((item) => (
              <div
                key={item.id}
                className="bg-white overflow-hidden text-center"
              >
                <div className="h-80 bg-white">
                  <img src={item.image} className="w-full h-full object-fit" />
                </div>
                <div className="p-2">
                  <div className="flex flex-coljustify-between items-center mb-4">
                    <div className="text-sm text-gray-900 text-left w-3/4">
                      {item.name} <br />
                      {item.type}
                    </div>

                    <span className="text-md dm-sans-uppercase font-bold text-gray-900">
                      {item.price}
                    </span>
                  </div>
                  <button className="w-full mt-4 add-to-cart-gradient hover:opacity-80 text-black py-3 font-medium transition-opacity flex items-center justify-center text-sm">
                    <ShoppingCart size={20} className="mr-2" />
                    <span className="dm-sans-uppercase font-medium">
                      Add to cart
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center mt-12 space-x-8">
            <div className="flex-grow max-w-md h-1 bg-[#D5F1FC] rounded-full">
              <div
                className="h-1 bg-[#0F2C4A] rounded-full"
                style={{ width: `${bestsellerProgress}%` }}
              ></div>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={handleBestsellerPrev}
                className="bg-[#0F2C4A] text-white p-3 rounded-full hover:bg-opacity-80 transition-opacity"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={handleBestsellerNext}
                className="bg-[#0F2C4A] text-white p-3 rounded-full hover:bg-opacity-80 transition-opacity"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why The Bakistry Section */}
      <section className="py-12 lg:py-16 px-4 lg:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 lg:mb-20">
            <div className="flex items-center justify-center mb-4">
              <img src="/assets/union.svg" alt="decoration" className="w-24 md:w-48 lg:w-96" />
              <h2
                className="text-xl md:text-2xl lg:text-3xl text-gray-900 mx-4 lg:mx-8 tracking-widest"
                style={{ fontFamily: "Bellefair" }}
              >
                WHY THE BAKISTRY?
              </h2>
              <img src="/assets/union_right.svg" alt="decoration" className="w-24 md:w-48 lg:w-96" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "GENACHE FROSTED",
                image: why,
              },
              {
                title: "NO PRESERVATIVES",
                image: why,
              },
              {
                title: "FRESHLY BAKED",
                image: why,
              },
              {
                title: "100% EGGLESS",
                image: why,
              },
            ].map((item, index) => (
              <div key={index}>
                <div className="relative group cursor-pointer">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full max-w-xs lg:w-64 h-60 lg:h-80 object-cover rounded-lg mx-auto"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg
                      className="w-10 lg:w-14 h-10 lg:h-14 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="11"
                        stroke="white"
                        strokeWidth="1"
                        fill="rgba(0,0,0,0.4)"
                      />
                      <path d="M10 8l6 4-6 4V8z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-center mt-4 lg:mt-6 text-gray-700 tracking-widest dm-sans-uppercase text-sm lg:text-base">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Gallery Section */}
      <section className="py-12 lg:py-16 px-4 lg:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 lg:mb-12">
            <div className="flex items-center justify-center mb-4">
              <img src="/assets/union.svg" alt="decoration" className="w-20 md:w-32 lg:w-80" />
              <h2 className="text-lg md:text-2xl lg:text-4xl font-bold text-gray-800 mx-4 lg:mx-8 tracking-wide">
                CUSTOMER GALLERY
              </h2>
              <img src="/assets/union_right.svg" alt="decoration" className="w-20 md:w-32 lg:w-80" />
            </div>
          </div>

          {/* Desktop Layout - 3 Columns as per reference image */}
          <div className="hidden lg:grid lg:grid-cols-3 lg:gap-4 max-w-5xl mx-auto">
            {/* Column 1 - 2 images */}
            <div className="space-y-4">
              {/* Birthday Cake - Large */}
              <div className="relative group">
                {/* Frame image (background layer) */}
                <img
                  src="/assets/frame1.jpg"
                  alt="Ornate gold frame"
                  className="w-full h-full object-fit "
                />
              </div>

              {/* Party Cake - Medium */}
              <div className="relative group">
                {/* Frame image */}
                <img
                  src="/assets/frame2.jpg"
                  alt="Vintage wooden frame"
                  className="w-full h-full object-fit"
                />
              </div>
            </div>

            {/* Column 2 - 2 images */}
            <div className="space-y-4">
              {/* Anniversary Cake - Medium */}
              <div className="relative group">
                {/* Frame image */}
                <img
                  src="/assets/frame3.jpg"
                  alt="Silver ornate frame"
                  className="w-full h-full object-fit"
                />
              </div>

              {/* Wedding Cake - Large */}
              <div className="relative group">
                {/* Frame image */}
                <img
                  src="/assets/frame4.jpg"
                  alt="Luxury gold frame"
                  className="w-full h-full object-fit"
                />
              </div>
            </div>

            {/* Column 3 - 3 images */}
            <div className="space-y-4">
              {/* Festive Cake - Small */}
              <div className="relative group">
                {/* Frame image */}
                <img
                  src="/assets/frame5.jpg"
                  alt="Modern minimalist frame"
                  className="w-full h-full object-fit"
                />
              </div>

              {/* Baby Shower Cake - Medium */}
              <div className="relative group">
                {/* Frame image */}
                <img
                  src="/assets/frame6.jpg"
                  alt="Classic silver frame"
                  className="w-full h-full object-fit"
                />
              </div>

              {/* Engagement Cake - Medium */}
              <div className="relative group">
                {/* Frame image */}
                <img
                  src="/assets/frame7.jpg"
                  alt="Elegant gold frame"
                  className="w-full h-full object-fit"
                />
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {/* Birthday Cake */}
            <div className="relative group">
              <img
                src="/assets/frame1.jpg"
                alt="Ornate frame"
                className="w-full h-full object-fit"
              />
            </div>

            {/* Anniversary Cake */}
            <div className="relative group">
              <img
                src="/assets/frame2.jpg"
                alt="Silver frame"
                className="w-full h-full object-fit"
              />
            </div>
            <div className="relative group">
              <img
                src="/assets/frame3.jpg"
                alt="Gold frame"
                className="w-full h-full object-fit"
              />
            </div>
            {/* Wedding Cake */}
            <div className="relative group">
              <img
                src="/assets/frame4.jpg"
                alt="Gold frame"
                className="w-full h-full object-fit"
              />
            </div>

            {/* Festive Cake */}
            <div className="relative group">
              <img
                src="/assets/frame5.jpg"
                alt="Festive cake"
                className="w-full h-full object-fit"
              />
            </div>

            {/* Party Cake */}
            <div className="relative group">
              <img
                src="/assets/frame6.jpg"
                alt="Wooden frame"
                className="w-full h-full object-fit"
              />
            </div>

            {/* Engagement Cake */}
            <div className="relative group">
              <img
                src="/assets/frame7.jpg"
                alt="Elegant frame"
                className="w-full h-full object-fit"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 lg:py-16 px-4 lg:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 lg:mb-12">
            <div className="flex items-center justify-center mb-4">
              <img src="/assets/union.svg" alt="decoration" className="w-24 md:w-48 lg:w-96" />
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mx-4 lg:mx-8">
                TESTIMONIALS
              </h2>
              <img src="/assets/union_right.svg" alt="decoration" className="w-24 md:w-48 lg:w-96" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white overflow-hidden">
                <div className="h-48 bg-gray-100">
                  <img
                    src={testimonial.image}
                    alt="Customer cake"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 testimonial-card-bg">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, index) => (
                      <svg
                        key={index}
                        className={`w-5 h-5 ${
                          index < testimonial.rating
                            ? "text-yellow-400"
                            : "text-gray-300"
                        } fill-current`}
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p
                    className="text-gray-600 mb-4 testimonial-text"
                    style={{ minHeight: "140px" }}
                  >
                    {testimonial.text}
                  </p>
                  <div className="text-gray-900 testimonial-author">
                    {testimonial.author}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center mt-12 space-x-8">
            <div className="flex-grow max-w-md h-1 bg-[#D5F1FC] rounded-full">
              <div
                className="h-1 bg-[#0F2C4A] rounded-full"
                style={{ width: `${testimonialProgress}%` }}
              ></div>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={handleTestimonialPrev}
                className="bg-[#0F2C4A] text-white p-3 rounded-full hover:bg-opacity-80 transition-opacity"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={handleTestimonialNext}
                className="bg-[#0F2C4A] text-white p-3 rounded-full hover:bg-opacity-80 transition-opacity"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Follow Us on Instagram Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <img
                src="/assets/union.svg"
                alt="decoration"
                className="w-20 sm:w-32"
              />
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mx-4 sm:mx-8 whitespace-nowrap">
                FOLLOW US ON INSTAGRAM
              </h2>
              <img
                src="/assets/union_right.svg"
                alt="decoration"
                className="w-20 sm:w-32"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {[1, 2, 3, 4].map((post) => (
              <div key={post} className="relative group cursor-pointer">
                <img
                  src="/assets/follow.jpg"
                  alt="Instagram post"
                  className="w-full h-48 md:h-64 lg:h-80 object-cover shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-2 lg:p-4">
                  <div className="text-white">
                    <div className="flex items-center space-x-2">
                      <svg
                        className="w-4 lg:w-6 h-4 lg:h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                      <span className="dm-sans-uppercase text-sm lg:text-md">25.2K</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
