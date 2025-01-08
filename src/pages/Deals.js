// src/pages/Deals.js
import React from 'react';
import ProductList from '../components/ProductList';

const Deals = ({ products }) => {
  const deals = products.filter((product) => product.lowestPrice < 50); // Filter products with discounts or low prices

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Top Deals</h2>
      <ProductList products={deals} />
    </div>
  );
};

export default Deals;
