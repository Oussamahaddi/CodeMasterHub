import React from 'react'

type Props = {
  img : string
  title : string
  description : string
}

const SignleBenifit = ({img, title, description} : Props) => {
  return (
    <div className='flex gap-6 items-center'>
      <img src={img} alt="" className='scale-[80%]' />
      <div>
        <h5 className='font-semibold'>{title}</h5>
        <p className='w-4/6 text-sm text-[#5E5E5E]'>{description}</p>
      </div>
    </div>
  )
}

export default SignleBenifit