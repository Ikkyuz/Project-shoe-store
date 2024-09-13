import React, { useState } from 'react';
import Logo from '../assets/Logo.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className='bg-gray-950 flex justify-between items-center p-1 fixed w-full top-0 z-50'>
      <div className='items-center justify-center flex'>
        {/* Button to toggle the menu */}
        <button onClick={toggleMenu} className='text-white lg:hidden'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
        </button>
        <NavLink to="/" className='flex space-x-2'>
          {/* Logo */}
          <img src={Logo} alt="Logo" className='w-16 h-auto' />
          {/* Brand Text */}
          <span className='text-white font-semibold text-lg'>
            SHOP<br />
            SCHEDULE
          </span>
        </NavLink>
      </div>
      {/* Toggleable Menu */}
      <div className='flex justify-end'>
        <div className={`fixed  inset-y-0 left-0 w-64 p-4 z-50 transition-transform transform ${showMenu ? 'translate-x-0 left-0' : '-translate-x-full'} lg:w-auto lg:relative lg:translate-x-0 lg:flex lg:mt-0 lg:space-x-3 ${showMenu ? 'bg-gray-800' : 'md:bg-transparent'}`}>
          <ul className='flex flex-col lg:flex-row lg:space-x-4 items-center'>
            <li>
              <NavLink to="/" className='flex text-white text-lg mr-5 hover:text-red-600'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-house"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" /><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>
                <span className='ml-2'>HOME</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/Product" className='flex text-white text-lg mr-5 hover:text-red-600'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-basket"><path d="m15 11-1 9" /><path d="m19 11-4-7" /><path d="M2 11h20" /><path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4" /><path d="M4.5 15.5h15" /><path d="m5 11 4-7" /><path d="m9 11 1 9" /></svg>
                <span className='ml-2'>PRODUCT</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/Blog" className='flex text-white text-lg mr-5 hover:text-red-600'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-blocks"><rect width="7" height="7" x="14" y="3" rx="1"/><path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3"/></svg>
                <span className='ml-2'>BLOG</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/Contact" className='flex text-white text-lg mr-5 hover:text-red-600'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 2v2" /><path d="M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" /><path d="M8 2v2" /><circle cx="12" cy="11" r="3" /><rect x="3" y="4" width="18" height="18" rx="2" /></svg>
                <span className='ml-2'>CONTACT</span>
              </NavLink>
            </li>
          </ul>
        </div>
        <NavLink to="/Login" className='flex items-center text-white text-lg bg-red-600 px-2 rounded-xl hover:bg-red-800'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-user"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="10" r="3" /><path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" /></svg>
          <span className='ml-2'>LOGIN</span>
        </NavLink>
      </div>
    </nav>
  );
};
export default Navbar;