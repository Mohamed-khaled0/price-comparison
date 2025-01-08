// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200  mt-auto">
      <div className="container mx-auto p-4 text-center">
        &copy; {new Date().getFullYear()} PriceCompare. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
