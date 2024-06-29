import AchievementList from "../components/achievement-list";
import PopularCourseList from "../components/popular-course-list";
import ExploreCourseList from "../components/explore-course-list";

const Home = () => {
  return (
    <>
      <AchievementList />
      <PopularCourseList />
      <ExploreCourseList />
    </>
  );
};

export default Home;
