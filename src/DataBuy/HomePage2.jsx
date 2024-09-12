import React from 'react'
import Second from '../assets/Second.png'
import { NavLink } from 'react-router-dom'

const HomePage2 = () => {
  return (
    <section className='max-w-screen-2xl flex flex-wrap items-center justify-center mx-auto relative z-10 min-h-screen'>
        <div className='flex gap-10 px-10'>
            <div>
                <img src={Second} alt="" className='w-[1600px] h-auto' />
            </div>
            <div className='text-white w-3/4'>
                <h1 className='text-7xl font-bold mb-10 mt-28'>สินค้าแนะนำ</h1>
                <p className='text-2xl'>
                    <span className='font-bold text-3xl mb-10'>Luka 3 "Motorsport"</span> <br />
                    โดดเด่นด้วยดีไซน์แรงบันดาลใจจากมอเตอร์สปอร์ต ใช้วัสดุคุณภาพสูง รองรับเท้าดีเยี่ยม เหมาะทั้งเล่นบาสและใส่ในชีวิตประจำวัน มีความพิเศษจากการผลิตจำนวนจำกัด
                </p>
                <br /><br />
                <NavLink to="/Product/2" className='text-white text-2xl items-center justify-center px-9 py-3 border-2 border-red-600 hover:bg-red-600'>ดูสินค้า</NavLink>
            </div>
        </div>
    </section>
  )
}

export default HomePage2
