import React from 'react'
import SignleBenifit from './SignleBenifit'

const benefits = [
  {
    img : 'assets/onlinedegree.png',
    title : 'Online Degrees',
    description : '1000+ Courses In total, the platforms below offer over 1000 f'
  },
  {
    img : 'assets/1kvideos.png',
    title : '1.5k Video Courses',
    description : '1000+ Courses In total, the platforms below offer over 1000 f'
  },
  {
    img : 'assets/shortCourse.png',
    title : 'Short Courses',
    description : '1000+ Courses In total, the platforms below offer over 1000 f'
  },
  {
    img : 'assets/training.png',
    title : 'Training from experts',
    description : '1000+ Courses In total, the platforms below offer over 1000 f'
  },
]

const Benifits = () => {
  return (
    <div className='w-11/12 mx-auto flex justify-around items-center'>
      <div>
        <img src="assets/benefitsImg.png" alt="" className='scale-[90%]'/>
      </div>
      <div>
        <h3 className='font-semibold text-3xl mb-10 w-5/6'><span className='text-[#FC72FF]'>Benefits</span> From Our Online Learning</h3>
        <div className='flex flex-col gap-4'>
          {
            benefits.map(({img,title, description}, index) => (
              <SignleBenifit key={index} img={img} title={title} description={description} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Benifits