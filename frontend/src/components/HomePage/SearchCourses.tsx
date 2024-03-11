import React from 'react'
import Button from '../Partials/Button'

const SearchCourses = () => {
  return (
    <div className='w-1/2 mx-auto my-14 flex flex-col gap-6'>
      <h1 className='text-2xl font-bold text-center'>Search Courses</h1>
      <div className="">
        <div className="relative mb-4 flex gap-4 w-full flex-wrap items-stretch">
          <input
            type="search"
            className="relative m-0 -mr-0.5 block min-w-0 flex-auto shadow-[0px_2px_8px_0px_rgba(0, 0, 0, .5)] rounded-full border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(184,115,255)] focus:outline-none"
            placeholder="Search for over 50+ courses" 
          />
          <Button btnTitle='Search' />
        </div>
      </div>
    </div>
  )
}

export default SearchCourses