import { Container } from "react-bootstrap";
import styled from "styled-components";
import { mq } from "../styles/breakpoints";

export const OurHistoryPage = () => {
  return (
    <Wrapper>
      <Container>
        <Title>Our History</Title>
        <ContentContainer>
          <Content>
            Welcome to <BoldText>"Al-Huzaifi Academy"</BoldText> , an Online
            Islamic Educational hub, where knowledge and faith converge in a
            seamless learning experience. This academy is a pioneering
            institution, dedicated to offer a comprehensive curriculum that
            integrates Islamic teachings with academic subjects, providing
            students with a well-rounded education. <Space />
            <BoldText>Al-Huzaifi Academy</BoldText> outshined with a passion to
            provide accessible, authentic Islamic education in the digital age.
            Our founders recognized the need to bridge traditional teachings
            with contemporary learning methods, ensuring our students to receive
            a holistic educational experience that resonates with their
            spiritual and intellectual growth. <Space />
            <BoldText>Al-Huzaifi Academy</BoldText> has grown into a renowned
            institution known for its academic rigor and commitment to
            excellence. <Space /> With students from across the globe, our
            academy proudly serves a diverse community united by a shared
            dedication to Islamic learning.
            <Space />
            At <BoldText>Al-Huzaifi Academy</BoldText>, we uphold the values of
            integrity, compassion, and academic rigor in everything we do. Our
            commitment to excellence extends beyond academics to encompass
            personal development, community service, and fostering a culture of
            respect and understanding among our students and staff.
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

const BoldText = styled.span`
  font-weight: 600;
  color: ${(props) => props.theme.colors.themeColor};
`;

const Space = styled.span`
  display: block;
  margin-top: 16px;
  margin-bottom: 20px;
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
