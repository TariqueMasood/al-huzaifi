import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ExploreCourseCard from "./explore-course-card";
import computerImg from "../../src/images/computer-img.png";
import styled from "styled-components";
import Title from "./title";

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

const ExploreCourseList = () => {
  return (
    <Wrapper>
      <Container>
        <Title
          subTitle="Browse Categories"
          title="Explore Our"
          colorTitle="Courses"
        />
        <Row>
          {exploreCardData?.map((data) => (
            <Col lg="3" md="4" sm="6">
              <ExploreCourseCard
                key={data.id}
                cardImage={data.cardImage}
                cardTitle={data.cardTitle}
                cardSubTitle={data.cardSubTitlte}
                link={data.link}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Wrapper>
  );
};

export default ExploreCourseList;

const Wrapper = styled.div``;
