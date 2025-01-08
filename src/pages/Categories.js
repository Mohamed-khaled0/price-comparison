// src/pages/Categories.js
import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
  // Define categories with corresponding images
  const categories = [
    {
      name: 'Electronics',
      image:
        'https://images.unsplash.com/photo-1518779578993-ec3579fee39c?auto=format&fit=crop&w=800&q=60',
    },
    {
      name: 'Home Appliances',
      image:
        'https://images.unsplash.com/photo-1524429656589-6633a470097c?auto=format&fit=crop&w=800&q=60',
    },
    {
      name: 'Clothing',
      image:
        'https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=800&q=60',
    },
    {
      name: 'Books',
      image:
        'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=60',
    },
    {
      name: 'Sports',
      image:
        'https://images.unsplash.com/photo-1508025079040-14aa4ee1c5b3?auto=format&fit=crop&w=800&q=60',
    },
    {
      name: 'Beauty',
      image:
        'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=60',
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-6 text-center">Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <Link
            key={index}
            to={`/category/${encodeURIComponent(category.name)}`}
            className="relative block border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img
              src={category.image}
              alt={`${category.name} category`}
              className="w-full h-48 object-cover"
              loading="lazy"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Available';
              }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center">
              <h3 className="text-white text-xl font-bold">{category.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;