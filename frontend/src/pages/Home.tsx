import React from 'react'
import Carousel from '../components/HomePage/Carousel'
import TechnologieSlide from '../components/HomePage/TechnologieSlide'

const Home = () => {
  return (
    <>
      <div className='w-full'>
        <Carousel />
        <TechnologieSlide />
      </div>
    </>
  )
}

export default Home