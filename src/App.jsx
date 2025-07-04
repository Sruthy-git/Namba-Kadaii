// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router>
      <Navbar /> 
       {/* Marquee Banner */}
        <div className="bg-[#616161] text-white py-2 overflow-hidden whitespace-nowrap">
          <div className="inline-block animate-marquee px-4 text-sm font-medium">
            🎉 Big Sale! Flat 50% off on selected items — Shop Now! | 🚚 Free Shipping on orders over ₹499 | 🛍️ New Arrivals Every Week!
          </div>
        </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}
