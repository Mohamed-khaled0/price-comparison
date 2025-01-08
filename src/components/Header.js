// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link to="/" className="text-xl font-bold text-gray-800">
          PriceCompare
        </Link>
        <SearchBar />
        <nav>
          <Link to="/categories" className="text-gray-600 hover:text-gray-800 mx-2">
            Categories
          </Link>
          <Link to="/deals" className="text-gray-600 hover:text-gray-800 mx-2">
            Deals
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;