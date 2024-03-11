import { animate, motion, useMotionValue, useTransform } from 'framer-motion';
import React, { useEffect } from 'react'
import { FaRegPlayCircle } from "react-icons/fa";
import Button from '../Partials/Button';

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
            <Button btnTitle='Join Now' />
            <button className='underline text-[#B873FF] font-semibold text-lg flex items-center gap-2 [text-shadow:_2px_2px_2px_rgb(0_0_0_/_20%)] hover:text-[#FC72FF]'>
              <FaRegPlayCircle className='' />
              How it work ?
            </button>
          </div>
          <div className='flex items-center justify-start'>
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  type: "spring",
                  damping: 8,
                  stiffness: 100,
                  restDelta: 0.001
                }
              }}
            >
              <motion.div className='text-[#00D8FF] font-bold text-2xl'>{animations.courses}</motion.div>
              <p className='w-4/6 font-semibold '>Courses to choose from</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  type: "spring",
                  damping: 6,
                  stiffness: 100,
                  restDelta: 0.001
                }
              }}
            >
              <motion.div className='text-[#B873FF] font-bold text-2xl'>{animations.students}</motion.div>
              <p className='w-4/6 font-semibold '>Students trained </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  type: "spring",
                  damping: 4,
                  stiffness: 100,
                  restDelta: 0.001
                }
              }}
            >
              <motion.div className='text-[#F0C932] font-bold text-2xl'>{animations.professors}</motion.div>
              <p className='w-4/6 font-semibold '>Professional trainer</p>
            </motion.div>
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