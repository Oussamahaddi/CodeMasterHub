import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import PathConstant from '../../routes/PathConstant'
import { useAppDispatch } from '../../hook'
import { login, register } from '../../features/Courses/authSlice'

const routes = [
  {
    name : "Home",
    path : "/"
  },
  {
    name : "Courses",
    path : "/courses"
  },
  {
    name : "Pricing",
    path : "/pricing"
  },
  {
    name : "Dashboard",
    path : "/dashboard"
  },
]

const Header = () => {

  const location = useLocation();
  const dispatch = useAppDispatch();

  return (
    <header className={!(location.pathname === PathConstant.AUTH) ? 'w-full flex justify-center  sticky top-0 z-10 bg-white' : 'w-full flex justify-center p-10 text-white'}>
      <nav className="flex justify-between w-11/12 items-center">
        <div>
          <NavLink  to={PathConstant.HOME}>
            <img src="/assets/logo.png" alt="" />
          </NavLink>
        </div>
        <div className='h-full flex items-center'>
          <ul className='flex items-center gap-8 h-full font-semibold'>
            {
              routes.map(({name, path}, index) => (
                <NavLink key={index} to={path} className={({isActive}) => (isActive ? `border-b-4 border-[#FC72FF] transition-all duration-200 h-full flex items-center` : 'hover:border-b-4 hover:border-[#FC72FF] transition-all duration-200 h-full flex items-center')}>
                  <li>{name}</li>
                </NavLink>
              ))
            }
          </ul>
        </div>
        {
          !(location.pathname === PathConstant.AUTH) &&
          <div className='flex gap-4'>
            <NavLink to={PathConstant.AUTH} onClick={() => dispatch(login())} state={{auth : false}} className='rounded-full hover:shadow-[0px_2px_5px_0px_#FC72FF] shadow-[0px_2px_5px_0px_rgba(0,0,0,.2)] border-[#D173FF] border-2 from-[#FC72FF] to-[#B873FF] px-8 py-1 text-[#D173FF] font-semibold hover:transition-all hover:duration-200 hover:bg-gradient-to-t hover:from-[#FC72FF] hover:to-[#B873FF] hover:text-white hover:border-[#FC72FF]'>
              Login
            </NavLink>
            <NavLink to={PathConstant.AUTH} onClick={() => dispatch(register())} state={{auth : true}} className='rounded-full hover:shadow-[0px_2px_5px_0px_#FC72FF] shadow-[0px_2px_5px_0px_rgba(0,0,0,.2)] bg-gradient-to-t from-[#FC72FF] to-[#B873FF] text-white px-8 py-1 font-semibold hover:transition-all hover:duration-200 hover:bg-gradient-to-r hover:from-[#B873FF] hover:to-[#FC72FF] hover:text-white hover:border-[#FC72FF]'>
              Sign Up
            </NavLink>
          </div>
        }
      </nav>
    </header>
  )
}

export default Header