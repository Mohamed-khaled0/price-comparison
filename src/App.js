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
import Home from './pages/Home';

import products from './data/products';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home products={products} />} />
            <Route path="/search" element={<SearchResults products={products} />} />
            <Route path="/product/:productId" element={<ProductDetails products={products} />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/category/:category" element={<CategoryPage products={products} />} />
            <Route path="/deals" element={<Deals products={products} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
