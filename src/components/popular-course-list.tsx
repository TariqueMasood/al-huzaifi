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
    cardTitle: "Noorani Qaedah Course",
    student: "Duration: 4-6 Months",
    notes: "5 Classes Per Week",
    hour: "Each Class: 30-40 Minutes",
    userImage: userImage,
    userName: "monaim billah",
    designation: "Software Engineer",
  },
  {
    id: 2,
    cardImage: cardImg1,
    courseFee: "free",
    cardTitle: "Deeniyat for Women",
    student: "Duration: 1 Year",
    notes: "5 Classes Per Week",
    hour: "Each Class: 60 Minutes",
    userImage: userImage,
    userName: "masum billah",
    designation: "data science",
  },
  {
    id: 3,
    cardImage: cardImg1,
    courseFee: 1000,
    cardTitle: "Foundation Arabic Course",
    student: "Total Levels: 6",
    notes: "(Each level 80 Hours)",
    hour: "Each class: 90 Minutes",
    userImage: userImage,
    userName: "motasim billah",
    designation: "Software Engineer",
  },
  {
    id: 4,
    cardImage: cardImg1,
    courseFee: 1000,
    cardTitle: "Arabic Speaking Course",
    student: "Total Levels: 6",
    notes: "(Each level 45 Hours)",
    hour: "Each class: 90 Minutes",
    userImage: userImage,
    userName: "motasim billah",
    designation: "Software Engineer",
  },
  {
    id: 5,
    cardImage: cardImg1,
    courseFee: 1000,
    cardTitle: "Quranic Arabic Course",
    student: "Total Levels: 5",
    notes: "(Each level 60 Hours)",
    hour: "Each class: 90 Minutes",
    userImage: userImage,
    userName: "motasim billah",
    designation: "Software Engineer",
  },
  {
    id: 6,
    cardImage: cardImg1,
    courseFee: 1000,
    cardTitle: "Alimiyat Course",
    student: "Curriculum:",
    notes: " Dars-e-Nizami",
    hour: "Duration: 5 Years",
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
