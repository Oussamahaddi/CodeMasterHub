import React from 'react'
import { ImFacebook2 } from "react-icons/im";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='w-full bg-gradient-to-br from-[#B873FF] to-[#FC72FF] text-white'>
      <div className='w-11/12 mx-auto py-10'>
        <div className='mx-auto flex items-center justify-between'>
          <div className='grid gap-6'>
            <img src="assets/whiteLogo.png" alt="" />
            <ul className='flex items-center gap-4'>
              <li>Course</li>
              <li>Learn</li>
              <li>Teachers</li>
              <li>Guides</li>
              <li>Blog</li>
              <li>Login</li>
              <li>Join Now</li>
            </ul>
          </div>
          <div className='flex flex-col gap-6 items-end'>
            <ul className='flex items-center gap-4 text-3xl'>
              <li><ImFacebook2 /></li>
              <li><RiInstagramFill /></li>
              <li><FaLinkedin /></li>
              <li><FaXTwitter /></li>
            </ul>
            <p className='text-xl'>Contact : support@codeMasterHub.com</p>
          </div>
        </div>
        <hr className='mx-auto my-4' />
        <div className='flex items-center justify-between mx-auto'>
          <p>CodeMasterHub is proudly made in Morocco by Oussama HADDi.🌟</p>
          <p>© Copyright 2024 - CodeMasterHub . Terms of Service . Privacy Policy</p>
        </div>
      </div>
    </div>
  )
}

export default Footer