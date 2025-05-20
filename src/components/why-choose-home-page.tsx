import { Container } from "react-bootstrap";
import { CiGlobe, CiLocationOn } from "react-icons/ci";
import { SiFuturelearn } from "react-icons/si";
import { GiBlackBook } from "react-icons/gi";
import { SlUserFemale } from "react-icons/sl";
import { TfiWrite } from "react-icons/tfi";

import styled from "styled-components";
import { mq } from "../styles/breakpoints";
import { BsCheck2All } from "react-icons/bs";
import { PiStudent } from "react-icons/pi";
import Title from "./title";

export const WhychooseHomePage = () => {
  return (
    <Wrapper>
      <Container>
        <Title title="Why Choose Us?" />
        <WrapDiv>
          <div>
            <ContentWrapper>
              <GiBlackBook />
              <span>
                <h3>Global Islamic Education</h3>
                <span>Authentic Learning for student worldwide.</span>
              </span>
            </ContentWrapper>
            <ContentWrapper>
              <CiLocationOn />
              <span>
                <h3>Flexible Online Learning</h3>
                <span>Study anytime, from anywhere.</span>
              </span>
            </ContentWrapper>
            <ContentWrapper>
              <CiGlobe />
              <span>
                <h3>International Faculty</h3>
                <span>Expert teachers from across the globe.</span>
              </span>
            </ContentWrapper>
            <ContentWrapper>
              <SlUserFemale />
              <span>
                <h3>Female-Foused Support</h3>
                <span>Female teacher for female students.</span>
              </span>
            </ContentWrapper>
          </div>
          <div>
            <ContentWrapper>
              <SiFuturelearn />
              <span>
                <h3>Scholarship Opportunity</h3>
                <span>Making education more accessible.</span>
              </span>
            </ContentWrapper>
            <ContentWrapper>
              <BsCheck2All />
              <span>
                <h3>Structured Carriculum</h3>
                <span>Courses for all levels of learners.</span>
              </span>
            </ContentWrapper>
            <ContentWrapper>
              <TfiWrite />
              <span>
                <h3>Affordable & Inclusive</h3>
                <span>Low-cast learning for everyone.</span>
              </span>
            </ContentWrapper>
            <ContentWrapper>
              <PiStudent />
              <span>
                <h3>Personalized Learning paths</h3>
                <span>Custom plans for each student.</span>
              </span>
            </ContentWrapper>
          </div>
        </WrapDiv>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  // background-color: #f4f1ec;
  padding: 30px 0px;

  ${mq("sm")} {
    padding: 30px 0px;
  }

  ${mq("md")} {
    padding: 40px 0px;
  }
`;

// const Title = styled.h1`
//   text-align: center;
//   margin-bottom: 24px;
//   font-weight: 600;
// `;

const WrapDiv = styled.div`
  padding: 12px 0px;
  display: flex;
  flex-direction: column;

  ${mq("sm")} {
    padding: 20px 0px;
    display: flex;
    gap: 12px;
    flex-direction: column;
  }

  ${mq("md")} {
    padding: 30px 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  h3 {
    font-size: 16px;
    font-weight: 600;
    color: ${(props) => props.theme.colors.themeColor};
  }

  margin-bottom: 16px;
  svg {
    font-size: 35px;
    color: ${(props) => props.theme.colors.themeColor};
  }
  span {
    font-size: 14px;
    text-transform: capitalize;
    // color: ${(props) => props.theme.colors.yellowColor};
    color: rgb(199, 132, 38);
  }

  ${mq("sm")} {
    margin-bottom: 30px;
    svg {
      font-size: 35px;
      color: ${(props) => props.theme.colors.themeColor};
    }

    h3 {
      font-size: 20px;
      font-weight: 600;
    }

    span {
      font-size: 18px;
      text-transform: capitalize;
    }
  }

  ${mq("md")} {
    margin-bottom: 30px;
    svg {
      font-size: 40px;
      color: ${(props) => props.theme.colors.themeColor};
    }

    h3 {
      font-size: 28px;
      font-weight: 700;
    }
    span {
      font-style: italic;
      letter-spacing: 1px;
      // font-size: 24px;
      text-transform: capitalize;
    }
  }
`;
