import { Suspense } from "react"
import { Outlet, useLocation, useParams } from "react-router-dom"
import LoadingSpin from "../LoadingSpin"
import Header from "../Partials/Header"
import Footer from "../Partials/Footer"
import PathConstant from "../../routes/PathConstant"

const Layout = () => {
  let location = useLocation();
  let param = useParams()

  return (
    <div>
      {!(location.pathname === `${PathConstant.COURSES}/${param.id}/playlist` || location.pathname === PathConstant.DASHBOARD) && <Header />}
      <main>
        <Suspense fallback={<LoadingSpin />}>
          <Outlet />
        </Suspense>
      </main>
      {!(location.pathname === PathConstant.AUTH || location.pathname === `${PathConstant.COURSES}/${param.id}/playlist` || location.pathname === PathConstant.DASHBOARD) && <Footer />}
    </div>
  )
}

export default Layout