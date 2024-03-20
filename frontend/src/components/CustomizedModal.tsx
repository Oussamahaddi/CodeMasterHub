import React from 'react'
import Modal from "react-modal"
import { CoursesT } from '../types/Types'
import { IoMdClose } from 'react-icons/io'
import { closeModal } from '../features/Courses/CourseSlice'
import { useAppDispatch } from '../hook'
import ReactPlayer from 'react-player'
import { DARKPURPLE, LIGHTPURPLE } from '../styles/Color'
import { FaTrash } from 'react-icons/fa'
import Button from './Partials/Button'
import { SubmitHandler, useForm } from 'react-hook-form'

interface Props {
  isOpen : boolean
  course : CoursesT
  formType : "ADD" | "UPDATE"
}

interface FormInputT {
  title : string
  description : string
  playlistImage : any
  videos : any
}

const customStyle = {
  content : {
    width : '800px',
    margin : '0px auto'
  }
} 

const CustomizedModal = ({isOpen, course, formType} : Props) => {

  const dispatch = useAppDispatch();
  const {
    handleSubmit,
    register,
    reset,
    formState : {errors}
  } = useForm<FormInputT>()

  const onSubmit : SubmitHandler<FormInputT> = (data) => {
    const file = data.videos
    console.log(file);
  }

  return (
    <Modal
      isOpen={isOpen}
      ariaHideApp={false}
      onAfterClose={reset}
      style={formType === 'ADD' ? customStyle : undefined}
    >
      <div className="absolute top-4 right-4 cursor-pointer bg-[#B873FF] rounded hover:bg-[#FC72FF] p-1 transition-all duration-100 ease-linear" onClick={() => dispatch(closeModal())}>
        <IoMdClose className="text-xl text-white" />
      </div>
      <div className="flex flex-col gap-4">
        <div className='text-3xl font-semibold'>
          {formType === "ADD" ? "Add Playlist" : "Update Playlist"}
        </div>
        <div className={formType === "UPDATE" ? "grid grid-cols-2 gap-8" : "grid grid-cols-1"}>
          <div>
            <div className="font-semibold my-6 text-xl">
              Playlist Details
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
              <div className={errors.title ? "flex flex-col border border-red-400 rounded py-2 px-4" : "flex flex-col border border-gray-300 rounded py-2 px-4"}>
                <label htmlFor="title" className={errors.title ? "text-red-500" : "text-gray-600"}>Title (required)</label>
                {
                  formType === "UPDATE" ?
                  <input {...register('title', {required : true})} defaultValue={course?.title} type="text" id="title" placeholder="Add text here" className="py-2 outline-none" /> :
                  <input {...register('title', {required : true})} type="text" id="title" placeholder="Add text here" className="py-2 outline-none" />
                }
                {errors.title && <p className='text-red-500 bg-red-200 rounded px-2'>{errors.title?.message}</p>}
              </div>
              <div className="flex flex-col border border-gray-300 rounded py-2 px-4">
                <label htmlFor="description" className="text-gray-600">Description</label>
                {
                  formType === "UPDATE" ?
                  <textarea {...register('description')} defaultValue={course?.description} id="description" placeholder="Add description here" className="py-2 outline-none"></textarea> :
                  <textarea {...register('description')} id="description" placeholder="Add description here" className="py-2 outline-none"></textarea>
                }
              </div>
              {
                formType === "ADD" &&
                <>
                  <div className='flex flex-col gap-2'>
                    <label htmlFor="playlistImg" className='text-gray-600 font-semibold'>Playlist Thumbnail</label>
                    <label className="block">
                      <span className="sr-only">Playlist Thumbnil</span>
                      <input {...register('playlistImage')} id='playlistImg' type="file" className="block w-full text-sm text-gray-500 file:me-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#B873FF] file:text-white hover:file:bg-[#FC72FF] " />
                    </label>
                  </div>
                  <div className='flex flex-col gap-2'>
                    <label htmlFor="playlistImg" className='text-gray-600 font-semibold'>Videos</label>
                    <label className="block">
                      <span className="sr-only">Videos</span>
                      <input {...register('videos')} multiple id='playlistImg' type="file" className="block w-full text-sm text-gray-500 file:me-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#B873FF] file:text-white hover:file:bg-[#FC72FF] " />
                    </label>
                  </div>
                </>
              }
              <div className='flex items-center gap-4 justify-end'>
                <button onClick={() => dispatch(closeModal())} className={`text-[${LIGHTPURPLE}] font-semibold hover:text-[${DARKPURPLE}]`}>Cancel Change</button>
                <Button 
                  btnTitle='Save change'
                  addionalStyle='rounded-md py-2'
                />
              </div>
            </form>
          </div>
          <div className='flex flex-col gap-2 w-5/6 h-[450px] overflow-y-scroll'>
            {
              formType === "UPDATE" && 
              <div className="font-semibold my-5 text-xl">
                Playlist Videos
              </div>
            }
            {
              formType === "UPDATE" &&
              course?.videos.map((video, index) => (
                <div key={index} className={`group rounded-md flex justify-between items-center bg-[#eee] border border-[#ccc] p-2 hover:bg-[${LIGHTPURPLE}] hover:text-white transition-all duration-100 ease-linear`}>
                  <div className='flex gap-4 items-center'>
                    <ReactPlayer url={video} light width={'130px'} height={'70px'} style={{background :'black'}} />
                    {/* <div>
                      <h5>{video.title}</h5>
                      <p>{video.description}</p>
                    </div> */}
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