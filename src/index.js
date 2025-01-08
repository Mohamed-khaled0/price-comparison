import React from 'react';
import ReactDOM from 'react-dom/client'; // Update this import
import './styles/index.css';
import App from './App';
import { ProductProvider } from './context/ProductContext';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create root
root.render(
  <ProductProvider>
    <App />
  </ProductProvider>
);
