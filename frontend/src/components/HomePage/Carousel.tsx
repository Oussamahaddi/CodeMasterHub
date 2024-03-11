import { animate, motion, useMotionValue, useTransform } from 'framer-motion';
import React, { useEffect } from 'react'
import { FaRegPlayCircle } from "react-icons/fa";

const Carousel = () => {
  const count = useMotionValue(0)
  const endNumbers = {
    courses: 1000,
    students: 5000,
    professors: 2000
  };
  const animations = {
    courses: useTransform(count, value => Math.min(Math.round(value), endNumbers.courses)),
    students: useTransform(count, value => Math.min(Math.round(value), endNumbers.students)),
    professors: useTransform(count, value => Math.min(Math.round(value), endNumbers.professors))
  };
  useEffect(() => {
    animate(count, Math.max(...Object.values(endNumbers)), {duration : 2})
  }, [])

  return (
    <div className='flex justify-center my-10'>
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
              <motion.div className='text-[#00D8FF] font-bold text-2xl'>{animations.courses}</motion.div>
              <p className='w-4/6 font-semibold '>Courses to choose from</p>
            </div>
            <div className=''>
              <motion.div className='text-[#B873FF] font-bold text-2xl'>{animations.students}</motion.div>
              <p className='w-4/6 font-semibold '>Students trained </p>
            </div>
            <div className=''>
              <motion.div className='text-[#F0C932] font-bold text-2xl'>{animations.professors}</motion.div>
              <p className='w-4/6 font-semibold '>Professional trainer</p>
            </div>
          </div>
        </div>
        <motion.div 
          initial={{ x: -50 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
          className='w-full'
        >
          <img src="assets/carosel img.png" alt="" />
        </motion.div>
      </div>
    </div>
  )
}

export default Carousel