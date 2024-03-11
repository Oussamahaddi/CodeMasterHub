import React from 'react'
import { FaRegPlayCircle } from "react-icons/fa";

const Carousel = () => {
  return (
    <div className='w-11/12 flex justify-around items-center gap-2'>
      <div className='flex flex-col gap-6 w-full'>
        <h1 className='font-bold text-6xl'>Learn New Skill<br/> Everyday, Anytime, <br /> and Anywhere.</h1>
        <p className='text-gray-600 w-4/6'>
          1000+ Courses In total, the platforms below offer over 1000 free certificate courses for learning software development.
          Some of the free certificates earned by the Class ... 
        </p>
        <div className='flex gap-8 items-center'>
          <button className='rounded-full hover:shadow-[0px_2px_5px_0px_#FC72FF] shadow-[0px_2px_5px_0px_rgba(0,0,0,.3)] bg-gradient-to-t from-[#FC72FF] to-[#B873FF] text-white px-8 py-1 font-semibold hover:transition-all hover:duration-200 hover:bg-gradient-to-r hover:from-[#B873FF] hover:to-[#FC72FF] hover:text-white hover:border-[#FC72FF]'>
            Join Now
          </button>
          <button className='underline text-[#B873FF] font-semibold text-lg flex items-center gap-2 [text-shadow:_2px_2px_2px_rgb(0_0_0_/_20%)] hover:text-[#FC72FF]'>
            <FaRegPlayCircle className='' />
            How it work ?
          </button>
        </div>
        <div className='flex items-center gap-6'>
          <div className=''>
            <h3 className='text-[#00D8FF] font-bold text-2xl'>1000+</h3>
            <p className='w-4/6 font-semibold '>Courses to choose from</p>
          </div>
          <div className=''>
            <h3 className='text-[#B873FF] font-bold text-2xl'>5000+</h3>
            <p className='w-4/6 font-semibold '>Students trained </p>
          </div>
          <div className=''>
            <h3 className='text-[#F0C932] font-bold text-2xl'>2000+</h3>
            <p className='w-4/6 font-semibold '>Professional trainer</p>
          </div>
        </div>
      </div>
      <div className='w-full'>
        <img src="assets/carosel img.png" alt="" />
      </div>
    </div>
  )
}

export default Carousel