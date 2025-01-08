// src/pages/ProductDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = ({ products }) => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === productId);

  if (!product) return <div>Product not found.</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="flex">
        <img src={product.image} alt={product.name} className="w-64 h-64 object-cover mr-4" />
        <div>
          <h1 className="text-2xl font-semibold">{product.name}</h1>
          <p className="text-lg text-gray-600">{product.description}</p>
          <p className="text-blue-600 font-bold mt-4">From ${product.lowestPrice}</p>
          <div className="mt-4">
            {product.offers.map((offer) => (
              <div key={offer.retailer} className="my-2">
                <p className="font-semibold">{offer.retailer}</p>
                <a href={offer.url} target="_blank" className="text-blue-500">
                  Buy here
                </a>
                <p className="text-gray-600">Price: ${offer.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
