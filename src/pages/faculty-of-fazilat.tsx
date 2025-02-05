import styled from "styled-components";
import { mq } from "../styles/breakpoints";
import { Container } from "react-bootstrap";
import BgImage from "../../src/images/faculty-of-fazilat.png";
import { Link } from "react-router-dom";

export const FacultyOfFazilatPage = () => {
  return (
    <>
      <div>
        <Image src={BgImage} alt="pic"></Image>
      </div>
      <Wrapper>
        <Container>
          <SubTitle>Overview:</SubTitle>
          <Content>
            The Faculty of Fazilat at <BoldText>Al-Huzaifi Academy</BoldText>{" "}
            offers advanced specialization programs designed to provide students
            with in-depth knowledge and expertise in specific areas of Islamic
            studies. Similar to graduate programs in universities, the Fazilat
            programs are rigorous and comprehensive, aimed at developing
            scholars who can contribute significantly to their fields of study.
            This is a 2-year specialization program, tailored for students who
            have already completed foundational Islamic studies and wish to
            pursue higher education in a focused area.
          </Content>
          <Space />
          <Content>
            The Faculty of Fazilat emphasizes critical thinking, research, and
            scholarly excellence, preparing students to become experts and
            leaders in their respective specializations. Our curriculum combines
            classical Islamic scholarship with contemporary academic approaches,
            ensuring that students receive a well-rounded and robust education.
          </Content>
          <SubTitle>Areas of Specialization:</SubTitle>
          <Space />
          <ol>
            <Link to="/fazilat-in-tafsir">
              <List>Fazilat in Quranic Science</List>
            </Link>
            <Content>
              - This specialization focuses on advanced studies in Quranic
              exegesis (Tafseer), the science of the Quran, and the various
              methodologies used in interpreting the Quranic text. Students will
              engage with classical and contemporary Tafseer works, gaining a
              deep understanding of the Quran's meanings and applications.
            </Content>
            <Link to="/fazilat-in-hadith">
              <List>Fazilat in Hadith Science</List>
            </Link>
            <Content>
              - Students specializing in Hadith Science will delve into the
              collection, authentication, and interpretation of Hadith. This
              program covers the major Hadith compilations, the principles of
              Hadith criticism, and the methodologies used by classical and
              modern scholars to evaluate and interpret Prophetic traditions.
            </Content>
            <Link to="/fazilat-in-islamic">
              <List>Fazilat in Islamic Jurisprudence</List>
            </Link>
            <Content>
              - This specialization provides an in-depth study of Fiqh (Islamic
              jurisprudence) and Usul al-Fiqh (principles of jurisprudence).
              Students will explore the legal rulings of the four major Sunni
              schools of thought, comparative Fiqh, and contemporary issues in
              Islamic law, equipping them to address modern legal challenges
              with an Islamic perspective.
            </Content>
            <Link to="/fazilat-in-theology">
              <List>Fazilat in Theology</List>
            </Link>
            <Content>
              - This program focuses on advanced theological studies, covering
              the core beliefs of Islam, classical and modern theological
              debates, and the development of Islamic thought. Students will
              engage with key theological texts and explore the works of
              prominent theologians to gain a comprehensive understanding of
              Islamic creed (Aqidah).
            </Content>
            <Link to="/fazilat-in-islamic-finance">
              <List>Fazilat in Islamic Finance</List>
            </Link>
            <Content>
              - This specialization focuses on the principles and practices of
              Islamic finance and banking. Students will study Sharia-compliant
              financial instruments, Islamic economic theory, and contemporary
              issues in Islamic finance, preparing them for careers in the
              growing field of Islamic banking and finance.
            </Content>
            <Link to="/fazilat-in-arabic-language">
              <List>Fazilat in Arabic Language</List>
            </Link>
            <Content>
              {" "}
              - Specializing in the Arabic language, this program offers
              advanced studies in Arabic grammar, syntax, rhetoric, and
              literature. Students will achieve proficiency in reading and
              interpreting classical Arabic texts and gain an appreciation for
              the rich literary heritage of the Arabic-speaking world.
            </Content>
          </ol>
          <Space />
          <Content>
            The Faculty of Fazilat is dedicated to fostering academic excellence
            and scholarly achievement. Our specialized programs are designed to
            cultivate experts who can contribute to the advancement of Islamic
            knowledge and address the needs of the Muslim community in various
            fields. Through rigorous study and research, we aim to produce
            graduates who are well-equipped to uphold and promote the rich
            tradition of Islamic scholarship.
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
