import Title from "../components/title";
import cardImg1 from "../../src/images/cardImage1.jpg";
import userImage from "../../src/images/user-image.jpg";
import styled from "styled-components";
import PopularCourseCard from "../components/popular-course-card";
import ExploreCourseCard from "../components/explore-course-card";
import computerImg from "../../src/images/computer-img.png";
import AchievementCard from "../components/achievement-card";
import { PiUsersThreeThin } from "react-icons/pi";

const achievementCardData = [
  {
    id: 1,
    counter: "36k",
    title: "Our Happy Students",
    icon: <PiUsersThreeThin />,
  },
  {
    id: 2,
    counter: "16k",
    title: "Our Happy Students",
    icon: <PiUsersThreeThin />,
  },
  {
    id: 3,
    counter: "12k",
    title: "Our Happy Students",
    icon: <PiUsersThreeThin />,
  },
  {
    id: 4,
    counter: "96k",
    title: "Our Happy Students",
    icon: <PiUsersThreeThin />,
  },
];

const popularCourseCardData = [
  {
    id: 1,
    cardImage: cardImg1,
    courseFee: "200",
    cardTitle: "WordPress for Beginners – Master WordPress",
    studentNumber: 10,
    student: "student",
    notesNumber: 5,
    notes: "lessons",
    clock: "12:00",
    hour: "hour",
    userImage: userImage,
    userName: "monaim billah",
    designation: "Software Engineer",
  },
  {
    id: 2,
    cardImage: cardImg1,
    courseFee: "free",
    cardTitle: "Ultimate Photoshop Training: From Beginner",
    studentNumber: 10,
    student: "student",
    notesNumber: 5,
    notes: "lessons",
    clock: "12:00",
    hour: "hour",
    userImage: userImage,
    userName: "masum billah",
    designation: "data science",
  },
  {
    id: 3,
    cardImage: cardImg1,
    courseFee: 1000,
    cardTitle: "Professional Ceramic Moulding for Beginners",
    studentNumber: 10,
    student: "student",
    notesNumber: 5,
    notes: "lessons",
    clock: "12:00",
    hour: "hour",
    userImage: userImage,
    userName: "motasim billah",
    designation: "Software Engineer",
  },
];

const exploreCardData = [
  {
    id: 1,
    cardImage: computerImg,
    cardTitle: "data science",
    cardSubTitlte: "4 course",
    link: "#",
  },
  {
    id: 2,
    cardImage: computerImg,
    cardTitle: "data science",
    cardSubTitlte: "4 course",
    link: "#",
  },
  {
    id: 3,
    cardImage: computerImg,
    cardTitle: "data science",
    cardSubTitlte: "4 course",
    link: "#",
  },
  {
    id: 4,
    cardImage: computerImg,
    cardTitle: "data science",
    cardSubTitlte: "4 course",
    link: "#",
  },
  {
    id: 5,
    cardImage: computerImg,
    cardTitle: "data science",
    cardSubTitlte: "4 course",
    link: "#",
  },
  {
    id: 6,
    cardImage: computerImg,
    cardTitle: "data science",
    cardSubTitlte: "4 course",
    link: "#",
  },
];

const Home = () => {
  return (
    <div className="container">
      <div>
        <TitleContainer>
          <Title title="Trusted by Companies" colorTitle="Achievements" />
        </TitleContainer>
        <AchievementCardContainer>
          {achievementCardData.map((data) => (
            <AchievementCard
              key={data.id}
              counter={data.counter}
              title={data.title}
              icon={data.icon}
            />
          ))}
        </AchievementCardContainer>
      </div>

      <TitleContainer>
        <Title
          subTitle="Our Courses List"
          title="Most Popular"
          colorTitle="Courses"
        />
      </TitleContainer>
      <PopularCardWrapper>
        {popularCourseCardData.map((item) => (
          <PopularCourseCard key={item.id} {...item} />
        ))}
      </PopularCardWrapper>

      <ExploreCardSection>
        <TitleContainer>
          <Title
            subTitle="Browse Categories"
            title="Explore Our"
            colorTitle="Courses"
          />
        </TitleContainer>
        <ExploreCardContainer>
          {exploreCardData?.map((data) => (
            <ExploreCourseCard
              key={data.id}
              cardImage={data.cardImage}
              cardTitle={data.cardTitle}
              cardSubTitle={data.cardSubTitlte}
              link={data.link}
            />
          ))}
        </ExploreCardContainer>
      </ExploreCardSection>
    </div>
  );
};

export default Home;

const AchievementCardContainer = styled.div`
  padding: 30px 0px;
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
`;

const PopularCardWrapper = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  gap: 24px;
`;

const ExploreCardSection = styled.div`
  padding: 20px 0px;
  text-align: center;
`;

const TitleContainer = styled.div`
  padding: 40px 0px;
  text-align: center;
`;

const ExploreCardContainer = styled.div`
  padding: 20px 0px;
  display: flex;
  // justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;
