import { RouterProvider, createBrowserRouter } from "react-router-dom"
import routes from "./routes";
import PathConstant from "./routes/PathConstant";
import Page404 from "./pages/Page404";
import Layout from "./components/Layout";

const App = () => {
  const router = createBrowserRouter([
    {
      path : PathConstant.HOME,
      element : <Layout />,
      errorElement : <Page404 />,
      children : routes
    }
  ])
  return (
    <RouterProvider router={router} />
  );
}

export default App;
