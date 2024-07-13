import { Container } from "react-bootstrap";
import styled from "styled-components";
import { mq } from "../styles/breakpoints";

export const OurMissionPage = () => {
  return (
    <Wrapper>
      <Container>
        <Title>Our Mission and Vision</Title>
        <ContentContainer>
          <Content>
            <SubTitle>Mission:</SubTitle>
            At <BoldText>Al-Huzaifi Academy</BoldText>, our mission is to
            empower individuals worldwide through transformative Islamic
            education. We strive to be a global leader in online learning,
            offering comprehensive courses that blend traditional Islamic
            teachings with modern educational tools. Our commitment is to offer
            a diverse range of courses tailored to meet the need of students
            from all backgrounds and enrich their level of understanding. We
            strive to make learning engaging, interactive and convenient through
            innovative technology and expert instructors.
          </Content>
          <Space></Space>
          <Content>
            <SubTitle>Mission:</SubTitle>
            Our vision at <BoldText>Al-Huzaifi Academy</BoldText> is to be the
            foremost institution for Islamic education globally, recognized for
            excellence, innovation, and impact. We envision a future where every
            individual, regardless of background or location, has access to
            authentic Islamic knowledge that enriches their lives and
            strengthens their faith. Through cutting-edge technology and a
            commitment to scholarly rigor, we aspire to educate and empower a
            new generation, who embody the teachings of Islam with wisdom,
            compassion, and integrity. Together, we strive to build a more
            connected, enlightened, and harmonious global community.
          </Content>
        </ContentContainer>
      </Container>
    </Wrapper>
  );
};

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

const SubTitle = styled.h5`
  text-align: left;
  margin-bottom: 16px;
  font-weight: 600;
  text-decoration: underline;
  color: ${(props) => props.theme.colors.themeColor};
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
