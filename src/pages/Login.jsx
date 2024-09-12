import React from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <>
        <section className='bg-gray-100 flex items-center justify-center h-screen p-4'>
            <div className='bg-white border rounded-2xl shadow-2xl p-8 w-full max-w-lg'>
                <div className="flex justify-end">
                    <NavLink to="/" className='hover:text-red-600'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x">
                        <path d="M18 6 6 18"/>
                        <path d="m6 6 12 12"/>
                        </svg>
                    </NavLink>
                </div>

                <h1 className='text-xl text-center mb-2'>Login Up</h1>
                <form>
                    <div className='mb-2'>
                        <label className='block text-gray-700'>E-mail</label>
                        <input type="text" className="w-full border border-gray-300 p-2 rounded" placeholder="กรอกอีเมลของคุณ" />
                    </div>
                    <div className='mb-2'>
                        <label className='block text-gray-700'>Password</label>
                        <input type="text" className="w-full border border-gray-300 p-2 rounded" placeholder="กรอกรหัสผ่านของคุณ" />
                    </div>
                    <div className='mb-2'>
                        <a href="#" className='hover:text-red-600 hover:underline'>ลืมรหัสผ่าน?</a>
                    </div>
                    <div className='flex items-center justify-center bg-red-600 text-white rounded-lg py-2 w-full mb-2 hover:bg-red-800'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-user"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="10" r="3"/><path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"/></svg><span className='ml-2'>Login</span>
                    </div>
                    
                    <div className='flex items-center justify-center border border-red-600 rounded-lg py-2 w-full mb-2 hover:bg-red-600 hover:text-white'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg><span className='ml-2'>Facebook</span>
                    </div>
                    <div className='flex items-center justify-center border border-red-600 rounded-lg py-2 w-full mb-2 hover:bg-red-600 hover:text-white'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-at-sign"><circle cx="12" cy="12" r="4"/><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"/></svg><span className='ml-2'>G-mail</span>
                    </div>
                    <div className='text-center mb-2'>
                        <a href="#" className='hover:text-red-600 hover:underline'>Sign Up?</a>
                    </div>
                </form>
            </div>
        </section>
    </>
  )
}

export default Login
