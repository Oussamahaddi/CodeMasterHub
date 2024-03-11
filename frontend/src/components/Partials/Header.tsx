import React from 'react'
import { Link } from 'react-router-dom'
import PathConstant from '../../routes/PathConstant'

const Header = () => {
  return (
    <header className='w-full flex justify-center py-4 sticky top-0'>
      <nav className="flex justify-between w-11/12 items-center">
        <div>
          <Link to={PathConstant.HOME}>
            <img src="/assets/logo.png" alt="" />
          </Link>
        </div>
        <div className='h-full flex items-center'>
          <ul className='flex items-center gap-8 h-full font-semibold'>
            <li className='hover:border-b-4 hover:border-[#FC72FF]  transition-all duration-200 h-full flex items-center'>
              <Link to="">Home</Link>
            </li>
            <li className='hover:border-b-4 hover:border-[#FC72FF]  transition-all duration-200 h-full flex items-center'>
              <Link to="">Courses</Link>
            </li>
            <li className='hover:border-b-4 hover:border-[#FC72FF]  transition-all duration-200 h-full flex items-center'>
              <Link to="">Pricing</Link>
            </li>
            <li className='hover:border-b-4 hover:border-[#FC72FF]  transition-all duration-200 h-full flex items-center'>
              <Link to="">Contact</Link>
            </li>
          </ul>
        </div>
        <div className='flex gap-4'>
          <button className='rounded-full hover:shadow-[0px_2px_5px_0px_#FC72FF] shadow-[0px_2px_5px_0px_rgba(0,0,0,.2)] border-[#D173FF] border-2 from-[#FC72FF] to-[#B873FF] px-8 py-1 text-[#D173FF] font-semibold hover:transition-all hover:duration-200 hover:bg-gradient-to-t hover:from-[#FC72FF] hover:to-[#B873FF] hover:text-white hover:border-[#FC72FF]'>
            Login
          </button>
          <button className='rounded-full hover:shadow-[0px_2px_5px_0px_#FC72FF] shadow-[0px_2px_5px_0px_rgba(0,0,0,.2)] bg-gradient-to-t from-[#FC72FF] to-[#B873FF] text-white px-8 py-1 font-semibold hover:transition-all hover:duration-200 hover:bg-gradient-to-r hover:from-[#B873FF] hover:to-[#FC72FF] hover:text-white hover:border-[#FC72FF]'>
            Sign Up
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header