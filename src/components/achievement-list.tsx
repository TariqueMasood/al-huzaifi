import React from "react";
import styled from "styled-components";
import AchievementCard from "./achievement-card";
import { PiUsersThreeThin } from "react-icons/pi";
import { Col, Container, Row } from "react-bootstrap";
import Title from "./title";

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

const AchievementList = () => {
  return (
    <Wrapper>
      <Container>
        <Title title="Trusted by Companies" colorTitle="Achievements" />
        <Row>
          {achievementCardData.map((data) => (
            <Col lg="3" md="6" xs="12">
              <AchievementCard
                key={data.id}
                counter={data.counter}
                title={data.title}
                icon={data.icon}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Wrapper>
  );
};

export default AchievementList;

const Wrapper = styled.div``;
