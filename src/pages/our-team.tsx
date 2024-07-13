import { Container } from "react-bootstrap";
import styled from "styled-components";
import { mq } from "../styles/breakpoints";

const OurTeamPage = () => {
  return (
    <Wrapper>
      <Container>
        <Title>Our Team</Title>
        <ContentContainer>
          <Content>
            At <BoldText>Al-Huzaifi Academy</BoldText>, we are proud to boast a
            team of esteemed scholars who bring a wealth of knowledge and
            expertise from renowned institutions such as Al-Azhar University,
            Cairo (Egypt), Islamic University of Madinah, Umm Al Quran
            University, Mecca (Saudia Arabia), leading universities across the
            Arab world, and prestigious institutions in the United Kingdome &
            Europe. Our scholars are dedicated to uphold the highest standards
            of Islamic education, ensuring that our students receive authentic
            teachings rooted in tradition while embracing contemporary insights.{" "}
            <Space /> Our faculty comprises of scholars who are expert in
            various disciplines of Islamic studies, including Quranic sciences,
            Hadith, Islamic jurisprudence (Fiqh), Theology, Arabic language, and
            more. <Space /> With a diverse faculty that spans continents, our
            scholars bridge cultural divides and connect with students from
            around the globe. Their international perspective enriches our
            curriculum, fostering a global community of learners who appreciate
            the richness and diversity of Islamic tradition.
          </Content>
        </ContentContainer>
      </Container>
    </Wrapper>
  );
};

export default OurTeamPage;

const Wrapper = styled.div`
  padding: 30px 0px;

  ${mq("sm")} {
    padding: 50px 0px;
  }
`;

const Title = styled.h1`
  font-size: 20px;
  text-align: center;
  font-weight: 600;
  color: ${(props) => props.theme.colors.themeColor};

  ${mq("sm")} {
    font-size: 40px;
    text-align: center;
    font-weight: 600;
    color: ${(props) => props.theme.colors.themeColor};
  }
`;

const BoldText = styled.span`
  font-weight: 600;
  color: ${(props) => props.theme.colors.themeColor};
`;

const Space = styled.span`
  display: block;
  margin-top: 16px;
  margin-bottom: 20px;
`;

const Content = styled.p`
  font-size: 16px;
  line-height: 28px;
  letter-spacing: 0.5px;
  max-width: 850px;
  width: 100%;
  display: inline-block;
  text-align: left;

  ${mq("sm")} {
    font-size: 18px;
    line-height: 32px;
    letter-spacing: 0.5px;
    max-width: 850px;
    width: 100%;
    display: inline-block;
    text-align: left;
  }
`;

const ContentContainer = styled.div`
  padding: 20px 0px;

  ${mq("sm")} {
    padding: 40px 0px;
    text-align: center;
  }
`;
