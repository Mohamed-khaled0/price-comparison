// src/pages/Categories.js
import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
  const categories = ['Electronics', 'Home Appliances', 'Clothing', 'Books', 'Sports', 'Beauty'];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Categories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <Link key={index} to={`/category/${category}`} className="border rounded-lg p-4 text-center hover:bg-gray-200">
            <h3 className="text-lg font-medium">{category}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
