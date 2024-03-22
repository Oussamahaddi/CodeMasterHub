import { CiLogout } from "react-icons/ci";
import { DARKPURPLE } from "../../styles/Color";
import { CgPlayList } from "react-icons/cg";
import { useAppDispatch } from "../../hook";
import { logout } from "../../features/Authentification/authSlice";
import PathConstant from "../../routes/PathConstant";
import { NavLink } from "react-router-dom";

const SideBar = () => {

  const dispatch = useAppDispatch()

  return (
    <div className={`w-64 bg-white rounded-lg text-black font-semibold h-5/6 p-4 flex flex-col justify-between items-center shadow-[0_0_5px] shadow-black/30`}>
      <div className='flex flex-col gap-4 w-full items-center'>
        <NavLink to={PathConstant.HOME}>
          <img src="/assets/logo.png" alt="" className='w-24 my-4'/>
        </NavLink>
        <hr className='w-full ' />
        <div className='flex flex-col gap-4 w-full'>
          <div className={`cursor-pointer p-2 rounded flex items-center gap-2 hover:bg-[${DARKPURPLE}] hover:text-white`}>
            <CgPlayList className="text-2xl"/>
            Playlists
          </div>
        </div>
      </div>
      <button onClick={() => dispatch(logout())} className='p-2 rounded flex justify-center text-white items-center gap-2 bg-[#B873FF] w-full hover:bg-[#FC72FF] shadow-[0px_2px_6px_0px_rgba(0,0,0,.3)]'>
        <CiLogout />
        Logout
      </button>
    </div>
  )
}

export default SideBar