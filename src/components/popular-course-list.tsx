import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PopularCourseCard from "./popular-course-card";
import cardImg1 from "../../src/images/cardImage1.jpg";
import userImage from "../../src/images/user-image.jpg";
import styled from "styled-components";
import Title from "./title";

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

const PopularCourseList = () => {
  return (
    <Wrapper>
      <Container>
        <Title
          subTitle="Our Courses List"
          title="Most Popular"
          colorTitle="Courses"
        />
        <Row>
          {popularCourseCardData.map((item) => (
            <Col lg="4" md="6">
              <PopularCourseCard key={item.id} {...item} />
            </Col>
          ))}
        </Row>
      </Container>
    </Wrapper>
  );
};

export default PopularCourseList;

const Wrapper = styled.div`
  padding: 10px 0px 40px 0px;
`;
