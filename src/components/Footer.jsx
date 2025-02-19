import React from "react";
import Logo from "../assets/logo.png";
import { ImFacebook } from "react-icons/im";
import { GrTwitter } from "react-icons/gr";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-white py-6 px-5 md:px-10 lg:px-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
        
        {/* Copyright */}
        <h1 className="text-[#0C385D] text-lg md:text-xl text-center md:text-left">
          © 2024 Shivalaya. All rights reserved.
        </h1>

        {/* Logo */}
        <div className="w-[100px] md:w-[240px]">
          <img src={Logo} alt="JustHome Logo" className="w-full h-auto" />
        </div>

        {/* Social Icons */}
        <div className="flex gap-6">
          <ImFacebook size={20} className="text-[#0C385D] hover:text-gray-600 transition" />
          <GrTwitter size={20} className="text-[#0C385D] hover:text-gray-600 transition" />
          <FiInstagram size={20} className="text-[#0C385D] hover:text-gray-600 transition" />
          <FaLinkedinIn size={20} className="text-[#0C385D] hover:text-gray-600 transition" />
        </div>

      </div>
    </div>
  );
};

export default Footer;
