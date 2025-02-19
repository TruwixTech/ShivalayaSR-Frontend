import React from "react";
import Tele from "../../assets/mail2.png";
import { FaArrowRightLong } from "react-icons/fa6";

const Subscribe = () => {
  return (
    <div className="w-full h-auto py-10 bg-[#eeeeee] text-white">
      <div className="flex flex-col items-center justify-center gap-4 px-5 md:px-0">
        
        {/* Icon */}
        <div className="w-14 h-14">
          <img src={Tele} className="w-full h-full object-cover" />
        </div>

        {/* Title */}
        <h1 className="text-xl md:text-2xl text-[#0C385D] font-semibold text-center">
          Stay Up to Date
        </h1>

        {/* Subtitle */}
        <p className="text-sm md:text-base text-[#080808] text-center">
          Subscribe to our newsletter to receive our weekly feed.
        </p>

        {/* Email Input & Button */}
        <div className="w-full md:w-[570px] flex items-center bg-white border-2 border-gray-300 rounded-full overflow-hidden">
          <input
            type="email"
            placeholder="Your email"
            className="w-full px-4 py-3 outline-none text-[#818181] placeholder-gray-500"
          />
          <button className="bg-[#0C385D] text-white px-6 py-3 flex items-center gap-2 rounded-full md:rounded-r-full">
            Send <FaArrowRightLong />
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default Subscribe;
