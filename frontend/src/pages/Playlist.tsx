import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import { NavLink, useLocation } from 'react-router-dom'
import PathConstant from '../routes/PathConstant'

const Playlist = () => {

  const {state} = useLocation()
  const [videoUrl, setVideoUrl] = useState<string>(state.playlist[0])

  return (
    <div className=''>
      <div className='bg-gradient-to-br from-[#B873FF] to-[#FC72FF] w-full py-2 px-10 sticky top-0'>
        <NavLink to={PathConstant.HOME}>
          <img src="/assets/logo.png" alt="" width={'60px'}/>
        </NavLink>
      </div>
      <div className='flex h-screen overflow-hidden'>
        <div className='w-72 overflow-y-scroll flex flex-col gap-1'>
          {
            (state.playlist as string[]).map((video, index) => (
              <div key={index} onClick={() => setVideoUrl(video)} className='flex items-center gap-2 px-2 transition-all bg-[#eee] border-[#ccc] border duration-100 ease-linear hover:bg-[#B873FF] hover:text-white'>
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