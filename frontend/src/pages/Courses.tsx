import React, { useEffect } from 'react'
import Course from '../components/Courses/Course'
import { useAppDispatch, useAppSelector } from '../hook'
import { fetchAllCoursesThunk } from '../features/Courses/CourseApi'

const Courses = () => {

  const {AllCourses} = useAppSelector(state => state.courses);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllCoursesThunk());
  }, [dispatch])

  return (
    <div className='w-full'>
      <div className='w-10/12 mx-auto  my-16'>
        <h3 className='text-4xl font-semibold text-center my-10'>Frontend & Fullstack Engineering Courses</h3>
        <div className='flex justify-end my-8'>
          <select name="" id="" className={`px-2 py-2 shadow-md text-white rounded bg-gradient-to-br from-[#B873FF] to-[#FC72FF]`}>
            <option className='text-black' value="">Sort by Date</option>
            <option className='text-black' value="">Sort by Popularity</option>
          </select>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 justify-between'>
          {
            AllCourses && AllCourses.map((course) => (
              <Course key={course._id} course={course} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Courses