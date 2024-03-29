import BasicTable from "../components/Dashboard/CoursesTable";
import HeaderDash from "../components/Dashboard/HeaderDash";
import SideBar from "../components/Dashboard/SideBar";
import { FaPlus } from "react-icons/fa";
import { DARKPURPLE, LIGHTPURPLE } from "../styles/Color";
import { addPlaylist } from "../features/Courses/CourseSlice";
import { useAppDispatch, useAppSelector } from "../hook";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchUserThunk } from "../features/Authentification/authApi";

const Dashboard = () => {  

  const dispatch = useAppDispatch()
  const navigate = useNavigate();
  const {logged, user} = useAppSelector(state => state.authentification)

  useEffect(() => {
    if (!user) {
      navigate("/")
    } else {
      dispatch(fetchUserThunk())
    }
  }, [dispatch, navigate, logged])

  return (
    <div className="h-screen overflow-hidden flex gap-4 p-4 bg-gradient-to-b from-[#B873FF] from-40% to-white to-30% ">
      <SideBar />
      <div className="w-full h-screen flex flex-col gap-4 overflow-y-auto no-scrollbar">
        { user && <HeaderDash user={user} />}
        <BasicTable />
      </div>
      <button onClick={() => dispatch(addPlaylist())} className={`w-[60px] aspect-square flex items-center justify-center fixed right-8 bottom-8 animate-bounce bg-gradient-to-br from-[${DARKPURPLE}] to-[${LIGHTPURPLE}] rounded-full p-2 text-white hover:bg-gradient-to-tl hover:shadow-[0_3px_5px_0px_#fc72ff] transition duration-100 ease-linear`}>
        <FaPlus className="text-3xl" />
      </button>
    </div>
  );
};

export default Dashboard