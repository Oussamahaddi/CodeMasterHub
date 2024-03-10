import { RouterProvider, createBrowserRouter } from "react-router-dom"
import routes from "./routes";
import PathConstant from "./routes/PathConstant";
import Page404 from "./pages/Page404";

const App = () => {
  const router = createBrowserRouter([
    {
      path : PathConstant.HOME,
      errorElement : <Page404 />,
      children : routes
    }
  ])
  return (
    <RouterProvider router={router} />
  );
}

export default App;
