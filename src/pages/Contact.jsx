import React from 'react'
import Layout from '../components/Layout'
import FacebookIcon from '../assets/facebook.png';
import InstagramIcon from '../assets/instagram.png';

const Contact = () => {
  return (
    <Layout>
        <div className="bg-whitesmoke min-h-screen p-8 text-gray-800">
            <h1 className="text-4xl font-bold text-deepPurple mb-6">ติดต่อเรา</h1>
            <p className="mb-4">ยินดีต้อนรับสู่หน้า Contact ของเว็บไซต์! เราให้ความสำคัญกับความคิดเห็นและคำถามของคุณ กรุณาใช้ข้อมูลด้านล่างนี้เพื่อติดต่อเรา หรือกรอกแบบฟอร์มติดต่อเพื่อส่งข้อความถึงทีมงานของเราโดยตรง</p>
            
            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-deepPurple mb-2">ที่อยู่และการติดต่อ</h2>
                <p>อีเมล: <a href="" className="text-blue-500">shopschedule@gmail.com</a></p>
                <p>โทรศัพท์: +66 123 4567</p>
                <p>ที่อยู่: 123 ถนนวิภาวดีรังสิต, เขตจตุจักร, กรุงเทพมหานคร 10900</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-deepPurple mb-2">ติดตามเราบนโซเชียลมีเดีย</h2>
              <p>อย่าพลาดการอัปเดตใหม่ๆ จากเรา! ติดตามเราบนโซเชียลมีเดียเพื่อรับข่าวสารและข้อมูลเพิ่มเติม:</p>
              <ul className="list-none space-y-2 mt-3 ml-5">
                <li>
                  <a href="#" className="flex items-center hover:text-blue-500 hover:underline"><img src={FacebookIcon} alt="Facebook" className="w-6 h-6 mr-2" /> Facebook</a>
                </li>
                <li>
                  <a href="#" className="flex items-center hover:text-blue-500 hover:underline"><img src={InstagramIcon} alt="Instagram" className="w-6 h-6 mr-2" /> Instagram</a>
                </li>
              </ul>
            </section>


            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-deepPurple mb-2">ฟอร์มติดต่อ</h2>
                <form className="bg-white p-4 rounded shadow-md">
                    <div className="mb-4">
                        <label className="block text-gray-700">ชื่อ</label>
                        <input type="text" className="w-full border border-gray-300 p-2 rounded" placeholder="กรอกชื่อของคุณ" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">อีเมล</label>
                        <input type="email" className="w-full border border-gray-300 p-2 rounded" placeholder="กรอกอีเมลของคุณ" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">ข้อความ</label>
                        <textarea className="w-full border border-gray-300 p-2 rounded" rows="4" placeholder="กรอกข้อความของคุณ"></textarea>
                    </div>
                    <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-900">ส่งข้อความ</button>
                </form>
            </section>
        </div>
    </Layout>
  )
}

export default Contact
