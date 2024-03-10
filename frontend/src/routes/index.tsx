import { lazy } from "react";
import PathConstant from "./PathConstant";

const Home = lazy(() => import("../pages/Home"))

interface RouterTypeT {
  path : string
  element : React.ReactNode
}

const routes : RouterTypeT[] = [
  {
    path : PathConstant.HOME,
    element : <Home />
  }
]

export default routes;