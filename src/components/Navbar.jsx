import React from 'react'
import Logo from "../assets/Logo.png"

const Navbar = () => {
  return (
    <nav className='bg-gray-950 p-3  flex justify-between items-center fixed w-full top-0 z-50'>
      <div className='flex items-center ml-10'>
        {/* Logo */}
        <img src={Logo} alt="Logo" className='w-16 h-16 ml-10'/>
        {/* Brand Text */}
        <span className='text-white font-semibold text-lg p-1'>
          SHOP<br />
          SCHEDULE
        </span>
      </div>

      {/* Linkpage */}
      <ul className='flex space-x-4 mr-20'>
        <li><a href="" className='text-white text-xl hover:text-red-600'>HOME</a></li>
        <li><a href="" className='text-white text-xl hover:text-red-600'>PRODUCT</a></li>
        <li><a href="" className='text-white text-xl hover:text-red-600'>CONTACT</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
