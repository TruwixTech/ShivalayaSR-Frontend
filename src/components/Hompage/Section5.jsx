import React from "react";

const Stats = () => {
  return (
    <div className="w-full h-auto px-5 py-16 md:px-10">
      <div className="w-full flex flex-col md:flex-row gap-10 items-center justify-center bg-[#ca4d2f] rounded-xl py-16 px-10">
        
        {/* Left Section: Title & Subtitle */}
        <div className="flex flex-col text-white gap-2 text-center md:text-left">
          <h1 className="text-2xl md:text-4xl font-semibold">
            Take a look at our numbers
          </h1>
          <span className="text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </span>
        </div>

        {/* Right Section: Stats */}
        <div className="flex gap-8 flex-wrap justify-center sm:justify-start">
          {[
            { value: "90%", label: "Customer Satisfaction" },
            { value: "50M+", label: "Total Customers" },
            { value: "2,600+", label: "Successful Sales" },
          ].map((stat, index) => (
            <div key={index} className="flex flex-col text-white text-center">
              <span className="text-3xl md:text-4xl font-semibold">{stat.value}</span>
              <span className="text-sm md:text-base">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
