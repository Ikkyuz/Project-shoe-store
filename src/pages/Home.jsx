import React from 'react'
import Frist from '../assets/Frist.png'
import Layout from '../components/Layout'
import './style.css'

const Home = () => {
  return (
    <Layout>
      <section className='hero full-screen'>
        <section className='max-w-screen-xl mx-auto text-left pt-20'>
          <div className='flex mr-auto gap-6'>
            <div>
              <img src={Frist} alt="" className='w-96 mr-48' />
            </div>
            <div className='text-white'>
              <h1 className='text-6xl font-bold mb-6 mr-10'>สินค้าแนะนำ</h1>
              <p className='text-xl'>Nike ZoomX Streakfly <br />
                รองเท้าวิ่งแข่งที่เบาที่สุดเน้นความเร็วที่คุณต้องการ<br />
              โดยเฉพาะเพื่อพิชิตการแข่งตั้งแต่ 1 ไมล์ไปจนถึง 5K และ 10K </p>
            </div>
          </div>
        </section>
      </section>
    </Layout>
  )
}

export default Home
