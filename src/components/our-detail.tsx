import styled from "styled-components";
// import bgImg from "../../src/images/home-page-banner-img.png";
import { mq } from "../styles/breakpoints";
import { Container } from "react-bootstrap";

export const OurDetail = () => {
  return (
    <Wrapper>
      {/* <BgImage src={bgImg} alt="bg-image"></BgImage> */}
      <Container>
        <ContentWrapper>
          <h2>
            Embark on a journey of discovery and spritual growth with Al-Huzaifi
            Academy.
          </h2>
          <p>
            We offer an array of course designed to make islamic education
            accessible to everyone,from younge learner to adults.Led by a team
            of passionate eduactors from around the world, we are committed to
            supporting each student's unique learnign path.
          </p>
          <LearnMore>learn more</LearnMore>
        </ContentWrapper>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  // position: relative;
  padding: 30px 0px;
  border-bottom: 2px solid #f4f1ec;

  ${mq("md")} {
    padding: 60px 0px;
  }
`;

// const BgImage = styled.img`
//   width: 100%;
//   height: auto;
// `;

const ContentWrapper = styled.div`
  // width: 100%;
  // position: absolute;
  // left: 50%;
  // top: 50%;
  // transform: translate(-50%, -50%);

  h2 {
    color: #cdad7e;
    font-style: italic;
    font-size: 20px;
    letter-spacing: 0px;
    margin-bottom: 0px;
    font-weight: 500;

    ${mq("sm")} {
      font-size: 24px;
      letter-spacing: 1px;
      margin-bottom: 18px;
      font-weight: 600;
    }

    ${mq("md")} {
      font-size: 60px;
      font-weight: 600;
      letter-spacing: 1px;
      margin-bottom: 36px;
    }
  }

  p {
    color: #555d50;
    font-size: 10px;
    padding: 16px 0px;
    letter-spacing: 0px;

    ${mq("sm")} {
      font-size: 20px;
      padding: 0px;
    }

    ${mq("md")} {
      font-size: 28px;
      padding: 0px;
      letter-spacing: 1px;
    }
  }
`;

const LearnMore = styled.button`
  text-transform: capitalize;
  background-color: #cdad7e;
  border: 1px solid #cdad7e;
  color: #fff;
  border-radius: 4px;
  letter-spacing: 1px;
  transition: all ease-in 0.4s;

  margin-top: 0px;
  padding: 3px 7px;
  font-size: 9px;

  &:hover {
    background: #fff;
    color: #cdad7e;
  }

  ${mq("sm")} {
    margin-top: 22px;
    padding: 5px 24px;
    font-size: 16px;
  }

  ${mq("md")} {
    margin-top: 32px;
    padding: 9px 56px;
    font-size: 20px;
  }
`;
