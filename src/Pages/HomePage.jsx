import React from "react";
import House from "../assets/House1.png";
import { PiBuildingsFill } from "react-icons/pi";

import Section from "../components/Hompage/Section.jsx";
import Section3 from "../components/Hompage/Section3.jsx";
import Section4 from "../components/Hompage/Section4.jsx";
import Section5 from "../components/Hompage/Section5.jsx";
import Section6 from "../components/Hompage/Section6.jsx";

function HomePage() {
  return (
    <div className="w-full h-auto bg-white">
      {/* Hero Section */}
      <div className="flex flex-wrap items-center px-5 md:px-10 lg:px-16 py-10">
        {/* Left Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center gap-5">
          <h1 className="text-3xl md:text-5xl text-[#0C385D] font-bold">
            Building Dreams <br className="hidden md:block" />
            Safe, Modern, Minimal
          </h1>

          <p className="text-lg md:text-xl text-[#080808]">
            Innovative designs, quality craftsmanship, <br className="hidden md:block" />
            and sustainable development.
          </p>

          <div className="flex flex-wrap gap-4 md:gap-6">
            <button className="bg-[#0C385D] text-white flex justify-center items-center rounded-xl px-4 py-2 md:py-3 gap-3 text-sm md:text-base">
              <PiBuildingsFill size={18} /> Discover Our Projects
            </button>
            <button className="bg-gray-300 text-[#0C385D] px-5 py-2 md:py-3 rounded-xl text-sm md:text-base">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0 flex justify-center">
          <img src={House} alt="House" className="w-full max-w-[500px] h-auto object-cover" />
        </div>
      </div>

      {/* Sections */}
      <Section />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
    </div>
  );
}

export default HomePage;
