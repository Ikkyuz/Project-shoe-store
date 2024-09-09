import React from 'react'
import Layout from '../components/Layout'
import { NavLink } from "react-router-dom";

const Product = () => {
  const products = [
    {
      id: 1 ,
      name: 'NIKE ZOOMX STREAKFLY',
      price: 'THB 3,155',
      score: '90%',
      image: '/image/Product-1.jpg',
    },
    {
      id: 2 ,
      name: '3 PF "MOTORSPORT"',
      price: 'THB 5,200',
      score: '80%',
      image: '/image/Product-2.jpg'
    },
    {
      id: 3 ,
      name: '3 PF "BLURRED VISION"',
      price: 'THB 5,200',
      score: '80%',
      image: '/image/Product-3.jpg'
    },
    {
      id: 4 ,
      name: 'KD TREY 5 X EP',
      price: 'THB 2,039',
      score: '90%',
      image: '/image/Product-4.jpg'
    },
    {
      id: 5 ,
      name: 'WAVE VOLTAGE UNISEX',
      price: 'THB 2,870',
      score: '100%',
      image: '/image/Product-5.jpg'
    },
    {
      id: 6 ,
      name: 'MOMENTUM 3 MID UNISEX',
      price: 'THB 2,700',
      score: '85%',
      image: '/image/Product-6.jpg'
    },
    {
      id: 7 ,
      name: 'LIGHTNING Z8 UNISEX',
      price: 'THB 4,590',
      score: '90%',
      image: '/image/Product-7.jpg'
    },
    {
      id: 8 ,
      name: 'CYCLONE SPEED 4 UNISEX',
      price: 'THB 2,430',
      score: '82%',
      image: '/image/Product-8.jpg'
    },
    {
      id: 9 ,
      name: 'THUNDER BLADE Z UNISEX',
      price: 'THB 1,700',
      score: '78%',
      image: '/image/Product-9.jpg'
    },
  ];
  const ProductCard = ({ product }) => {
    return (
      <div className="border rounded-lg shadow-lg overflow-hidden">
      <NavLink to={`/Product/${product.id}`} activeClassName="active">
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      </NavLink>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <div className="flex justify-between items-center mt-2">
          <span className="text-sm text-gray-500">{product.price}</span>
          <span className="text-sm font-semibold">{product.score}</span>
        </div>
      </div>
    </div>
    );
  };  
  return (
    <>
      <Layout>
      <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
      </Layout>
    </>
  )
}

export default Product
