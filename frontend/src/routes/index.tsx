import { lazy } from "react";
import PathConstant from "./PathConstant";

const Home = lazy(() => import("../pages/Home"))
const Courses = lazy(() => import("../pages/Courses"))
const Pricing = lazy(() => import("../pages/Pricing"))
const CourseDetails = lazy(() => import("../pages/CourseDetails"))
const PlayList = lazy(() => import("../pages/Playlist"))
const Dashboard = lazy(() => import("../pages/Dashboard"))
const Auth = lazy(() => import("../pages/Auth/Auth"))

interface RouterTypeT {
  path : string
  element : React.ReactNode
}

const routes : RouterTypeT[] = [
  {
    path : PathConstant.HOME,
    element : <Home />
  },
  {
    path : PathConstant.COURSES,
    element : <Courses />,
  },
  {
    path : `${PathConstant.COURSES}/:id`,
    element : <CourseDetails />,
  },
  {
    path : `${PathConstant.COURSES}/:id/playlist`,
    element : <PlayList />,
  },
  {
    path : PathConstant.AUTH,
    element : <Auth />
  },
  {
    path : PathConstant.PRICING,
    element : <Pricing />
  },
  {
    path : PathConstant.DASHBOARD,
    element : <Dashboard />
  }
]

export default routes;