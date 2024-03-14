import { lazy } from "react";
import PathConstant from "./PathConstant";

const Home = lazy(() => import("../pages/Home"))
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
    path : PathConstant.Auth,
    element : <Auth />
  }
]

export default routes;