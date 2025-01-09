// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import products from '../data/products'; // Import products to extract categories

const Footer = () => {
  // Extract unique categories from products
  const categories = Array.from(new Set(products.map((product) => product.category))).sort();

  return (
    <footer className="bg-gray-800 text-gray-200 mt-auto shadow-sm shadow-white">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* About Us Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About PriceTracker</h3>
            <p className="text-gray-400">
              PriceTracker helps you find the best prices across various online retailers. Compare products effortlessly and save money on your favorite items.
            </p>
          </div>
          
          {/* Categories Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              {categories.map((category, index) => (
                <li key={index}>
                  <Link to={`/category/${encodeURIComponent(category)}`} className="text-gray-400 hover:text-white">
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-gray-400 hover:text-white">
                  All Categories
                </Link>
              </li>
              <li>
                <Link to="/deals" className="text-gray-400 hover:text-white">
                  Deals
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:support@pricecompare.com" className="text-gray-400 hover:text-white">
                  support@pricecompare.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="text-gray-400 hover:text-white">
                  +1 (234) 567-890
                </a>
              </li>
              <li>
                <span className="text-gray-400">1234 Market St, Suite 100</span>
              </li>
              <li>
                <span className="text-gray-400">San Francisco, CA 94103</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          &copy; {new Date().getFullYear()} PriceTracker. All rights reserved.
        </div>

        {/* Social Media Links */}
        <div className="mt-4 flex justify-center space-x-6">
          <a href="https://facebook.com" className="text-gray-400 hover:text-white" aria-label="Facebook">
            {/* Facebook Icon (SVG) */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.325v21.351C0 23.4.6 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.312h3.587l-.467 3.622h-3.12V24h6.116C23.4 24 24 23.4 24 22.676V1.325C24 .6 23.4 0 22.675 0z" />
            </svg>
          </a>
          <a href="https://twitter.com" className="text-gray-400 hover:text-white" aria-label="Twitter">
            {/* Twitter Icon (SVG) */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.555-2.005.959-3.127 1.184A4.916 4.916 0 0 0 16.616 3c-2.73 0-4.942 2.21-4.942 4.932 0 .388.044.764.128 1.124C7.691 8.863 4.066 6.13 1.64 3.161a4.822 4.822 0 0 0-.666 2.475c0 1.708.87 3.213 2.19 4.096a4.904 4.904 0 0 1-2.229-.616c-.054 2.385 1.693 4.374 4.158 4.827a4.935 4.935 0 0 1-2.224.084c.63 1.953 2.445 3.377 4.6 3.418A9.867 9.867 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.212c9.058 0 14.009-7.506 14.009-14.009 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z" />
            </svg>
          </a>
          <a href="https://instagram.com" className="text-gray-400 hover:text-white" aria-label="Instagram">
            {/* Instagram Icon (SVG) */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.333-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.062-1.366.333-2.633 1.308-3.608C4.52 2.495 5.787 2.224 7.153 2.163 8.419 2.105 8.799 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.07 5.768.127 4.646.454 3.678 1.422c-.968.968-1.295 2.09-1.352 3.374C2.013 6.332 2 6.741 2 12s.013 5.668.07 6.948c.057 1.284.384 2.406 1.352 3.374.968.968 2.09 1.295 3.374 1.352C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.07c1.284-.057 2.406-.384 3.374-1.352.968-.968 1.295-2.09 1.352-3.374.057-1.28.07-1.689.07-6.948s-.013-5.668-.07-6.948c-.057-1.284-.384-2.406-1.352-3.374-.968-.968-2.09-1.295-3.374-1.352C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.181a3.019 3.019 0 1 1 0-6.038 3.019 3.019 0 0 1 0 6.038zm6.406-11.845a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
            </svg>
          </a>
          <a href="https://linkedin.com" className="text-gray-400 hover:text-white" aria-label="LinkedIn">
            {/* LinkedIn Icon (SVG) */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.064-1.869-3.064-1.869 0-2.155 1.46-2.155 2.966v5.7h-3v-10h2.884v1.367h.041c.402-.761 1.385-1.561 2.849-1.561 3.046 0 3.604 2.006 3.604 4.618v5.589z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;