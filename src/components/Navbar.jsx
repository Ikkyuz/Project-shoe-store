import React from 'react'
import Logo from "../assets/Logo.png"

const Navbar = () => {
  return (
    <nav className='bg-gray-950 p-3  flex justify-between items-center fixed w-full top-0 z-50'>
      <div className='flex space-x-2 ml-10'>
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
        <li><a href="" className='text-white text-xl mr-5 hover:text-red-600'>HOME</a></li>
        <li><a href="" className='text-white text-xl mr-5 hover:text-red-600'>PRODUCT</a></li>
        <li><a href="" className='text-white text-xl mr-5 hover:text-red-600'>BLOG</a></li>
        <li><a href="" className='text-white text-xl mr-5 hover:text-red-600'>CONTACT</a></li>
        <li><a href="" className='text-white hover:text-red-600'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg></a></li>
        <li><a href="" className='text-white hover:text-red-600'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg></a></li>
      </ul>
    </nav>
  )
}

export default Navbar
