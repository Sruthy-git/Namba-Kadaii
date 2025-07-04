import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import ProductGrid from '../components/ProductGrid';
import products  from '../data/products'; // Ensure correct export from products.js

const Home = ({ addToCart }) => {
  const [filters, setFilters] = useState([]);

  // Apply filters if needed later
  const filteredProducts = products;

  return (
    <div className="flex min-h-screen bg-gray-50 text-black">
      {/* Sidebar */}
      <Sidebar filters={filters} setFilters={setFilters} />

      {/* Main Content */}
      <div className="flex flex-1 flex-col p-6">
        <h2 className="text-2xl font-bold text-center mb-6">Featured Products</h2>

        {/* Grid Display using ProductGrid */}
        <ProductGrid products={filteredProducts} addToCart={addToCart} />
      </div>
    </div>
  );
};

export default Home;
