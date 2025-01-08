import React, { useState } from 'react';
import ProductList from '../components/ProductList';
import ScrollableBanner from '../components/ScrollableBanner';

const Home = ({ products }) => {
  const [category, setCategory] = useState('');

  // Filter products by category
  const filteredProducts = category
    ? products.filter(product => product.category === category)
    : products.slice(0, 20); // Get first 20 products if no category filter

  // Get unique categories from products
  const categories = [...new Set(products.map(product => product.category))];

  return (
    <div className="container mx-auto p-4">
      {/* Scrollable Banner */}
      <ScrollableBanner />

      {/* Title */}
      <h2 className="text-2xl font-semibold mt-6 mb-4 text-gray-800 dark:text-gray-100">
        Featured Products
      </h2>

      {/* Category Filter */}
      <div className="mb-4">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border border-gray-300 dark:border-gray-700 rounded p-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100"
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Product List */}
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default Home;
