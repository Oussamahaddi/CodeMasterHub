import React from 'react'
import Price from '../components/Pricing/Price'

const Pricing = () => {
  return (
    <div className='w-full relative'>
      <img src="/assets/pricingbg.png" alt="" className='absolute top-1/2 right-0 -translate-y-1/2 w-[250px]' />
      <div className='w-10/12 mx-auto my-10'>
        <div className='flex flex-col gap-4 text-center'>
          <h3 className='text-4xl font-semibold'>Master Modern JavaScript to Full Stack</h3>
          <p>200+ Courses, Learning Paths, & Mobile Apps for "On the Go" Learning</p>
        </div>
        <div className='flex gap-8 justify-center mt-20'>
          <Price monthly={true}/>
          <Price monthly={false} />
        </div>
      </div>
    </div>
  )
}

export default Pricing