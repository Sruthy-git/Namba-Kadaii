import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import ProductGrid from '../components/ProductGrid';
import allProducts from '../data/products'; // Make sure this file exists and is named correctly

export default function Home() {
  const [filters, setFilters] = useState([]);

  // Apply filters based on Sidebar input
  const filteredProducts = allProducts.filter(product => {
    return filters.every(f => {
      const [section, value] = f.split(':');
      if (section === 'Category') return value === 'All' || product.category === value;
      if (section === 'Price') {
        const price = product.price;
        if (value === 'All') return true;
        if (value === 'Rs 0 - Rs 50') return price < 50;
        if (value === 'Rs 50 -  Rs 100') return price >= 50 && price <= 100;
        if (value === 'Rs 100 - Rs 150') return price > 100 && price <= 150;
        if (value === 'Over Rs 150') return price > 150;
      }
      if (section === 'Colors') return value === 'All' || product.color === value;
      if (section === 'Gender') return value === 'All' || product.gender === value;
      if (section === 'Rating') return product.rating >= Number(value);
      return true;
    });
  });

  return (
    <div className="flex">
      {/* Sidebar for filters */}
      <Sidebar filters={filters} setFilters={setFilters} />

      {/* Product grid */}
      <main className="flex-1 p-4">
        <ProductGrid products={filteredProducts} />
      </main>
    </div>
  );
}
