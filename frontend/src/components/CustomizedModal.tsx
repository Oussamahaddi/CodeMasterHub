import React from 'react'
import Modal from "react-modal"
import { PlaylistT } from '../types/Types'
import { IoMdClose } from 'react-icons/io'
import { showModal } from '../features/Playlist/PlaylistSlice'
import { useAppDispatch } from '../hook'
import ReactPlayer from 'react-player'

interface Props {
  isOpen : boolean
  playlist : PlaylistT
}

const CustomizedModal = ({isOpen, playlist} : Props) => {

  const dispatch = useAppDispatch();

  return (
    <Modal
      isOpen={isOpen}
    >
      <div className="absolute top-4 right-4 cursor-pointer" onClick={() => dispatch(showModal())}>
        <IoMdClose className="text-xl " />
      </div>
      <div className="flex flex-col gap-4">
        <div className="font-semibold my-6 text-xl">
          Playlist Details
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <form className="flex flex-col gap-5">
              <div className="flex flex-col border border-gray-300 rounded py-2 px-4">
                <label htmlFor="title" className="text-gray-600">Title (required)</label>
                <input type="text" id="title" name='title' value={playlist?.title} placeholder="Add text here" className="py-2 outline-none" />
              </div>
              <div className="flex flex-col border border-gray-300 rounded py-2 px-4">
                <label htmlFor="description" className="text-gray-600">Description</label>
                <textarea name="description" id="description" placeholder="Add description here" className="py-2 outline-none">{playlist?.description}</textarea>
              </div>
            </form>
          </div>
          <div className='flex flex-col gap-2 w-5/6 h-[450px] overflow-y-scroll'>
            {
              playlist?.videos.map((video, index) => (
                <div key={index} className='flex gap-4 items-center bg-[#e9e9e9] p-2'>
                  <ReactPlayer url={video.url} light width={'100px'} height={'70px'} style={{background :'black'}} />
                  <div>
                    <h5>{video.title}</h5>
                    <p>{video.description}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default CustomizedModal