import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/home";
import About from "./pages/about";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

export default router;
