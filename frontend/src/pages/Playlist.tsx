import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import { NavLink } from 'react-router-dom'
import PathConstant from '../routes/PathConstant'

const arr = [
  "/assets/videos/video1.mp4",
  "/assets/videos/video2.mp4",
  "/assets/videos/video3.mp4",
  "/assets/videos/video4.mp4",
  "/assets/videos/video5.mp4",
  "/assets/videos/video6.mp4",
  "/assets/videos/video7.mp4",
  "/assets/videos/video8.mp4",
  "/assets/videos/video9.mp4",
  "/assets/videos/video10.mp4"
]

const Playlist = () => {

  const [videoUrl, setVideoUrl] = useState<string>(arr[0])

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
              <div onClick={() => setVideoUrl(video)} className='flex items-center gap-2 px-2 transition-all bg-white duration-100 ease-linear hover:bg-[#B873FF] hover:text-white'>
                <ReactPlayer key={index} url={video} width={100} height={80} pip/>
                <p>Title of this video</p>
              </div>
            ))
          }
        </div>
        <div className='w-full'>
          <ReactPlayer url={videoUrl} width={'100%'} height={'100%'} controls />
        </div>
      </div>
    </div>
  )
}

export default Playlist