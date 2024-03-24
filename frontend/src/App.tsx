import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { ToastContainer } from "react-toastify";
import routes from "./routes";
import PathConstant from "./routes/PathConstant";
import Page404 from "./pages/Page404";
import Layout from "./components/Layout";
import { Provider } from "react-redux";
import store from "./redux/Store";

import 'react-toastify/dist/ReactToastify.css';

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
    <Provider store={store}>
      <RouterProvider router={router} />
      <ToastContainer />
    </Provider>
  );
}

export default App;
