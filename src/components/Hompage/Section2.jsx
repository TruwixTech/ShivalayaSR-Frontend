import React from "react";
import Rectangle from "../../assets/Rectangle6.png";

function Section2() {
  return (
    <div className="w-full h-auto bg-white py-10">
      <div className="flex flex-wrap items-center justify-center gap-10 px-5 md:px-10 lg:px-16">
        {/* Left Content */}
        <div className="w-full md:w-1/2 flex flex-col gap-4 text-center md:text-left">
          <h1 className="text-black text-3xl md:text-4xl font-bold">About Us</h1>
          <span className="text-sm md:text-base font-semibold">Who We Are</span>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            At Real Estate Company, we specialize in creating exceptional 
            residential and commercial properties. With over 10 years of 
            experience, our mission is to build communities that thrive, 
            combining innovative design with sustainable practices.
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="bg-gray-300 text-[#0C385D] px-5 py-2 rounded-xl text-sm md:text-base font-playflair
            ">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={Rectangle}
            alt="About Us"
            className="w-full max-w-[400px] md:max-w-[500px] h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Section2;
