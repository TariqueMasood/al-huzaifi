import AchievementList from "../components/achievement-list";
import PopularCourseList from "../components/popular-course-list";
import ExploreCourseList from "../components/explore-course-list";
import HeroCarousel from "../components/hero-carousel";
import { WhychooseHomePage } from "./why-choose-home-page";

const Home = () => {
  return (
    <>
      <HeroCarousel />
      <PopularCourseList />
      <ExploreCourseList />
      <AchievementList />
      <WhychooseHomePage />
    </>
  );
};

export default Home;
