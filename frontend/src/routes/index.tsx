import { lazy } from "react";
import PathConstant from "./PathConstant";
import PrivateRoutes from "../utils/PrivateRoute";
import { RouteObject } from "react-router-dom";

const Home = lazy(() => import("../pages/Home"))
const Courses = lazy(() => import("../pages/Courses"))
const Pricing = lazy(() => import("../pages/Pricing"))
const CourseDetails = lazy(() => import("../pages/CourseDetails"))
const PlayList = lazy(() => import("../pages/Playlist"))
const Dashboard = lazy(() => import("../pages/Dashboard"))
const Auth = lazy(() => import("../pages/Auth/Auth"))

const routes : RouteObject[] = [
  {
    path : PathConstant.HOME,
    element : <Home />
  },
  {
    path : PathConstant.COURSES,
    children : [
      {
        path : "",
        element : <Courses />,
      },
      {
        path : ':id',
        element : <CourseDetails />,
      },
      {
        path : ':id/playlist',
        element : <PlayList />,
      },
    ]
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
    element : <PrivateRoutes />,
    children : [
      {path : "", element : <Dashboard />}
    ]
  }
]

export default routes;