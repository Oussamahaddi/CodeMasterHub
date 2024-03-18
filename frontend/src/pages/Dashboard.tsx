import BasicTable from "../components/Dashboard/AppartementTable";
import HeaderDash from "../components/Dashboard/HeaderDash";
import SideBar from "../components/Dashboard/SideBar";

const Dashboard = () => {  

  return (
    <div className="h-screen overflow-hidden flex gap-4 p-4 bg-gradient-to-b from-[#B873FF] from-40% to-white to-30% ">
      <SideBar />
      <div className="w-full h-screen flex flex-col gap-4 overflow-y-auto no-scrollbar">
        <HeaderDash />
        <BasicTable />
      </div>
    </div>
  );
};

export default Dashboard