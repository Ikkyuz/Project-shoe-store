import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import './style.css';
import HomePage1 from '../DataBuy/HomePage1';
import HomePage2 from '../DataBuy/HomePage2';

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // เก็บสถานะของสไลด์ปัจจุบัน
  const slides = [<HomePage1 />, <HomePage2 />]; // รายการของสไลด์

  // ฟังก์ชันเพื่อสไลด์ไปยังหน้า next
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  // ฟังก์ชันเพื่อสไลด์ไปยังหน้า previous
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  // สไลด์อัตโนมัติทุกๆ 5 วินาที
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000); // สไลด์ทุกๆ 5 วินาที
    return () => clearInterval(slideInterval); // ล้าง interval เมื่อ component ถูกทำลาย
  }, []);

  return (
    <Layout>
      <section className='hero full-screen mt-10'>
        {/* Overlay */}
        <div className='absolute inset-0 bg-black opacity-60'></div>
        {/* Content */}
        <div id="default-carousel" className="relative w-full h-full overflow-hidden" data-carousel="slide">
          <div className="relative h-72 sm:h-auto lg:h-[85vh] xl:h-screen flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {/* ใช้ flex และ translateX เพื่อสไลด์ */}
            <div className="w-full flex-shrink-0">
              {slides[0]}
            </div>
            <div className="w-full flex-shrink-0">
              {slides[1]}
            </div>
          </div>

          {/* ปุ่ม Previous */}
          <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-2 lg:px-4 cursor-pointer group focus:outline-none" onClick={prevSlide}>
            <span className="inline-flex items-center justify-center w-4 h-10 lg:w-10 lg:h-16 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
              <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>

          {/* ปุ่ม Next */}
          <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-2 lg:px-4 cursor-pointer group focus:outline-none" onClick={nextSlide}>
            <span className="inline-flex items-center justify-center w-4 h-10 lg:w-10 lg:h-16 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
              <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
