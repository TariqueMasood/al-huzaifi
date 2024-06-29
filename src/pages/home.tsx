import AchievementList from "../components/achievement-list";
import PopularCourseList from "../components/popular-course-list";
import ExploreCourseList from "../components/explore-course-list";
import HeroCarousel from "../components/hero-carousel";

const Home = () => {
  return (
    <>
      <HeroCarousel />
      <AchievementList />
      <PopularCourseList />
      <ExploreCourseList />
    </>
  );
};

export default Home;
