// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductDetails from './pages/ProductDetails';
import Categories from './pages/Categories';
import Deals from './pages/Deals';
import CategoryPage from './pages/CategoryPage';
import SearchResults from './pages/SearchResults';
import Home from './pages/Home';  // Import Home here

import products from './data/products'; // Assuming you have products data

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home products={products} />} />  {/* Pass products prop */}
          <Route path="/search" element={<SearchResults products={products} />} />
          <Route path="/product/:productId" element={<ProductDetails products={products} />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/category/:category" element={<CategoryPage products={products} />} />
          <Route path="/deals" element={<Deals products={products} />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
