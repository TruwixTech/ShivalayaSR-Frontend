import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import Frame from "../../assets/Frame1.png";
import Frame1 from "../../assets/Frame2.png";
import Frame2 from "../../assets/Frame3.png";

function Section3() {
  return (
    <div className="w-full h-auto bg-white py-10">
      {/* Header */}
      <div className="flex flex-col gap-4 px-5 md:px-10">
        <div className="flex flex-wrap justify-between items-center">
          <h1 className="text-3xl md:text-4xl font-bold">Ongoing Project</h1>
          <button className="bg-gray-300 text-[#0C385D] px-4 py-2 rounded-xl flex items-center gap-2 text-sm md:text-base">
            Explore More <IoIosArrowForward />
          </button>
        </div>
        <span className="text-gray-600 text-sm md:text-base">Lorem ipsum dolor sit amet</span>
      </div>

      {/* Project Images Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-5 md:px-10 mt-6">
        <div>
          <img src={Frame} alt="Project 1" className="w-full h-auto rounded-lg" />
        </div>
        <div>
          <img src={Frame1} alt="Project 2" className="w-full h-auto rounded-lg" />
        </div>
        <div>
          <img src={Frame2} alt="Project 3" className="w-full h-auto rounded-lg" />
        </div>
      </div>
    </div>
  );
}

export default Section3;
