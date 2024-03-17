import React from 'react'
import SingleCourse from './SingleCourse'

const PopularCourse = () => {
  return (
    <div className='bg-gradient-to-br from-[#B671FF] to-[#E985C1] py-4'>
      <div className='w-11/12 mx-auto'>
        <div className='text-center w-3/6 mx-auto my-6 flex flex-col gap-4'>
          <h3 className='text-white text-xl font-bold'>Our Popular Courses</h3>
          <p className='text-white'>
            Le lorem ipsum est, en imprimerie, une suite de mots sans 
            signification utilisée à titre provisoire pour calibrer une mise en page,
          </p>
        </div>
        <div className='grid grid-cols-3'>
          <SingleCourse />
          <SingleCourse />
          <SingleCourse />
        </div>
      </div>
    </div>
  )
}

export default PopularCourse