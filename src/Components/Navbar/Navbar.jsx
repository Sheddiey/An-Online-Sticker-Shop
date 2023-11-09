import React from 'react'
import logo from '../Assets/logo.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <div className='flex shadow justify-around'>
      <div className='flex items-center gap-3'>
        <img className='h-14' src={logo} alt='logo' />
        <p className='text-slate-950 text-2xl font-semibold'>Oningoi</p>
      </div>
      <ul className='flex items-center gap-5 text-neutral-600 font-medium text-xl'>
        <li className='flex flex-col items-center content-center gap-2 cursor-pointer'>Shop</li>
        <li className='flex flex-col items-center content-center gap-2 cursor-pointer'>Phone</li>
        <li className='flex flex-col items-center content-center gap-2 cursor-pointer'>Laptop</li>
        <li className='flex flex-col items-center content-center gap-2 cursor-pointer'>Tablet</li>
      </ul>
      <div className='flex items-center gap-4'>
        <button className='border border-solid w-[100px] h-[30px] font-semibold text-xl text-center rounded-full bg-white border-slate-500 active:bg-slate-200'>Login</button>
        <FontAwesomeIcon icon={faCartShopping} />
        <div className='w-[20px] h-[20px] flex bg-red-600 text-white rounded-xl text-sm mt-[-15px] ml-[-20px]'>0</div>
      </div>
    </div>
  )
}

export default Navbar
