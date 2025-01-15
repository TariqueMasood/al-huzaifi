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

export const WhychooseHomePage = () => {
  return (
    <Wrapper>
      <Container>
        <Title>Why Choose Us?</Title>
        <WrapDiv>
          <div>
            <ContentWrapper>
              <GiBlackBook />
              <span>authentic islamic education with global reach</span>
            </ContentWrapper>
            <ContentWrapper>
              <CiLocationOn />
              <span>flexible online learning, anytime, anywhere</span>
            </ContentWrapper>
            <ContentWrapper>
              <CiGlobe />
              <span>instruction from across the globe</span>
            </ContentWrapper>
            <ContentWrapper>
              <SlUserFemale />
              <span>dedicated female teacher for female students</span>
            </ContentWrapper>
          </div>
          <div>
            <ContentWrapper>
              <SiFuturelearn />
              <span>scholarship opportunities to make learning accessible</span>
            </ContentWrapper>
            <ContentWrapper>
              <BsCheck2All />
              <span>comprehensive curriculum for all levels</span>
            </ContentWrapper>
            <ContentWrapper>
              <TfiWrite />
              <span>affordable tution and inclusive community</span>
            </ContentWrapper>
            <ContentWrapper>
              <PiStudent />
              <span>Personalized Learning Paths for Each Student</span>
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

const Title = styled.h1`
  text-align: center;
  margin-bottom: 24px;
  font-weight: 600;
`;

const WrapDiv = styled.div`
  ${mq("sm")} {
    padding: 20px 0px;
    display: flex;
    flex-direction: column;
  }

  ${mq("md")} {
    padding: 30px 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  margin-bottom: 16px;
  svg {
    font-size: 35px;
    color: ${(props) => props.theme.colors.themeColor};
  }
  span {
    font-size: 16px;
    text-transform: capitalize;
  }

  ${mq("sm")} {
    margin-bottom: 30px;
    svg {
      font-size: 35px;
      color: ${(props) => props.theme.colors.themeColor};
    }
    span {
      font-size: 20px;
      text-transform: capitalize;
    }
  }

  ${mq("md")} {
    margin-bottom: 30px;
    svg {
      font-size: 40px;
      color: ${(props) => props.theme.colors.themeColor};
    }
    span {
      font-style: italic;
      letter-spacing: 1px;
      font-size: 24px;
      text-transform: capitalize;
    }
  }
`;
