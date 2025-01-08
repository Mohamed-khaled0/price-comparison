import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiMoon, FiSun } from 'react-icons/fi'; // Import icons
import SearchBar from './SearchBar';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    () => localStorage.getItem('theme') === 'dark'
  );

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  return (
    <header className="bg-white dark:bg-gray-900 shadow">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-gray-800 dark:text-gray-100">
          PriceCompare
        </Link>

        {/* Search Bar */}
        <SearchBar />

        {/* Navigation */}
        <nav className="flex items-center">
          <Link to="/categories" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white mx-2">
            Categories
          </Link>
          {/* <Link to="/deals" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white mx-2">
            Deals
          </Link> */}
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="ml-4 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
          >
            {isDarkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
