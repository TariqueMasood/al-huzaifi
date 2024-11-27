import styled from "styled-components";
import bgImg from "../../src/images/home-page-banner-img.png";

export const OurDetail = () => {
  return (
    <Wrapper>
      <BgImage src={bgImg} alt="bg-image"></BgImage>
      <ContentWrapper>
        <h2>
          Embark on a journey of discovery and spritual growth with Al-Huzaifi
          Academy.
        </h2>
        <p>
          We offer an array of course designed to make islamic education
          accessible to everyone,from younge learner to adults.Led by a team of
          passionate eduactors from around the world, we are committed to
          supporting each student's unique learnign path.
        </p>
      </ContentWrapper>
      <LearnMore>learn more</LearnMore>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;

const BgImage = styled.img`
  width: 100%;
  height: auto;
`;

const LearnMore = styled.button`
  position: absolute;
  bottom: 16%;
  left: 16%;
  text-transform: capitalize;
  background-color: #fff;
  border: 1px solid ${(props) => props.theme.colors.themeColor};
  color: ${(props) => props.theme.colors.themeColor};
  border-radius: 4px;
  padding: 6px 24px;
  font-size: 16px;
  transition: all ease-in 0.4s;

  &:hover {
    background: ${(props) => props.theme.colors.themeColor};
    color: #fff;
  }
`;

const ContentWrapper = styled.div`
  max-width: 850px;
  width: 100%;
  position: absolute;
  top: 16%;
  left: 16%;

  h2 {
    font-size: 56px;
    font-style: italic;
    font-weight: 600;
    letter-spacing: 1px;
    margin-bottom: 36px;
    color: ${(props) => props.theme.colors.themeColor};
  }

  p {
    font-size: 28px;
    letter-spacing: 1px;
    color: #fff;
  }
`;
