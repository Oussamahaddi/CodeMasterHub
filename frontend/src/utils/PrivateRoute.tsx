import { Outlet, Navigate } from "react-router-dom";
import { UserResponseT } from "../types/Types";

const PrivateRoutes = () => {

  let user : UserResponseT = JSON.parse(localStorage.getItem("user")!);

  return (
    user?.token && user.user.role === "instructor" ? <Outlet /> : <Navigate to="/" />   
  )

}
export default PrivateRoutes;