import React from 'react'
import Modal from "react-modal"
import { PlaylistT } from '../types/Types'
import { IoMdClose } from 'react-icons/io'
import { showModal } from '../features/Playlist/PlaylistSlice'
import { useAppDispatch } from '../hook'
import ReactPlayer from 'react-player'
import { DARKPURPLE, LIGHTPURPLE } from '../styles/Color'
import { FaTrash } from 'react-icons/fa'
import Button from './Partials/Button'
import { SubmitHandler, useForm } from 'react-hook-form'

interface Props {
  isOpen : boolean
  playlist : PlaylistT
}

interface FormInputT {
  title : string
  description : string
}

const customStyle = {
  width : '500px',
  hight : '400px'
}

const CustomizedModal = ({isOpen, playlist} : Props) => {

  const dispatch = useAppDispatch();
  const {
    handleSubmit,
    register,
    formState : {errors}
  } = useForm<FormInputT>()

  const onSubmit : SubmitHandler<FormInputT> = (data) => console.log(data)

  return (
    <Modal
      isOpen={isOpen}
    >
      <div className="absolute top-4 right-4 cursor-pointer bg-[#B873FF] rounded hover:bg-[#FC72FF] p-1 transition-all duration-100 ease-linear" onClick={() => dispatch(showModal())}>
        <IoMdClose className="text-xl text-white" />
      </div>
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <div className="font-semibold my-6 text-xl">
              Playlist Details
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
              <div className="flex flex-col border border-gray-300 rounded py-2 px-4">
                <label htmlFor="title" className="text-gray-600">Title (required)</label>
                <input {...register('title', {required : true})} defaultValue={playlist?.title} type="text" id="title" placeholder="Add text here" className="py-2 outline-none" />
              </div>
              <div className="flex flex-col border border-gray-300 rounded py-2 px-4">
                <label htmlFor="description" className="text-gray-600">Description</label>
                <textarea {...register('description')} defaultValue={playlist?.description} name="description" id="description" placeholder="Add description here" className="py-2 outline-none"></textarea>
              </div>
              <div className='flex items-center gap-4 justify-end'>
                <div className={`text-[${LIGHTPURPLE}] font-semibold hover:text-[${DARKPURPLE}]`}>Cancel Change</div>
                <Button 
                  btnTitle='Save change'
                  addionalStyle='rounded-md py-2'
                />
              </div>
            </form>
          </div>
          <div className='flex flex-col gap-2 w-5/6 h-[450px] overflow-y-scroll'>
            <div className="font-semibold my-6 text-xl">
              Playlist Videos
            </div>
            {
              playlist?.videos.map((video, index) => (
                <div key={index} className={`group flex justify-between items-center bg-[#eee] border border-[#ccc] p-2 hover:bg-[${LIGHTPURPLE}] hover:text-white transition-all duration-100 ease-linear`}>
                  <div className='flex gap-4 items-center'>
                    <ReactPlayer url={video.url} light width={'130px'} height={'70px'} style={{background :'black'}} />
                    <div>
                      <h5>{video.title}</h5>
                      <p>{video.description}</p>
                    </div>
                  </div>
                  <div className='px-2 text-red-500 hover:text-red-300'>
                    <FaTrash className='cursor-pointer' />
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