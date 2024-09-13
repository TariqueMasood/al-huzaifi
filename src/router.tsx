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
import { RecitationCoursePage } from "./pages/recitation-course";
import { MemorizationCoursePage } from "./pages/memorization-course";
import { TajweedCoursePage } from "./pages/tajweed-course";
import { SevenQiraatCoursePage } from "./pages/seven-qiraat";
import { IjazahProgramPage } from "./pages/ijazah-program";
import { TranslationCoursePage } from "./pages/translation-course";
import { TafseerCoursePage } from "./pages/tafseer-course";
import { DeeniyatForKidsPage } from "./pages/deeniyat-for-kids";
import { DeeniyatForMenPage } from "./pages/deeniyat-for-men";
import { DeeniyatForWomenPage } from "./pages/deeniyat-for-women";
import { DarsEnizamiPage } from "./pages/dars-e-nizami";
import { ModernCurriculumPage } from "./pages/modern-curriculum";

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
      {
        path: "recitation-course",
        element: <RecitationCoursePage />,
      },
      {
        path: "memorization-course",
        element: <MemorizationCoursePage />,
      },
      {
        path: "tajweed-course",
        element: <TajweedCoursePage />,
      },
      {
        path: "seven-qiraat",
        element: <SevenQiraatCoursePage />,
      },
      {
        path: "ijazah-program",
        element: <IjazahProgramPage />,
      },
      {
        path: "translation-course",
        element: <TranslationCoursePage />,
      },
      {
        path: "tafseer-course",
        element: <TafseerCoursePage />,
      },
      {
        path: "deeniyat-for-kids",
        element: <DeeniyatForKidsPage />,
      },
      {
        path: "deeniyat-for-men",
        element: <DeeniyatForMenPage />,
      },
      {
        path: "deeniyat-for-women",
        element: <DeeniyatForWomenPage />,
      },
      {
        path: "dars-e-nizami",
        element: <DarsEnizamiPage />,
      },
      {
        path: "modern-curriculum",
        element: <ModernCurriculumPage />,
      },
    ],
  },
]);

export default router;
