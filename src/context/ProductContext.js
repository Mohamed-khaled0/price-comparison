// src/context/ProductContext.js
import React, { createContext, useState } from 'react';
import productsData from '../data/products';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products] = useState(productsData);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};