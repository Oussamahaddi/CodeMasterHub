import { Suspense, useEffect } from "react"
import { Outlet, useLocation, useParams } from "react-router-dom"
import LoadingSpin from "../LoadingSpin"
import Header from "../Partials/Header"
import Footer from "../Partials/Footer"
import PathConstant from "../../routes/PathConstant"
import { useAppDispatch } from "../../hook"
import { fetchUserThunk } from "../../features/Authentification/authApi"
import { UserResponseT } from "../../types/Types"

const Layout = () => {
  let location = useLocation();
  let param = useParams()

  const dispatch = useAppDispatch();

  useEffect(() => {
    const user : UserResponseT = JSON.parse(localStorage.getItem("user")!)
    if (user) dispatch(fetchUserThunk());
  }, [dispatch])

  return (
    <div>
      {!(location.pathname === `${PathConstant.COURSES}/${param.id}/playlist` || location.pathname === PathConstant.DASHBOARD) && <Header />}
      <main>
        <Suspense 
          fallback={<LoadingSpin />}
        >
          <Outlet />
        </Suspense>
      </main>
      {!(location.pathname === PathConstant.AUTH || location.pathname === `${PathConstant.COURSES}/${param.id}/playlist` || location.pathname === PathConstant.DASHBOARD) && <Footer />}
    </div>
  )
}

export default Layout