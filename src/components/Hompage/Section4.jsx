import React from "react";
import Test from "../../assets/test1.png";
import Group from "../../assets/Group.png";

function Section4() {
  return (
    <div className="bg-[#eeeeee] w-full h-auto flex flex-col my-10 py-10">
      <div className="px-5 md:px-10 lg:px-20">
        {/* Header Section */}
        <div className="w-full flex flex-wrap justify-between gap-6 items-center">
          <h1 className="text-3xl md:text-4xl font-bold">
            What our customers are<br />
            saying about us?
          </h1>
          <div className="flex gap-8">
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-bold">10m +</span>
              <span className="text-sm md:text-base">Happy People</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-bold">4.88</span>
              <span className="text-sm md:text-base">Overall Rating</span>
              <div className="flex">
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-10">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="flex flex-col bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-center">
                <div className="flex gap-4">
                  <div className="w-[80px] h-[80px]">
                    <img src={Test} alt="User" className="h-full w-full rounded-full" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-lg font-semibold">Cameron Williamson</span>
                    <span className="text-sm text-gray-500">Designer</span>
                  </div>
                </div>
                <div>
                  <img src={Group} alt="Ratings" />
                </div>
              </div>
              <p className="text-sm md:text-base py-6 px-2 text-gray-600">
                Searches for multiplexes, property comparisons, and the loan estimator. Works great.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolores.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Section4;
