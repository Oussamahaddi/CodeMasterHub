import { Suspense } from "react"
import { Outlet, useLocation } from "react-router-dom"
import LoadingSpin from "../LoadingSpin"
import Header from "../Partials/Header"
import Footer from "../Partials/Footer"
import PathConstant from "../../routes/PathConstant"

const Layout = () => {
  let location = useLocation();
  
  return (
    <div>
      <Header />
      <main>
        <Suspense fallback={<LoadingSpin />}>
          <Outlet />
        </Suspense>
      </main>
      { !(location.pathname === PathConstant.Auth) &&  <Footer />}
    </div>
  )
}

export default Layout