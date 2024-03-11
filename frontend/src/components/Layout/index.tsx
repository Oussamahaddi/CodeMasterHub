import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import LoadingSpin from "../LoadingSpin"
import Header from "../Partials/Header"

const Layout = () => {
  return (
    <div>
      <Header />
      <main className='my-4'>
        <Suspense fallback={<LoadingSpin />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  )
}

export default Layout