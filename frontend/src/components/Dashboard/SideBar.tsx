import { FaHome } from "react-icons/fa";
import { IoIosStats } from "react-icons/io";
import { CiLogout } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { DARKPURPLE } from "../../styles/Color";

const SideBar = () => {

  return (
    <div className={`w-64 bg-white rounded-lg text-black font-semibold h-5/6 p-4 flex flex-col justify-between items-center shadow-[0_0_5px] shadow-black/30`}>
      <div className='flex flex-col gap-4 w-full items-center'>
        <img src="/assets/logo.png" alt="" className='w-24 my-4'/>
        <hr className='w-full ' />
        <div className='flex flex-col gap-4 w-full'>
          <div className={`p-2 rounded flex items-center gap-2 hover:bg-[${DARKPURPLE}] hover:text-white`}>
            <div className='p-2 rounded'>
              <FaHome />
            </div>
            <Link to="">Dashboard</Link>
          </div>
          <div className={`p-2 rounded flex items-center gap-2 hover:bg-[${DARKPURPLE}] hover:text-white`}>
            <div className={`p-2 rounded`}>
              <IoIosStats />
            </div>
            <Link to="">Tables</Link>
          </div>
        </div>
      </div>
      <div className='p-2 rounded flex justify-center text-white items-center gap-2 bg-[#B873FF] w-full hover:bg-[#FC72FF] shadow-[0px_2px_6px_0px_rgba(0,0,0,.3)]'>
        <CiLogout />
        <button>Logout</button>
      </div>
    </div>
  )
}

export default SideBar