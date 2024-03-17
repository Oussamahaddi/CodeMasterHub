import React from 'react'
import Button from '../Partials/Button'
import { DARKPURPLE, DARKSHADOW, LIGHTPURPLE, PURPLESHADOW } from '../../styles/Color'

const Price = ({monthly} : {monthly : boolean}) => {
  return (
    <div className={`w-[400px] p-4 rounded-md border-t-[6px] border-[${monthly ? DARKPURPLE : LIGHTPURPLE}] flex flex-col gap-8 ${DARKSHADOW} hover:${PURPLESHADOW} transition-all duration-100 ease-linear`}>
      <div className='flex flex-col gap-8'>
        <div className='flex flex-col gap-4'>
          <strong className='text-xl'>{monthly ? 'Monthly' : 'Yearly' }</strong>
          <p>{monthly ? '$39 /month' : '$390 /year'}</p>
        </div>
        <div className=''>
          {
            monthly ?
            <p>Access all in-depth courses, workshops, and mobile apps.</p> :
            <p>Billed yearly. Access all in-depth courses, workshops, and mobile apps.</p>
          }
        </div>
        <Button 
          btnTitle='Start Leaning'
          addionalStyle='py-3 w-fit mx-auto'
        />
      </div>
      <hr className={`rounded-full border-[${DARKPURPLE}]`}/>
      <div className='px-4'>
        <ul className='list-disc'>
          <li>
            200+ in-depth courses
          </li>
          <li>
            Learning paths for every skill level
          </li>
          <li>
            Bookmarks and course progress
          </li>
          <li>
            Mobile apps with offline playback
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Price