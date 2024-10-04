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
import { ArabicLaguageCoursePage } from "./pages/arabic-language-course";
import { ArabicSpeakingCoursePage } from "./pages/arabic-speaking-course";
import { QuranicArabicCoursePage } from "./pages/quranic-arabic-course";
import { ClassicalArabicCoursePage } from "./pages/classical-arabic-course";
import { ArabicGrammarCoursePage } from "./pages/arabic-grammar-course";
import { ArabicBlaghatCoursePage } from "./pages/arabic-blaghat-course";
import { ArabicAroozQafiyahCoursePage } from "./pages/arabic-arooz-qafiyah-course";
import { ElementaryEnglishCoursePage } from "./pages/elementary-english-course";
import { IntermediateEnglishCoursePage } from "./pages/intermediate-english-course";
import { AdvancedEnglishCoursePage } from "./pages/advanced-english-course";

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
      {
        path: "arabic-language-course",
        element: <ArabicLaguageCoursePage />,
      },
      {
        path: "arabic-speaking-course",
        element: <ArabicSpeakingCoursePage />,
      },
      {
        path: "quranic-arabic-course",
        element: <QuranicArabicCoursePage />,
      },
      {
        path: "classical-arabic-course",
        element: <ClassicalArabicCoursePage />,
      },
      {
        path: "arabic-grammar-course",
        element: <ArabicGrammarCoursePage />,
      },
      {
        path: "arabic-blaghat-course",
        element: <ArabicBlaghatCoursePage />,
      },
      {
        path: "arabic-arooz-qafiyah-course",
        element: <ArabicAroozQafiyahCoursePage />,
      },
      {
        path: "elementary-english-course",
        element: <ElementaryEnglishCoursePage />,
      },
      {
        path: "intermediate-english-course",
        element: <IntermediateEnglishCoursePage />,
      },
      {
        path: "advanced-english-course",
        element: <AdvancedEnglishCoursePage />,
      },
    ],
  },
]);

export default router;
