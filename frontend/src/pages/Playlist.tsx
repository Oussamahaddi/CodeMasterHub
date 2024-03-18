import React from 'react'
import ReactPlayer from 'react-player'
import { NavLink } from 'react-router-dom'
import PathConstant from '../routes/PathConstant'

const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]

const Playlist = () => {
  return (
    <div className=''>
      <div className='bg-gradient-to-br from-[#B873FF] to-[#FC72FF] w-full py-2 px-10 sticky top-0'>
        <NavLink to={PathConstant.HOME}>
          <img src="/assets/logo.png" alt="" width={'60px'}/>
        </NavLink>
      </div>
      <div className='flex h-screen overflow-hidden bg-black'>
        <div className='w-72 overflow-y-scroll flex flex-col gap-1'>
          {
            arr.map((video, index) => (
              <div className='flex items-center gap-2 px-2 transition-all bg-white duration-100 ease-linear hover:bg-[#B873FF] hover:text-white'>
                <ReactPlayer url={"/assets/videos/video.mp4"} width={100} height={80}/>
                <p>Title of this video</p>
              </div>
            ))
          }
        </div>
        <div className='w-full'>
          <ReactPlayer url={"/assets/videos/video.mp4"} width={'100%'} height={'100%'} controls/>
        </div>
      </div>
    </div>
  )
}

export default Playlist