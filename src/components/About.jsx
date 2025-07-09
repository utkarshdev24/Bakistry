import React from "react";
import { Instagram } from "lucide-react";
import "../styles/About.css";
import "../styles/fonts.css";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
              <section className="bg-[#D5F1FC]">
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          <div className="space-y-4 lg:space-y-6 w-full max-w-7xl mx-auto lg:mx-0 px-4 lg:px-6 lg:pl-12 py-8 lg:py-16">
            <h1
              className="text-2xl md:text-3xl lg:text-5xl text-gray-900 leading-tight"
              style={{ fontFamily: "Bellefair" }}
            >
              MORE THAN JUST CAKES — WE BAKE MOMENTS THAT MATTER.
            </h1>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed dm-sans-uppercase">
              Indulge in layers of rich, moist chocolate sponge, generously
              filled with velvety hazelnut praline cream. Topped with a silky
              chocolate ganache drip and handcrafted edible decorations, this
              cake is a visual and flavorful showstopper.
            </p>
            <div className="flex flex-wrap gap-2 lg:gap-4">
              <span className="button-gradient text-black px-3 lg:px-4 py-2 rounded-md text-xs lg:text-sm font-medium dm-sans-uppercase">
                1000+ cake delivered
              </span>
              <span className="button-gradient text-black px-3 lg:px-4 py-2 rounded-md text-xs lg:text-sm font-medium dm-sans-uppercase">
                4.5/5 customer rating
              </span>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img
              src="/assets/decorated_cake.png"
              alt="Delicious layered cake"
              className="w-full lg:w-3/4 h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-12 lg:py-20 px-4 lg:px-6 max-w-6xl mx-auto">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 lg:mb-20">
            <div className="flex items-center justify-center">
            <img src="/assets/union.svg" alt="decoration" className="w-24 md:w-48 lg:w-96" />
              <h2
                className="text-xl md:text-2xl lg:text-3xl text-gray-900 mx-4 lg:mx-8 tracking-widest"
                style={{ fontFamily: "Bellefair" }}
              >
                OUR STORY
              </h2>
              <img src="/assets/union_right.svg" alt="decoration" className="w-24 md:w-48 lg:w-96" />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="w-full lg:w-3/4 mx-auto">
                  
                <div
                  className="text-lg lg:text-xl mb-2 lg:mb-4 text-gray-900"
                  style={{ fontFamily: "Bellefair" }}
                >
                  YEAR 202X
                </div>
                <div className="text-gray-600 text-sm lg:text-lg">
                  Started by Vidhu Saxena, a former chemistry teacher turned
                  baker extraordinaire, The Bakistry specializes in creating
                  customized cakes that are work of art. With a passion for
                  baking that started long before she left the classroom,
                  Vidhu's cakes have gone viral on more than one occasion -
                  leaving mouth-watering and social media feeds buzzing.
                </div>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="/assets/our_story.jpg"
                alt="Vidhu Saxena"
                className="shadow-xl w-full max-w-md lg:max-w-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Presence Section */}
      <section className="py-12 lg:py-20 px-4 lg:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 lg:mb-20">
            <div className="flex items-center justify-center">
            <img src="/assets/union.svg" alt="decoration" className="w-24 md:w-48 lg:w-96" />
              <h2
                className="text-xl md:text-2xl lg:text-3xl text-gray-900 mx-4 lg:mx-8 tracking-widest"
                style={{ fontFamily: "Bellefair" }}
              >
                OUR PRESENCE
              </h2>
              <img src="/assets/union_right.svg" alt="decoration" className="w-24 md:w-48 lg:w-96" />
            </div>
          </div>
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 lg:gap-x-8 gap-y-12 lg:gap-y-24 items-center">
              {/* First Location */}
              <div className="md:order-1 flex justify-center">
                <img
                  src="/assets/our_presence.jpg"
                  alt="Chef decorating a cake"
                  className="w-full h-full max-w-sm md:max-w-full"
                />
              </div>
              <div className="md:order-2 text-center md:text-left relative px-4 md:px-0">
                <div className="absolute -top-12 -left-12 w-24 h-24 bg-[#EAF7FB] -z-10 hidden lg:block"></div>
                <p className="text-gray-700 text-base md:text-lg lg:text-2xl">
                  SHOP F 14, FIRST FLOOR, 2ND MAIN RD, MODEL TOWN PHASE 2, BLOCK
                  E, PHASE 2, MODEL TOWN, DELHI, 110009
                </p>
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 hidden md:block">
                <img src="/assets/frame_our_presence.jpg" alt="decoration" className="w-16 lg:w-24"/>
              </div>
              {/* Second Location */}
              <div className="md:order-4 flex justify-center">
                <img
                  src="/assets/our_presence.jpg"
                  alt="Chef with a chocolate cake"
                  className="w-full h-full max-w-sm md:max-w-full"
                />
              </div>
              <div className="md:order-3 text-center md:text-left relative px-4 md:px-0">
                <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-[#EAF7FB] -z-10 hidden lg:block"></div>
                <p className="text-gray-700 text-base md:text-lg lg:text-2xl">
                  SHOP NO. 9, CLEO ST, SECTOR 121, NOIDA, UTTAR PRADESH 201301
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Community Section */}
      <section className="bg-[#D5F1FC] py-6 lg:py-8 px-4 lg:px-6 mb-12 lg:mb-20 max-w-6xl mx-auto">
        <div className="mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <h3
            className="text-xl lg:text-2xl text-gray-900 mb-2 md:mb-0 text-center md:text-left"
            style={{ fontFamily: "Bellefair" }}
          >
            JOIN OUR COMMUNITY
          </h3>
          <button className="button-gradient hover:opacity-80 text-black px-4 lg:px-6 py-2 lg:py-3 transition-opacity flex items-center justify-center text-xs lg:text-sm rounded-md">
            <Instagram size={16} className="mr-2 lg:mr-2" />
            <span className="dm-sans-uppercase font-medium">
              Follow us on Instagram
            </span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
