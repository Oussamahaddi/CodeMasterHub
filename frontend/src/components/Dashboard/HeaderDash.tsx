import { UserResponseT } from '../../types/Types';

const HeaderDash = ({user} : {user : UserResponseT}) => {

  return (
    <div className='flex  justify-between items-center w-full text-white mb-5 p-4'>
      <div>
        <span>Page / Dashboard</span>
        <p className='font-semibold'>Dashboard</p>
      </div>
      <div className='flex gap-2 items-center'>
        <div className='text-right'>
          <span className='text-lg font-semibold'>{user.user.fullName}</span>
          <p className='text-[#d0d0d0]'>{user.user.email}</p>
        </div>
        <div className=''>
          <img src='/assets/courses/prof.png' alt="" className='w-[50px] aspect-square rounded-full'/>
        </div>
      </div>
    </div>
  )
}

export default HeaderDash