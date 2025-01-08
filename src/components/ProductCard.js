// src/components/ProductCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  // Calculate the discount percentage
  const getDiscountPercentage = (price1, price2) => {
    return ((price1 - price2) / price1) * 100;
  };

  const amazonPrice = product.offers.find(offer => offer.retailer === 'Amazon');
  const noonPrice = product.offers.find(offer => offer.retailer === 'Noon');

  const discount = amazonPrice && noonPrice ? getDiscountPercentage(noonPrice.price, amazonPrice.price) : 0;

  return (
    <div className="border rounded-lg shadow hover:shadow-lg transition p-4">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover mb-4"
        />
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-blue-600 font-bold mt-2">From ${product.lowestPrice}</p>
        {discount !== 0 && (
          <p
            className={`font-semibold ${discount > 0 ? 'text-green-500' : 'text-red-500'}`}
          >
            {discount < 0 ? `${discount.toFixed(2)}% OFF` : `+${Math.abs(discount.toFixed(2))}%`} Save
          </p>
        )}
      </Link>
    </div>
  );
};

export default ProductCard;
