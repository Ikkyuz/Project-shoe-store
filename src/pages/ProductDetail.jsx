import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState(null);

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

  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <div>ไม่พบสินค้า</div>;
  }

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="flex justify-center items-center py-12 p-4">
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-7xl">
        <div className="relative p-6 flex justify-center items-center w-full md:w-1/2">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="p-6 w-full md:w-1/2">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-3xl font-bold">{product.name}</h2>
          </div>
          <p className="text-gray-500 text-lg">รายละเอียดเพิ่มเติมของสินค้า เช่น รองเท้าสำหรับผู้ชาย</p>
          <hr className='mt-4'/>

          <div className="mt-4">
            <h3 className="text-lg font-semibold">รายละเอียดสินค้า</h3>
            <p className="text-gray-500 text-lg">รายละเอียดของสินค้าทำจากอะไรดีอย่างไร</p>
          </div>
          <hr className='mt-4'/>

          <div className="mt-4">
            <h4 className="text-lg font-semibold">ขนาด (SIZE)</h4>
            <div className="flex space-x-2 mt-2">
              {["7", "8", "9", "10", "11"].map((size) => (
                <button key={size} onClick={() => handleSizeClick(size)} className={`py-2 px-4 border rounded-lg ${selectedSize === size ? "bg-blue-600 text-white" : ""}`}>{size}</button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between mt-6">
            <button
              className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700"
              disabled={!selectedSize}>ซื้อ</button>
            <span className="text-2xl font-bold mt-5">{product.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
