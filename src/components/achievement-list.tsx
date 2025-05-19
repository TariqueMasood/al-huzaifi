import styled from "styled-components";
import AchievementCard from "./achievement-card";
import { PiUsersThreeThin } from "react-icons/pi";
import Title from "./title";
import { Container } from "react-bootstrap";

const achievementCardData = [
  {
    id: 1,
    counter: "1000+",
    title: "Students Enrolled",
    icon: <PiUsersThreeThin />,
  },
  {
    id: 2,
    counter: "40+",
    title: "Courses Offered",
    icon: <PiUsersThreeThin />,
  },
  {
    id: 3,
    counter: "20+",
    title: "Countries Reached",
    icon: <PiUsersThreeThin />,
  },
  {
    id: 4,
    counter: "10+",
    title: "Teacher Nationalities",
    icon: <PiUsersThreeThin />,
  },
];

const AchievementList = () => {
  return (
    <Wrapper>
      <Container>
        <TitleContainer>
          <Title title="Our" colorTitle="Achievements" />
        </TitleContainer>
        <CardWrapper>
          {achievementCardData.map((data) => (
            <AchievementCard
              key={data.id}
              counter={data.counter}
              title={data.title}
              icon={data.icon}
            />
          ))}
        </CardWrapper>
      </Container>
    </Wrapper>
  );
};

export default AchievementList;

const Wrapper = styled.div`
  padding: 40px 0px;
`;

const TitleContainer = styled.div`
  padding: 0 0 40px 0px;
`;

const CardWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  // overflow-x: scroll;
  scrollbar-width: none;
  padding-bottom: 50px;
`;
