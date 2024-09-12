import React from 'react'
import Frist from '../assets/Frist.png'
import { NavLink } from 'react-router-dom'

const HomePage1 = () => {
  return (
    <section className='max-w-screen-2xl flex flex-wrap items-center justify-center mx-auto relative z-10 min-h-screen'>
        <div className='fixed gap-10 px-10 lg:flex'>
            <div>
                <img src={Frist} alt="" className='w-[1600px] h-auto' />
            </div>
            <div className='text-white w-3/4'>
                <h1 className='text-7xl font-bold mb-10 mt-12'>สินค้าแนะนำ</h1>
                <p className='text-2xl'>
                    <span className='font-bold text-3xl mb-10'>Nike ZoomX Streakfly</span> <br />
                    รองเท้าวิ่งแข่งที่เบาที่สุดเน้นความเร็วที่คุณต้องการ โดยเฉพาะเพื่อพิชิตการแข่งตั้งแต่ 1 ไมล์ไปจนถึง 5K และ 10K
                </p>
                <br /><br />
                <NavLink to="/Product/1" className='text-white text-2xl items-center justify-center px-9 py-3 border-2 border-red-600 hover:bg-red-600'>ดูสินค้า</NavLink>
            </div>
        </div>
    </section>
  )
}

export default HomePage1
