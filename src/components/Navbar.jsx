import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa"; // Import FontAwesome icons
import { NavLink } from "react-router-dom";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white w-full h-[92px] px-5 md:px-10 lg:px-16 shadow-md">
      <div className="flex justify-between items-center h-full">
        {/* Logo */}
        <div className="w-[180px] h-[60px]">
          <img src={Logo} alt="Logo" className="h-full w-auto" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-lg">
          <NavLink to='/' className="hover:text-blue-600 cursor-pointer">Home</NavLink>
          <NavLink to='/property' className="hover:text-blue-600 cursor-pointer">About</NavLink>
          <NavLink to='/property' className="hover:text-blue-600 cursor-pointer">Project</NavLink>
          <NavLink to='/property' className="hover:text-blue-600 cursor-pointer">Services</NavLink>
          <NavLink to='/contact' className="hover:text-blue-600 cursor-pointer">Contact</NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden absolute top-[92px] left-0 w-full bg-white shadow-lg transition-all duration-300`}
      >
        <div className="flex flex-col items-center py-4 space-y-4 text-lg">
        <NavLink to='/' className="hover:text-blue-600 cursor-pointer">Home</NavLink>
          <span className="hover:text-blue-600 cursor-pointer">About</span>
          <NavLink to='/property' className="hover:text-blue-600 cursor-pointer">Project</NavLink>
          <span className="hover:text-blue-600 cursor-pointer">Services</span>
          <span className="hover:text-blue-600 cursor-pointer">Contact</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
