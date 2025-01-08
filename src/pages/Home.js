// src/pages/Home.js
import React from 'react';
import ProductList from '../components/ProductList';

const Home = ({ products }) => {
  const featuredProducts = products.slice(0, 10); // Get the first 10 products for now

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
      <ProductList products={featuredProducts} />
    </div>
  );
};

export default Home;
