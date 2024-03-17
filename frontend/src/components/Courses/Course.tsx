import React from 'react'
import { GRAY, LIGHTPURPLE, PURPLESHADOW } from '../../styles/Color'
import Button from '../Partials/Button'
import { FaRegPlayCircle } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const Course = () => {
  return (
    <div className={`relative group text-black flex justify-end min-h-80 overflow-hidden rounded-lg ${PURPLESHADOW} border`}>
      <img src="assets/thumb.png" alt="" className='absolute top-0 left-0 -z-10 w-full object-cover brightness-75 transition-all duration-100 ease-linear group-hover:brightness-100' />
      <div className='w-10/12 bg-gradient-to-r from-[rgba(255,255,255,.7)] via-white to-white  p-4 flex flex-col gap-4'>
        <h5 className='font-semibold text-xl'>Enterprise Web App Accessibility (feat. React)</h5>
        <div className='flex items-center gap-4'>
          <img src="assets/courses/prof.png" alt="prof" className='w-[70px] aspect-square rounded-full' />
          <div>
            <p className='font-semibold text-xl'>Marcy Sutton Todd</p>
            <p className={`text-md text-[${GRAY}]`}>Principle Studios</p>
          </div>
        </div>
        <p className={`w-5/6 text-[${GRAY}] text-sm`}>
          Enhance your team's understanding of testing for accessibility and baking it 
          into your React web apps. Learn about ARIA, focus management, semantic HTML, 
          and testing strategies to create inclusive and user-friendly web interfaces.
        </p>
        <p className={`text-[${GRAY}]`}>5 hours, 5 minutes </p>
        <div className='flex items-center gap-4'>
          <NavLink to="">
            <Button 
              btnTitle='Watch Free Preview'
              icon={<FaRegPlayCircle className='text-xl' />}
              addionalStyle='flex items-center gap-2 px-6 py-3'
            />
          </NavLink>
          <NavLink to="">
            <button 
              className={` text-[${LIGHTPURPLE}] underline underline-offset-4 font-semibold text-lg rounded-full py-3 px-4 hover:text-[#B873FF]`}
            >
              Get Full Access
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Course