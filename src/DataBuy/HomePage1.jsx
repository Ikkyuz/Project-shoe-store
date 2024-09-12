import React from 'react';
import Frist from '../assets/Frist.png';
import { NavLink } from 'react-router-dom';

const HomePage1 = () => {
  return (
    <section className='max-w-screen-2xl flex flex-col lg:flex-row items-center justify-center mx-auto relative z-10 min-h-screen'>
      <div className='flex flex-col lg:flex-row gap-10 px-6 lg:px-10 items-center lg:items-start'>
        {/* รูปภาพ */}
        <div className='w-full lg:w-1/2'>
          <img src={Frist} alt="Nike ZoomX Streakfly" className='w-full h-auto max-w-lg mx-auto lg:max-w-none' />
        </div>

        {/* ข้อความ */}
        <div className='text-white w-full lg:w-1/2'>
          <h1 className='text-4xl lg:text-6xl xl:text-7xl font-bold mb-6 lg:mb-10 mt-6 lg:mt-12'>
            สินค้าแนะนำ
          </h1>
          <p className='text-xl lg:text-2xl'>
            <span className='font-bold text-2xl lg:text-3xl'>
              Nike ZoomX Streakfly
            </span>
            <br />
            รองเท้าวิ่งแข่งที่เบาที่สุด เน้นความเร็วที่คุณต้องการ โดยเฉพาะเพื่อพิชิตการแข่งตั้งแต่ 1 ไมล์ไปจนถึง 5K และ 10K
          </p>

          <div className='mt-6 lg:mt-10'>
            <NavLink to="/Product/1" className='text-white text-lg lg:text-2xl items-center justify-center px-6 lg:px-9 py-2 lg:py-3 border-2 border-red-600 hover:bg-red-600 transition-all duration-300 ease-in-out'>
              ดูสินค้า
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage1;
