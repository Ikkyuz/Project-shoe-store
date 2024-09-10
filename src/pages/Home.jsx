import React from 'react'
import Frist from '../assets/Frist.png'
import Layout from '../components/Layout'
import './style.css'

const Home = () => {
  const homes = [
    {
      id: 1 ,
      name: 'Nike ZoomX Streakfly',
      data: 'รองเท้าวิ่งแข่งที่เบาที่สุดเน้นความเร็วที่คุณต้องการ โดยเฉพาะเพื่อพิชิตการแข่งตั้งแต่ 1 ไมล์ไปจนถึง 5K และ 10K',
      image: ''
    },
    {
      id: 2 ,
      name: 'Nike Luka 3 PF "MOTORSPORT"',
      data: 'โดดเด่นด้วยดีไซน์แรงบันดาลใจจากมอเตอร์สปอร์ต ใช้วัสดุคุณภาพสูง รองรับเท้าดีเยี่ยม เหมาะทั้งเล่นบาสและใส่ในชีวิตประจำวัน มีความพิเศษจากการผลิตจำนวนจำกัด',
      image: ''
    }
  ];

  const HomePage = ({ home }) =>{
    return(
      <div className='flex gap-10 px-10'>
        <div>
          <img src={home.image} alt="" className='w-[1600px] h-auto' />
        </div>
        <div className='text-white w-3/4'>
          <h1 className='text-7xl font-bold mb-10'>สินค้าแนะนำ</h1>
          <p className='text-2xl'>
            <span className='font-bold text-3xl mb-10'>{home.name}</span> <br />
            {home.data}
          </p>
          <br /><br />
          <a href="" className='text-white text-2xl items-center justify-center px-7 py-3 border-2 border-red-600 hover:bg-red-600'>ดูรายการสินค้า</a>
        </div>
      </div>
    )
  };
  return (
    <Layout>
      <section className='hero full-screen mt-10'>
        {/* Overlay */}
        <div className='absolute inset-0 bg-black opacity-60'></div>
        {/* Content */}
        <section className='max-w-screen-xl flex flex-wrap items-center justify-center mx-auto relative z-10 min-h-screen'>
          {homes.map((home, index) => (
            <HomePage key={index} home={home} />
          ))}
        </section>
      </section>
    </Layout>
  )
}

export default Home
