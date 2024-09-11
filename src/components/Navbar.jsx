import React from 'react'
import Logo from "../assets/Logo.png"
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='bg-gray-950 flex justify-between items-center p-3 fixed w-full top-0 z-50'>
      <div className='flex space-x-2'>
        {/* Logo */}
        <img src={Logo} alt="Logo" className='w-16 h-16 ml-10'/>
        {/* Brand Text */}
        <span className='text-white font-semibold text-lg p-1'>
          SHOP<br />
          SCHEDULE
        </span>
      </div>

      {/* Linkpage */}
      <ul className='flex space-x-4'>
        <li><NavLink to="/" className='text-white text-xl mr-5 hover:text-red-600'>HOME</NavLink></li>
        <li><NavLink to="/Product" className='text-white text-xl mr-5 hover:text-red-600'>PRODUCT</NavLink></li>
        <li><NavLink to="/Blog" className='text-white text-xl mr-5 hover:text-red-600'>BLOG</NavLink></li>
        <li><NavLink to="/Contact" className='text-white text-xl mr-5 hover:text-red-600'>CONTACT</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar
