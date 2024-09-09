import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const products = [
  ];

  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
        <div className="p-4">
          <h1 className="text-2xl font-semibold">{product.name}</h1>
          <p className="mt-2 text-gray-600">{product.price}</p>
          <p className="mt-2 text-gray-600">{product.score}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
