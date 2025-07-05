import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Menu } from "lucide-react";

export default function Navbar({ cartCount }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <nav className="bg-[#252525] text-white px-6 py-4 flex flex-col md:flex-row md:justify-between md:items-center gap-4 relative">
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

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-4 text-sm justify-center md:justify-end items-center">
          <Link to="/" className="hover:text-[#546373]">Home</Link>
          <Link to="/about" className="hover:text-[#546373]">About</Link>
          <Link to="/contact" className="hover:text-[#546373]">Contact</Link>
          <Link to="/login" className="hover:text-[#546373]">Login</Link>
          <Link to="/cart" className="relative hover:text-[#546373]">
            <ShoppingCart className="inline-block" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-yellow-400 text-black rounded-full text-xs w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden absolute top-4 right-6">
          <Menu />
        </button>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className="md:hidden absolute top-16 right-4 bg-[#252525] border border-gray-700 rounded shadow-md z-50 p-4 space-y-2 text-sm">
            <Link to="/" className="block hover:text-[#546373]">Home</Link>
            <Link to="/about" className="block hover:text-[#546373]">About</Link>
            <Link to="/contact" className="block hover:text-[#546373]">Contact</Link>
            <Link to="/login" className="block hover:text-[#546373]">Login</Link>
            <Link to="/cart" className="block hover:text-[#546373]">Cart</Link>
          </div>
        )}
      </nav>
    </header>
  );
}
