import React, { useRef, useEffect } from 'react';
import { IoIosArrowForward } from "react-icons/io";
import frame1 from "../../assets/Frame4.png";
import {Link} from "react-router-dom"
function Section() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let isScrolling = false;

    const animateScroll = () => {
      if (scrollContainer && !isScrolling) {
        const totalScrollWidth = scrollContainer.scrollWidth;
        const currentScrollPosition = scrollContainer.scrollLeft;
        const containerWidth = scrollContainer.clientWidth;

        if (currentScrollPosition >= totalScrollWidth - containerWidth) {
          scrollContainer.scrollLeft = 0; // Reset scroll position
        } else {
          scrollContainer.scrollLeft += 300; // Adjust speed as needed
        }
      }
    };

    const interval = setInterval(animateScroll, 2500);

    // Pause scrolling while manually interacting
    const handleTouchStart = () => { isScrolling = true; };
    const handleTouchEnd = () => { isScrolling = false; };

    scrollContainer.addEventListener("touchstart", handleTouchStart);
    scrollContainer.addEventListener("touchend", handleTouchEnd);

    return () => {
      clearInterval(interval);
      scrollContainer.removeEventListener("touchstart", handleTouchStart);
      scrollContainer.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  const properties = [
    { title: "Property 1",  location: "Location 1", image: frame1, link: "/property1" },
    { title: "Property 1",  location: "Location 1", image: frame1, link: "/property1" },
    { title: "Property 1",  location: "Location 1", image: frame1, link: "/property1" },
    { title: "Property 1",  location: "Location 1", image: frame1, link: "/property1" },
    { title: "Property 1",  location: "Location 1", image: frame1, link: "/property1" },
    { title: "Property 1",  location: "Location 1", image: frame1, link: "/property1" },
  ];

  return (
    <div className="w-full h-auto bg-white">
      <div className="flex flex-col gap-4 mt-6 px-6 md:px-10">
        <div className="flex justify-between">
          <h1 className="text-[28px] md:text-[40px]">Featured Categories</h1>
          <Link to="/property">
          <button className="text-[#0C385D] bg-gray-300 px-4 py-1 rounded-xl flex items-center">
            Explore more <IoIosArrowForward className="ml-1" />
          </button></Link>
        </div>
        <span className="mb-6 text-sm md:text-base">Exemplary Developments</span>
      </div>

      <div className="overflow-hidden">
        <div
          ref={scrollRef}
          className="flex space-x-4 md:space-x-8 overflow-x-scroll scroll-smooth pb-8 no-scrollbar"
          style={{
            scrollbarWidth : "none"
          }}
        >
          {[...properties, ...properties, ...properties, ...properties].map((property, index) => (
            <div
              key={index}
              className="bg-white cursor-pointer rounded-lg shadow-md transition duration-300 hover:shadow-xl min-w-[280px] md:min-w-[300px]"
            >
              <div className="w-full h-auto bg-gray-300 font-playflair">
                <img src={property.image} alt={property.title} className="w-full h-auto object-cover" />
              </div>
              <div className="p-4 md:p-6">
                <div className="flex justify-between">
                  <h3 className=" text-xl md:text-xl font-playflair">{property.title}</h3>
                  <p className="text-gray-600 font-playflair">{property.location}</p>
                </div>
                <div className="mt-2 flex justify-between items-center">
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Section;
