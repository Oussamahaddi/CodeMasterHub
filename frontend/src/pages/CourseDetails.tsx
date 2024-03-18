import React from 'react'
import { BACKGROUNDGRADIENT, DARKPURPLE, GRAY } from '../styles/Color'
import ReactPlayer from 'react-player'
import Button from '../components/Partials/Button'
import { FaRegPlayCircle } from "react-icons/fa";
import { NavLink, useParams } from 'react-router-dom';
import PathConstant from '../routes/PathConstant';


const CourseDetails = () => {
  const param = useParams();
  return (
    <div className='w-full'>
      <div className='w-10/12 mx-auto my-14'>
        <div className='flex gap-10'>
          <img src="/assets/thumb.png" alt="" className='w-[250px] aspect-square rounded' />
          <div className='flex flex-col gap-4'>
            <h4 className='text-2xl font-semibold'>Enterprise Web App Accessibility (feat. React)</h4>
            <p className={`text-sm text-[${GRAY}] font-semibold`}>Topics : <span className={`text-[${DARKPURPLE}]`}>React</span></p>
            <div className='flex gap-4 items-center'>
              <img src="/assets/courses/prof.png" alt="" className='w-[80px] aspect-square rounded-full' />
              <div className=''>
                <p className='font-semibold text-lg'>Marcy Sutton Todd</p>
                <p className={`text-[${GRAY}]`}>Principal Studios</p>
              </div>
            </div>
            <div className={`text-[${GRAY}]`}>5 hours, 5 minutes</div>
          </div>
        </div>
      </div>
      <div className={`w-full py-10 ${BACKGROUNDGRADIENT} mb-20`}>
        <div className='w-10/12 grid grid-cols-2 items-center gap-20 mx-auto'>
          <ReactPlayer 
            url='/assets/videos/video.mp4' 
            controls
          />
          <div className='flex flex-col gap-8'>
            <p className='w-5/6 text-white'>
              Learn to bake accessibility into your development process and culture. Understand UI accessibility, 
              ARIA, focus management, and how to test for accessible web apps. Through hands-on exercises, you'll 
              tackle optimizing components for screen readers and keyboards, utilizing semantic HTML, and understanding
              equipping you with the knowledge to build inclusive web applications!
              <br /><br />
              This course and others like it are available as part of our Frontend Masters video subscription.
            </p>
            <p className={`text-[#ccc]`}>Published : February 27, 2024</p>
            {
              true ?
              <NavLink to={`${PathConstant.COURSES}/${param.id}/playlist`} className='flex items-center justify-center gap-4 rounded-full bg-black py-4 shadow-[0px_2px_5px_0px_rgba(255,255,255,.3)] text-white px-8 font-semibold hover:bg-gray-900 hover:text-white transition-all duration-100 ease-linear'>
                <FaRegPlayCircle className='text-xl'/>
                Start Course
              </NavLink>
              :
              <Button 
                btnTitle='Get Illimited Access'
                addionalStyle='py-4'
              />
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseDetails