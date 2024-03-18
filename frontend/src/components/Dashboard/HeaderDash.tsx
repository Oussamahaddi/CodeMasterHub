import React from 'react'

const HeaderDash = () => {
  return (
    <div className='flex justify-between items-center w-full text-white mb-10'>
      <div>
        <span>Page / Dashboard</span>
        <p className='font-semibold'>Dashboard</p>
      </div>
      <div className='flex gap-2 items-center'>
        <div className=''>
          <img src='/assets/courses/prof.png' alt="" className='w-[50px] aspect-square rounded-full'/>
        </div>
        <div>
          <span className='text-lg font-semibold'>user name</span>
          <p className='text-[#eee]'>oussama@gmail.com</p>
        </div>
      </div>
    </div>
  )
}

export default HeaderDash