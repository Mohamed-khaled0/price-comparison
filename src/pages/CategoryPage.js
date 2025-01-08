// src/pages/CategoryPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import ProductList from '../components/ProductList';

const CategoryPage = ({ products }) => {
  const { category } = useParams();
  const filteredProducts = products.filter((product) => product.category === category);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Category: {category}</h2>
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default CategoryPage;
