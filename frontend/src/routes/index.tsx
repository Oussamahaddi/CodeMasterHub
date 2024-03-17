import { lazy } from "react";
import PathConstant from "./PathConstant";

const Home = lazy(() => import("../pages/Home"))
const Courses = lazy(() => import("../pages/Courses"))
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
    path : PathConstant.AUTH,
    element : <Auth />
  }
]

export default routes;