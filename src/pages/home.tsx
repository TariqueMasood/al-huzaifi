import AchievementList from "../components/achievement-list";
import PopularCourseList from "../components/popular-course-list";
import ExploreCourseList from "../components/explore-course-list";
import HeroCarousel from "../components/hero-carousel";
import { WhychooseHomePage } from "../components/why-choose-home-page";
import { OurDetail } from "../components/our-detail";
import ScrollToTop from "../components/scroll-to-top";

const Home = () => {
  return (
    <>
      <ScrollToTop />
      <HeroCarousel />
      <OurDetail />
      <WhychooseHomePage />
      <PopularCourseList />
      <ExploreCourseList />
      <AchievementList />
    </>
  );
};

export default Home;
