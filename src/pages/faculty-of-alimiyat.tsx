import styled from "styled-components";
import { mq } from "../styles/breakpoints";
import { Container } from "react-bootstrap";
import bgImage from "../../src/images/faculty-of-alimiyat-2.png";
import { Link } from "react-router-dom";

export const FacultyOfAlimiyatPage = () => {
  return (
    <>
      <div>
        <Image src={bgImage} alt="pic"></Image>
      </div>
      <Wrapper>
        <Container>
          <SubTitle>Overview:</SubTitle>
          <Content>
            The Faculty of Alimiyat at <BoldText>Al-Huzaifi Academy</BoldText>{" "}
            is dedicated to the advanced study of Islamic sciences, aiming to
            produce knowledgeable and well-rounded scholars (Ulama) who can lead
            and serve their communities with wisdom and integrity. Recognizing
            the critical role that scholars play in preserving and conveying
            Islamic knowledge, our faculty offers rigorous and comprehensive
            programs that cover various aspects of Islamic theology, law, and
            spirituality.
          </Content>
          <Space />
          <Content>
            Understanding the diverse needs and preferences of our students, we
            provide two distinct methods of Alimiyat studies:
          </Content>

          <Space />
          <ol>
            <Link to="/dars-e-nizami">
              <List>Alimiyat with Darse Nizami Curriculum</List>
            </Link>
            <Content>
              - This traditional method follows the Darse Nizami curriculum,
              which has been the cornerstone of Islamic education in South Asia
              for centuries. It includes in-depth studies of classical Islamic
              texts, covering subjects such as Tafseer (Quranic exegesis),
              Hadith (Prophetic traditions), Fiqh (Islamic jurisprudence), Usul
              al-Fiqh (principles of jurisprudence), Arabic grammar, and logic.
              The Darse Nizami curriculum is renowned for its thoroughness and
              emphasis on traditional scholarship, preparing students to become
              esteemed Ulama with a profound understanding of Islamic sciences.
            </Content>
            <Link to="/modern-curriculum">
              <List> Alimiyat with Modern Curriculum</List>
            </Link>
            <Content>
              - This contemporary approach integrates modern educational
              methodologies with traditional Islamic studies and is structured
              similarly to a university's undergraduate program. It is designed
              to cater to students who prefer a structured and systematic
              academic framework, similar to university education. This method
              includes coursework, research, and assessments, and covers a wide
              range of subjects, including Quranic studies, Hadith, Fiqh,
              Islamic history, and contemporary issues in Islam. The modern
              curriculum ensures that students receive a well-rounded education
              that equips them with both classical knowledge and the skills
              necessary to address contemporary challenges.
            </Content>
            <Space />
            <Content>
              Our Faculty of Alimiyat is committed to providing an enriching and
              transformative educational experience. Whether following the
              traditional Darse Nizami curriculum or the modern curriculum, our
              programs are designed to develop scholars who are not only
              well-versed in Islamic knowledge but also capable of addressing
              the needs and challenges of their communities with wisdom and
              insight. Through our holistic approach to Islamic education, we
              aspire to cultivate a new generation of scholars who embody the
              principles of Islam and contribute positively to society.
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
