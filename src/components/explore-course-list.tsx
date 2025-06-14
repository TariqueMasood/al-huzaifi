import { Container } from "react-bootstrap";
import ExploreCourseCard from "./explore-course-card";
// import computerImg from "../../src/images/computer-img.png";
import styled from "styled-components";
import Title from "./title";
import { mq } from "../styles/breakpoints";
import {
  FaQuran,
  FaBookReader,
  FaGraduationCap,
  FaBookOpen,
  FaLanguage,
} from "react-icons/fa";

const exploreCardData = [
  {
    id: 1,
    cardImage: <FaQuran />,
    cardTitle: "Faculty of Quran",
    cardSubTitlte: "4 course",
    link: "/faculty-of-quran",
  },
  {
    id: 2,
    cardImage: <FaBookReader />,
    cardTitle: "Facuty of Deeniyat",
    cardSubTitlte: "4 course",
    link: "/faculty-of-deeniyat",
  },
  {
    id: 3,
    cardImage: <FaGraduationCap />,
    cardTitle: "Faculty of Alimiyat",
    cardSubTitlte: "4 course",
    link: "/faculty-of-alimiyat",
  },
  {
    id: 4,
    cardImage: <FaBookOpen />,
    cardTitle: "Faculty of Fazilat",
    cardSubTitlte: "4 course",
    link: "/faculty-of-fazilat",
  },
  {
    id: 5,
    cardImage: <FaLanguage />,
    cardTitle: "Faculty of Language",
    cardSubTitlte: "4 course",
    link: "/faculty-of-language",
  },
];

const ExploreCourseList = () => {
  return (
    <Wrapper>
      <Container>
        <Title
          // subTitle="Browse Categories"
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
  background-color: ${(props) => props.theme.colors.themeColor};
  color: ${(props) => props.theme.colors.themeTextColor};
  // padding-bottom: 40px;
`;

const CardWrapper = styled.div`
  padding: 40px 0px;

  ${mq("lg")} {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  display: flex;
  overflow-x: scroll;
  scrollbar-width: none;
`;
