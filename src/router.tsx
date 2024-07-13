import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/home";
import About from "./pages/about";
import Registration from "./pages/registration";
import Contact from "./pages/contact";
import OurTeamPage from "./pages/our-team";
import { OurMissionPage } from "./pages/our-mission";
import { OurHistoryPage } from "./pages/our-history";

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
      {
        path: "registration",
        element: <Registration />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "our-team",
        element: <OurTeamPage />,
      },
      {
        path: "our-mission",
        element: <OurMissionPage />,
      },
      {
        path: "our-history",
        element: <OurHistoryPage />,
      },
    ],
  },
]);

export default router;
