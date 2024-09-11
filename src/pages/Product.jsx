import React from 'react';
import Layout from '../components/Layout';
import { NavLink } from 'react-router-dom';

const Product = () => {
  const products = [
    {
      id: 1,
      name: 'NIKE ZOOMX STREAKFLY',
      price: 'THB 3,155',
      score: '90%',
      image: '/image/Product-1.jpg',
    },
    {
      id: 2,
      name: '3 PF "MOTORSPORT',
      price: 'THB 5,200',
      score: '80%',
      image: '/image/Product-2.jpg'
    },
    {
      id: 3,
      name: '3 PF "BLURRED VISION"',
      price: 'THB 5,200',
      score: '80%',
      image: '/image/Product-3.jpg'
    },
    {
      id: 4,
      name: 'KD TREY 5 X EP',
      price: 'THB 2,039',
      score: '90%',
      image: '/image/Product-4.jpg'
    },
    {
      id: 5,
      name: 'WAVE VOLTAGE UNISEX',
      price: 'THB 2,870',
      score: '100%',
      image: '/image/Product-5.jpg'
    },
    {
      id: 6,
      name: 'MOMENTUM 3 MID UNISEX',
      price: 'THB 2,700',
      score: '85%',
      image: '/image/Product-6.jpg'
    },
    {
      id: 7,
      name: 'LIGHTNING Z8 UNISEX',
      price: 'THB 4,590',
      score: '90%',
      image: '/image/Product-7.jpg'
    },
    {
      id: 8,
      name: 'CYCLONE SPEED 4 UNISEX',
      price: 'THB 2,430',
      score: '82%',
      image: '/image/Product-8.jpg'
    },
    {
      id: 9,
      name: 'THUNDER BLADE Z UNISEX',
      price: 'THB 1,700',
      score: '78%',
      image: '/image/Product-9.jpg'
    },
  ];

  const ProductCard = ({ product }) => {
    return (
      <div className="px-10 py-5">
        <NavLink to={`/product/${product.id}`} className="block">
          <img src={product.image} alt={product.name} className="w-full h-auto object-cover" />
          <div className="pt-3">
          <div className='flex items-center justify-between text-lg'>
              <h3>{product.name}</h3>
              <h3 className="font-semibold">{product.price}</h3>
            </div>
            <hr className="border-t border-gray-500" />
            <div className="flex justify-between items-center mt-1 text-sm">
              <span>score</span>
              <span>{product.score}</span>
            </div>
          </div>
        </NavLink>
      </div>
    );
  };

  return (
    <Layout>
      <div className="container items-center justify-center mx-auto py-8 mt-24">
        <h1 className='text-4xl font-bold text-center mb-3'>PRODUCT LIST</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Product;
