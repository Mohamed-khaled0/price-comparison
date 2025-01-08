// src/pages/SearchResults.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import ProductList from '../components/ProductList';

const SearchResults = ({ products }) => {
  const { search } = useLocation();
  const query = new URLSearchParams(search).get('q');
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Search Results for "{query}"</h2>
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default SearchResults;
