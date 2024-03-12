import React from 'react'

type Props = {
  btnTitle : string
}

const Button = ({btnTitle} : Props) => {
  return (
    <button className='rounded-full hover:shadow-[0px_2px_5px_0px_#FC72FF] shadow-[0px_2px_5px_0px_rgba(0,0,0,.3)] bg-gradient-to-br from-[#B873FF] to-[#FC72FF] text-white px-8 py-1 font-semibold hover:transition-all hover:duration-200 hover:ease-linear hover:bg-gradient-to-tl hover:from-[#B873FF] hover:to-[#FC72FF] hover:text-white hover:border-[#FC72FF]'>
      {btnTitle}
    </button>
  )
}

export default Button