import React from 'react'
import Logo from "../assets/Logo.png"
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='bg-gray-950 flex justify-between items-center p-2 fixed w-full top-0 z-50'>
      <div className='items-center justify-center flex'>
        <button className='text-white lg:hidden'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-align-justify"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
        </button>
        <NavLink to="/" className='flex space-x-2 '>
          {/* Logo */}
          <img src={Logo} alt="Logo" className='w-16 h-auto'/>
          {/* Brand Text */}
          <span className='text-white font-semibold text-lg'>
            SHOP<br />
            SCHEDULE
          </span>
        </NavLink>
      </div>
        
      {/* Linkpage */}
      <div className="hidden fixed inset-y-0 left-0 w-64 mt-4 pt-4 p-4 z-50 lg:w-auto lg:relative lg:space-x-3 lg:flex lg:mt-0">
        <ul className='flex space-x-4'>
          <li><NavLink to="/" className='flex text-white text-lg mr-5 hover:text-red-600'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-house"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
          <span className='ml-2'>HOME</span></NavLink></li>
          <li><NavLink to="/Product" className='flex text-white text-lg mr-5 hover:text-red-600'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-basket"><path d="m15 11-1 9"/><path d="m19 11-4-7"/><path d="M2 11h20"/><path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"/><path d="M4.5 15.5h15"/><path d="m5 11 4-7"/><path d="m9 11 1 9"/></svg><span className='ml-2'>PRODUCT</span></NavLink></li>
          <li><NavLink to="/Blog" className='flex text-white text-lg mr-5 hover:text-red-600'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-basket"><path d="m15 11-1 9"/><path d="m19 11-4-7"/><path d="M2 11h20"/><path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"/><path d="M4.5 15.5h15"/><path d="m5 11 4-7"/><path d="m9 11 1 9"/></svg><span className='ml-2'>BLOG</span></NavLink></li>
          <li><NavLink to="/Contact" className='flex text-white text-lg mr-5 hover:text-red-600'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-contact"><path d="M16 2v2"/><path d="M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"/><path d="M8 2v2"/><circle cx="12" cy="11" r="3"/><rect x="3" y="4" width="18" height="18" rx="2"/></svg><span className='ml-2'>CONTACT</span></NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
