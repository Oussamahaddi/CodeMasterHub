import React from 'react'
import Carousel from '../components/HomePage/Carousel'
import TechnologieSlide from '../components/HomePage/TechnologieSlide'
import SearchCourses from '../components/HomePage/SearchCourses'
import Benifits from '../components/HomePage/Benifits'
import PopularCourse from '../components/HomePage/PopularCourse'
import JoinNow from '../components/HomePage/JoinNow'

const Home = () => {
  return (
    <>
      <div className='w-full'>
        <Carousel />
        <TechnologieSlide />
        <SearchCourses />
        <Benifits />
        <PopularCourse />
        <JoinNow />
      </div>
    </>
  )
}

export default Home