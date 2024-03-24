import { DARKPURPLE, DARKSHADOW, LIGHTPURPLE, PURPLESHADOW } from '../../styles/Color'
import { NavLink } from 'react-router-dom'
import PathConstant from '../../routes/PathConstant'
import { useAppSelector } from '../../hook'

const Price = ({monthly} : {monthly : boolean}) => {

  const { user } = useAppSelector(state => state.authentification);

  return (
    <div className={`w-[400px] bg-white p-4 rounded-md border-t-[6px] border-[${monthly ? LIGHTPURPLE : DARKPURPLE}] flex flex-col gap-8 ${DARKSHADOW} hover:${PURPLESHADOW} transition-all duration-100 ease-linear`}>
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
        <NavLink to={`${PathConstant.PRICING}/payment`} state={{monthly}} className='flex justify-center'>
          <button className="rounded-full hover:shadow-[0px_2px_5px_0px_#FC72FF] py-3 shadow-[0px_2px_5px_0px_rgba(0,0,0,.3)] bg-gradient-to-br from-[#B873FF] to-[#FC72FF] text-white px-8 font-semibold hover:transition-all hover:duration-200 hover:ease-linear hover:bg-gradient-to-tl hover:from-[#B873FF] hover:to-[#FC72FF] hover:text-white hover:border-[#FC72FF]">
            Start learning
          </button>
        </NavLink>
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