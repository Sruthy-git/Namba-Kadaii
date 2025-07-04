import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
     
      {/* Main Navbar */}
      <nav className="bg-[#252525] text-white px-6 py-4 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        {/* Brand Logo */}
        <div className="text-xl font-bold tracking-wide">
          <Link to="/">Namba Kadaii.</Link>
        </div>

        {/* Search Box */}
        <div className="flex justify-center w-full md:w-1/3">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-2 rounded-md text-black placeholder-gray-500 text-sm"
          />
        </div>

        {/* Nav Links */}
        <div className="flex space-x-4 text-sm justify-center md:justify-end">
          <Link to="/" className="hover:text-[#546373]">Home</Link>
           <Link to="/about" className="hover:text-'#546373]">About</Link>
          <Link to="/contact" className="hover:text-[#546373]">Contact</Link>
          <Link to="/login" className="hover:text-[#546373]">Login</Link>
          <Link to="/cart" className="hover:text-'#546373]">Cart 🛒</Link>
         
        </div>
      </nav>
    </header>
  );
}
