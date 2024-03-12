import React from 'react'
import { FaRegUser } from "react-icons/fa6";

const SingleCourse = () => {
  return (
    <div className='bg-white rounded-2xl py-2 px-3 flex flex-col gap-4 w-5/6 my-4 mx-auto shadow-md'>
      <div>
        <img src="assets/courses/course1.png" alt="" />
      </div>
      <div className='flex flex-col gap-2'>
        <div className='flex items-center gap-2 bg-[#E6D1FF] w-2/6 rounded py-1 px-2 text-sm font-semibold'>
          <span className='w-[10px] aspect-square bg-[#B872FE] flex rounded-full'></span> React Js
        </div>
        <div className='font-bold text-xl'>React Js For Begining</div>
        <div className='flex items-center gap-2 mt-6 text-[#747474] font-semibold text-sm'>
          <FaRegUser className='text-[#D8B7FF]' /> 120 Students
        </div>
      </div>
      <hr />
      <div className='flex items-center gap-3'>
        <img src="assets/courses/prof.png" alt="" className='w-[40px] rounded-full' />
        <p className='text-[#BD74F8]'>Alex Taylor</p>
      </div>
    </div>
  )
}

export default SingleCourse