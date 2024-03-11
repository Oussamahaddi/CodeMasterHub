import React from 'react'

const images = [
  {
    name : "angular",
    path : "./assets/technologies/angular.png"
  },
  {
    name : "javascript",
    path : "./assets/technologies/javascript.png"
  },
  {
    name : "reactjs",
    path : "./assets/technologies/reactjs.png"
  },
  {
    name : "nodejs",
    path : "./assets/technologies/nodejs.png"
  },
  {
    name : "typescript",
    path : "./assets/technologies/ts.png"
  },
  {
    name : "vuejs",
    path : "./assets/technologies/vue.png"
  }
]

const TechnologieSlide = () => {
  return (
    <div className='bg-gradient-to-b from-[#B873FF] to-[#FC72FF] flex justify-center overflow-y-auto'>
      <div className='flex items-center justify-evenly w-11/12'>
        {
          images.map(({name, path}, i) => (
            <img src={path} alt={name} key={i} className='scale-[70%] hover:translate-y-[-10%] duration-150 transition-all' />
          ))
        }
        
      </div>
    </div>
  )
}

export default TechnologieSlide