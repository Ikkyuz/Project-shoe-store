import React from 'react';
import Layout from '../components/Layout';
import { NavLink } from 'react-router-dom'; // นำเข้า NavLink

const products = [
  {
    id: 5, // กำหนด ID เป็น 5
    name: 'WAVE VOLTAGE UNISEX',
    description: 'คุณสมบัติ เทคโนโลยี Mizuno Wave ช่วยลดแรงกระแทกและความคล่องตัวแบบไดนามิก และการดูดซับแรงกระแทกอย่างหนักสำหรับการเคลื่อนไหวด้านข้างอย่างรวดเร็วที่เข้มข้นที่สุด ปฏิกิริยาตอบสนองอย่างรวดเร็วมีความสำคัญ และทำได้ง่ายด้วยการรองรับแรงกระแทกน้ำหนักเบา',
    image: '/image/Product-5.jpg',
  },
  {
    id: 7, // กำหนด ID เป็น 7
    name: 'LIGHTNING Z8 UNISEX',
    description: 'คุณสมบัติ ให้การรองรับแรงกระแทกที่นุ่มนวล และการส่งแรงกลับสูงที่คุณสัมผัสได้วัสดุกันกระแทกที่มีน้ำหนักเบา และต้องการกระโดดได้เร็วและสูงขึ้น แนะนำเป็นพิเศษสำหรับวิงสไปเกอร์ สำหรับผู้เล่นที่ต้องการฟังก์ชันเฉพาะสำหรับวอลเลย์บอล',
    image: '/image/Product-7.jpg',
  },
  {
    id: 4, // กำหนด ID เป็น 4
    name: 'KD TREY 5 X EP',
    description: 'คุณสิมบัติ มาพร้อมส่วนบนน้ำหนักเบาและการรองรับที่นุ่มพิเศษช่วยให้คุณลอยตัวเหมือนกับ KD ในขณะรอจังหวะที่เหมาะที่สุดเพื่อพุ่งตัวสู่ห่วงบาสเก็ตบอล',
    image: '/image/Product-4.jpg',
  },
];

const ProductCard = ({ product }) => {
  return (
    <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden max-w-3xl mx-auto mb-6">
      {/* รูปภาพสินค้า */}
      <div className="md:w-1/3">
        <img src={product.image} alt={product.name} className="w-full h-auto md:h-full" />
      </div>

      {/* ข้อมูลสินค้า */}
      <div className="p-6 md:w-2/3">
        <h2 className="text-xl font-bold">{product.name}</h2>
        <p className="text-gray-600 mt-2">{product.description}</p>

        {/* ปุ่ม View Products ที่เชื่อมโยงไปยัง Product Detail Page */}
        <NavLink to={`/product/${product.id}`}>
          <button className="mt-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
            View products
          </button>
        </NavLink>
      </div>
    </div>
  );
};

const ProductsPage = () => {
  return (
    <Layout>
      {/* เพิ่มระยะห่างด้านบน */}
      <div className="container mx-auto p-4 mt-24" >
        <h1 className="text-3xl font-bold text-center mb-5">Popular Sports Shoes</h1>
        <div className="grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ProductsPage;
