import { Container } from "react-bootstrap";
import ExploreCourseCard from "./explore-course-card";
import computerImg from "../../src/images/computer-img.png";
import styled from "styled-components";
import Title from "./title";
import { mq } from "../styles/breakpoints";

const exploreCardData = [
  {
    id: 1,
    cardImage: computerImg,
    cardTitle: "data science",
    cardSubTitlte: "4 course",
    link: "",
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
];

const ExploreCourseList = () => {
  return (
    <Wrapper>
      <Container>
        <Title
          subTitle="Browse Categories"
          title="Explore Our"
          colorTitle="Courses"
        />
        <CardWrapper>
          {exploreCardData?.map((data) => (
            <ExploreCourseCard
              key={data.id}
              cardImage={data.cardImage}
              cardTitle={data.cardTitle}
              cardSubTitle={data.cardSubTitlte}
              link={data.link}
            />
          ))}
        </CardWrapper>
      </Container>
    </Wrapper>
  );
};

export default ExploreCourseList;

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.darkBg};
  color: ${(props) => props.theme.colors.themeTextColor};
  padding: 30px 0px;
`;

const CardWrapper = styled.div`
  ${mq("lg")} {
    display: flex;
    flex-wrap: wrap;
  }

  display: flex;
  overflow-x: scroll;
  scrollbar-width: none;
`;
