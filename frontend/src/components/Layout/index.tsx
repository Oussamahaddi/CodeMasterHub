import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import LoadingSpin from "../LoadingSpin"
import Header from "../Partials/Header"
import Footer from "../Partials/Footer"

const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Suspense fallback={<LoadingSpin />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

export default Layout