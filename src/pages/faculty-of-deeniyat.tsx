import { Container } from "react-bootstrap";
import styled from "styled-components";
import { mq } from "../styles/breakpoints";
import BgImage from "../../src/images/faculty-of-deeniyat.png";

export const FacultyOfDeeniyatPage = () => {
  return (
    <>
      <div>
        <Image src={BgImage} alt="pic"></Image>
      </div>
      <Wrapper>
        <Container>
          {/* <Title>Faculty of Deeniyat</Title> */}
          <SubTitle>Overview:</SubTitle>
          <Content>
            The Faculty of Deeniyat at <BoldText>Al-Huzaifi Academy</BoldText>{" "}
            is dedicated to imparting essential Islamic knowledge to students of
            all ages and backgrounds. Our mission is to provide a strong
            foundation in the basics of Islam, ensuring that students develop a
            deep understanding and appreciation of their faith. The programs
            offered under this faculty are designed to cater to the specific
            needs of different demographics, ensuring a personalized and
            effective learning experience.
          </Content>
          <Space />
          <Content>
            Central to our Deeniyat programs is the emphasis on learning the
            recitation of the Quran. We believe that mastering the proper
            recitation of the Quran is crucial for every Muslim, as it enhances
            their connection to the Holy Quran and enriches their spiritual
            journey. Alongside Quranic recitation, our courses cover the
            fundamental teachings of Islam, including the principles of faith,
            worship practices, and moral conduct.
          </Content>

          <Space />
          <SubTitle>Academic Programs:</SubTitle>
          <ol>
            <List>Deeniyat for Kids</List>
            <Content>
              - This program is tailored for young learners, providing them with
              an engaging and interactive introduction to Islam. It covers basic
              Quranic recitation, simple Islamic teachings, and moral stories
              that instill good values and ethics in children. The curriculum is
              designed to be age-appropriate, making learning fun and memorable
              for kids.
            </Content>
            <List>Deeniyat for Men</List>
            <Content>
              - Designed for adult male learners, this program offers
              comprehensive instruction in the basics of Islam. It includes
              lessons on Quranic recitation with proper Tajweed, daily worship
              practices, Islamic beliefs, and the principles of moral conduct.
              The program aims to strengthen the religious knowledge and
              spiritual growth of men, enabling them to lead their lives
              according to Islamic teachings.
            </Content>
            <List>Deeniyat for Women</List>
            <Content>
              - This program caters to adult female learners, providing them
              with a thorough grounding in Islamic knowledge. It covers Quranic
              recitation with Tajweed, the fundamentals of faith, worship
              practices, and Islamic etiquette. The curriculum is designed to
              empower women with the knowledge and skills needed to practice
              their faith confidently and to play a positive role in their
              families and communities.
            </Content>
          </ol>
          <Content>
            The Faculty of Deeniyat is committed to provide accessible and
            high-quality Islamic education to all. Through our tailored
            programs, we strive to cultivate a strong sense of faith and
            spirituality in our students, equipping them with the knowledge and
            skills to lead a life guided by Islamic principles.
          </Content>
        </Container>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  max-width: 850px;
  width: 100%;
  padding: 20px 0px;
  margin: auto;

  ${mq("sm")} {
    max-width: 850px;
    width: 100%;
    padding: 40px 0px;
    margin: auto;
  }
`;

const Image = styled.img`
  width: 100%;
`;

// const Title = styled.h1`
//   text-align: center;
//   padding: 16px 0px;
//   font-weight: 600;
//   color: ${(props) => props.theme.colors.themeColor};

//   ${mq("sm")} {
//     text-align: center;
//     padding: 30px 0px;
//     font-weight: 600;
//     color: ${(props) => props.theme.colors.themeColor};
//   }
// `;

const SubTitle = styled.h5`
  font-weight: 600;
  padding: 5px 0px;
  font-size: 18px;
  color: ${(props) => props.theme.colors.themeColor};

  ${mq("sm")} {
    font-weight: 600;
    padding: 10px 0px;
    font-size: 20px;
    color: ${(props) => props.theme.colors.themeColor};
  }
`;

const BoldText = styled.span`
  font-weight: 600;
  color: ${(props) => props.theme.colors.themeColor};
`;

const Content = styled.p`
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 0.2px;

  ${mq("sm")} {
    font-size: 18px;
    letter-spacing: 0.5px;
    line-height: 32px;
  }
`;

const Space = styled.div`
  margin: 20px 0px;
`;

const List = styled.li`
  font-size: 16px;
  padding: 7px 0px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.themeColor};

  ${mq("sm")} {
    font-size: 18px;
    padding: 7px 0px;
    font-weight: 600;
    color: ${(props) => props.theme.colors.themeColor};
  }
`;
