import { Container } from "react-bootstrap";
import styled from "styled-components";
import { mq } from "../styles/breakpoints";
import BgImage from "../../src/images/faculty-of-quran.png";
import { Link } from "react-router-dom";

export const FacultyOfQuranPage = () => {
  return (
    <>
      <div>
        <Image src={BgImage} alt="pic"></Image>
      </div>
      <Wrapper>
        <Container>
          {/* <Title>Faculty of Quran</Title> */}
          <SubTitle>Overview:</SubTitle>
          <Content>
            The Faculty of Quran at <BoldText>Al-Huzaifi Academy</BoldText> is
            dedicated to the study and understanding of the Holy Quran.
            Recognized as the ultimate source of guidance, wisdom, and divine
            knowledge, the Quran holds a paramount place in the lives of Muslims
            around the world. It serves as a beacon of light, offering moral and
            spiritual direction, and is fundamental to the Islamic faith and way
            of life. Our mission is to provide a comprehensive and immersive
            learning experience that deepens students' connection to the Quran,
            enhances their recitation skills, and broadens their knowledge of
            its meanings and interpretations.
          </Content>
          <Space />
          <Content>
            Understanding the importance of the Quran, we offer a curriculum
            designed to cater to learners at various levels, from beginners to
            advanced scholars. Our courses are meticulously crafted to ensure
            that students not only learn to recite the Quran with correct
            pronunciation and Tajweed but also internalize its teachings and
            apply them in their daily lives. We believe that a profound
            appreciation for the Quran's teachings can transform individuals,
            strengthen communities, and promote a peaceful society.
          </Content>
          <Space />
          <Content>
            Through our Faculty of Quran, we aim to create an environment that
            fosters a deep and lasting connection with the Quran. We are
            committed to nurture a lifelong relationship with the Holy Quran,
            encouraging students to continuously seek knowledge and strive for
            excellence in their spiritual journey.
          </Content>
          <Space />
          <Content>
            Our faculty comprises experienced and dedicated scholars who are
            passionate about imparting the sacred knowledge of the Quran,
            ensuring that each student receives personalized attention and
            guidance.
          </Content>
          <Space />
          <SubTitle>Academic Programs:</SubTitle>
          <ol>
            <Link to="/noorani-qaedah">
              <List>Noorani Qaedah Course</List>
            </Link>
            <Content>
              - This foundational course introduces beginners to the Arabic
              alphabet, pronunciation rules, and basic reading skills, serving
              as the gateway to Quranic literacy.
            </Content>
            <Link to="/recitation-course">
              <List>Quran Recitation Course</List>
            </Link>
            <Content>
              - Designed to improve fluency in reading the Quran, this course
              focuses on correct pronunciation, rhythm, and pacing, enabling
              students to recite with confidence and accuracy.
            </Content>
            <Link to="/tajweed-course">
              <List>Tajweed Course</List>
            </Link>
            <Content>
              - This course delves into the rules of Tajweed, the art of Quranic
              recitation. Students will learn the intricate regulations
              governing pronunciation, ensuring they recite the Quran with the
              utmost precision and beauty.
            </Content>
            <Link to="/memorization-course">
              <List>Quran Memorization Course</List>
            </Link>
            <Content>
              - Aimed at those aspiring to become Hafiz, this course provides
              structured memorization techniques and guidance to help students
              commit the entire Quran to memory.
            </Content>
            <Link to="/seven-qiraat">
              <List>Seven Qiraats Course</List>
            </Link>
            <Content>
              - This advanced course explores the seven different methods of
              Quranic recitation, offering students a rich understanding of the
              variations and nuances in recitation traditions.
            </Content>
            <Link to="/ijazah-program">
              <List>Quran Ijazah Course</List>
            </Link>
            <Content>
              - For those seeking certification in Quranic recitation, this
              course offers rigorous training and assessment to qualify for an
              Ijazah, an authoritative license to teach the Quran.
            </Content>
            <Link to="/translation-course">
              <List>Quran Translation Course</List>
            </Link>
            <Content>
              - This course focuses on translating the Quran from Arabic to Urdu
              and English, enabling students to grasp the meanings and convey
              them accurately in their native tongue.
            </Content>
            <Link to="/tafseer-course">
              <List>Tafseer Course</List>
            </Link>
            <Content>
              - In this course, students engage in an in-depth study of Quranic
              exegesis, exploring the historical, linguistic, and contextual
              interpretations of the Quran's verses to gain a comprehensive
              understanding of its messages.
            </Content>
            <Space />
            <Content>
              Through our holistic approach to Quranic education, we aspire to
              instill a profound reverence for the Quran and empower our
              students to embody its teachings in all aspects of their lives.
            </Content>
          </ol>
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
