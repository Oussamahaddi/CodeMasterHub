import React from 'react'
import Carousel from '../components/HomePage/Carousel'
import TechnologieSlide from '../components/HomePage/TechnologieSlide'
import SearchCourses from '../components/HomePage/SearchCourses'

const Home = () => {
  return (
    <>
      <div className='w-full'>
        <Carousel />
        <TechnologieSlide />
        <SearchCourses />
      </div>
    </>
  )
}

export default Home