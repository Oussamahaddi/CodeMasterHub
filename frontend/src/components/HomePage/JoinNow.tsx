import React from 'react'
import Button from '../Partials/Button'

const JoinNow = () => {
  return (
    <div className="relative flex justify-center items-center text-center h-screen">
      <img src="assets/joinBg.png" alt="" className='absolute top-0 left-0 -z-10 blur-[2px] brightness-50 w-full h-full object-cover'/>
      <div className='text-white flex flex-col gap-12 items-center'>
        <p className='text-6xl mb-4'>Join Now and Learn Straight from <br /> the Experts Who Shape the <br /> Modern Web</p>
        <button className='w-2/5 bg-gradient-to-b from-[#B873FF] to-[#FC72FF] py-4 rounded-full font-semibold text-xl'>
          Join Now
        </button>
      </div>
    </div>
  )
}

export default JoinNow