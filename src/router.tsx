import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/home";
import About from "./pages/about";
import Registration from "./pages/registration";
import Contact from "./pages/contact";
import OurTeamPage from "./pages/our-team";
import { OurMissionPage } from "./pages/our-mission";
import { OurHistoryPage } from "./pages/our-history";
import { FacultyOfQuranPage } from "./pages/faculty-of-quran";
import { FacultyOfDeeniyatPage } from "./pages/faculty-of-deeniyat";
import { FacultyOfAlimiyatPage } from "./pages/faculty-of-alimiyat";
import { FacultyOfFazilatPage } from "./pages/faculty-of-fazilat";
import { FacultyOfLanguagePage } from "./pages/faculty-of-language";
import { NooraniQaedahPage } from "./pages/noorani-qaedah";

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
      {
        path: "faculty-of-quran",
        element: <FacultyOfQuranPage />,
      },
      {
        path: "faculty-of-deeniyat",
        element: <FacultyOfDeeniyatPage />,
      },
      {
        path: "faculty-of-alimiyat",
        element: <FacultyOfAlimiyatPage />,
      },
      {
        path: "faculty-of-fazilat",
        element: <FacultyOfFazilatPage />,
      },
      {
        path: "faculty-of-language",
        element: <FacultyOfLanguagePage />,
      },
      {
        path: "noorani-qaedah",
        element: <NooraniQaedahPage />,
      },
    ],
  },
]);

export default router;
