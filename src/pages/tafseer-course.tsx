import { Container } from "react-bootstrap";
import styled from "styled-components";
import { mq } from "../styles/breakpoints";
import bgImage from "../../src/images/tafseer.png";

export const TafseerCoursePage = () => {
  return (
    <>
      <div>
        <Image src={bgImage} alt="pic"></Image>
      </div>
      <Wrapper>
        <Container>
          <Title>Tafseer Course Course</Title>
          <SubTitle>Al-Huzaifi Academy</SubTitle>
          <Content>
            <CourseDiscription>
              <h5>course objective:</h5>
              <p>
                The Tafseer Course is meticulously crafted to provide students
                with a profound and comprehensive understanding of Quranic
                exegesis (Tafseer). This course aims to delve deep into the
                meanings, contexts, and interpretations of the Quranic verses,
                equipping students with the knowledge and skills necessary to
                comprehend and explain the divine messages accurately.
              </p>
              <h5>Course Content:</h5>
              <p>
                The Tafseer Course offers a detailed and structured curriculum
                designed to cover all essential aspects of Quranic exegesis. Key
                components of the course include:
              </p>
              <ol>
                <li>
                  <strong>Introduction to Tafseer: </strong>
                  Understanding the definition, importance, and history of
                  Tafseer in Islamic scholarship.
                </li>
                <li>
                  <strong>Principles of Tafseer: </strong>Studying the
                  fundamental principles and methodologies used in Quranic
                  exegesis.
                </li>
                <li>
                  <strong>Sources of Tafseer: </strong>Identifying and analyzing
                  the primary sources of Tafseer, including the Quran itself,
                  Hadith, statements of the Sahaba, and scholarly works.
                </li>
                <li>
                  <strong>Historical Context: </strong>Exploring the historical
                  events and circumstances surrounding the revelation of
                  specific verses.
                </li>
                <li>
                  <strong>Linguistic Analysis: </strong>Examining the linguistic
                  aspects of the Quran, including grammar, syntax, and
                  rhetorical devices.
                </li>
                <li>
                  <strong>Thematic Analysis: </strong>Investigating major themes
                  in the Quran, such as monotheism, prophethood, ethics, and
                  eschatology.
                </li>
                <li>
                  <strong>Comparative Tafseer: </strong>Studying classical and
                  contemporary Tafseer literature to understand different
                  interpretations and perspectives.
                </li>
                <li>
                  <strong>Practical Tafseer Exercises: </strong>Hands-on
                  practice in interpreting and explaining selected Quranic
                  verses.
                </li>
                <li>
                  <strong>Modern Challenges and Tafseer: </strong>Addressing
                  contemporary issues and how they are interpreted through
                  Tafseer.
                </li>
              </ol>
              <h5>Learning Outcomes: </h5>
              <p>
                Upon successful completion of the Tafseer Course, students will
                achieve the following learning outcomes:
              </p>
              <ol>
                <li>
                  <strong>In-depth Knowledge of Tafseer: </strong>Students will
                  have a comprehensive understanding of the principles, sources,
                  and methodologies of Quranic exegesis.
                </li>
                <li>
                  <strong>Contextual and Historical Insight: </strong>Students
                  will gain a deep insight into the historical and contextual
                  background of Quranic revelations.
                </li>
                <li>
                  <strong>Linguistic Proficiency: </strong>Students will develop
                  proficiency in the linguistic analysis of Quranic text.
                </li>
                <li>
                  <strong>Thematic Understanding: </strong>SStudents will be
                  able to identify and analyze major themes and topics in the
                  Quran.
                </li>
                <li>
                  <strong>Interpretation Skills: </strong>Students will enhance
                  their skills in interpreting and explaining Quranic verses
                  accurately and meaningfully.
                </li>
                <li>
                  <strong>Critical Analysis of Tafseer: </strong>Students will
                  be able to critically analyze and compare different Tafseer
                  works, appreciating both classical and contemporary
                  contributions.
                </li>
                <li>
                  <strong>Application of Tafseer: </strong>Students will be
                  equipped to apply Tafseer in addressing modern challenges and
                  providing relevant explanations.
                </li>
              </ol>
              <h5>Who Should Enroll: </h5>
              <p>
                The Tafseer Course is designed for a diverse range of learners
                dedicated to deepening their understanding of the Quran through
                its exegesis. This includes:
              </p>
              <ol>
                <li>
                  <strong>Aspiring Scholars: </strong>
                  Individuals seeking to become proficient scholars in Quranic
                  studies and Tafseer.
                </li>
                <li>
                  <strong>Religious Educators: </strong>Educators who aim to
                  teach Quranic exegesis and provide detailed explanations of
                  the Quranic text.
                </li>
                <li>
                  <strong>Imams and Community Leaders: </strong>Religious
                  leaders who wish to enhance their ability to interpret and
                  explain the Quran to their communities.
                </li>
                <li>
                  <strong>Students of Islamic Studies: </strong>Those pursuing
                  academic studies in Islam who wish to gain a thorough
                  understanding of Tafseer.
                </li>
                <li>
                  <strong>Researchers and Academics: </strong>Researchers and
                  academics interested in exploring the depths of Quranic
                  exegesis and its applications.
                </li>
              </ol>
              <p>
                By enrolling in the Tafseer Course, students embark on a
                scholarly and spiritual journey that enriches their
                understanding of the Quran. This course provides the
                foundational knowledge, critical analysis skills, and practical
                experience needed to interpret and explain the divine messages
                of the Quran, ensuring that its profound teachings are
                comprehended and conveyed accurately and meaningfully.
              </p>
            </CourseDiscription>
            <CourseDetail>
              <h5>
                course name: <span>Tafseer Course</span>
              </h5>
              <h5>
                course code: <span>QRN08</span>
              </h5>
              <h5>
                Learning Mode: <span>Online</span>
              </h5>
              <h5>
                Language: <span>English, Arabic, Urdu</span>
              </h5>
              <h5>
                type: <span>Part Time</span>
              </h5>
              <h5>
                Duration: <span>1-2 Years</span>
              </h5>
              <h5>
                Entry Requirement:{" "}
                <span>Must have proficiency in Arabic Language</span>
              </h5>
              <h5>
                Application Deadline: <span>Fall & Spring Semester</span>
              </h5>
              <ButtonContainer>
                <a href="/registration">Apply Here</a>
              </ButtonContainer>
            </CourseDetail>
          </Content>
        </Container>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div``;

const Image = styled.img`
  width: 100%;
`;

const Title = styled.h1`
  text-align: center;
  font-weight: 600;
  color: ${(props) => props.theme.colors.themeColor};
  padding: 16px 0px;
  font-size: 20px;

  ${mq("sm")} {
    text-align: center;
    font-weight: 600;
    color: ${(props) => props.theme.colors.themeColor};
    padding: 24px 0px;
    font-size: 24px;
  }

  ${mq("md")} {
    text-align: center;
    font-weight: 600;
    color: ${(props) => props.theme.colors.themeColor};
    padding: 30px 0px;
    font-size: 36px;
  }
`;

const SubTitle = styled.h4`
  text-align: center;
  font-style: italic;
  font-size: 18px;
  color: ${(props) => props.theme.colors.themeTextColor2};

  ${mq("sm")} {
    text-align: center;
    font-style: italic;
    text-decoration: underline;
    font-size: 20px;
    color: ${(props) => props.theme.colors.themeTextColor2};
  }

  ${mq("md")} {
    text-align: center;
    font-style: italic;
    text-decoration: underline;
    margin-bottom: 30px;
    font-size: 22px;
    color: ${(props) => props.theme.colors.themeTextColor2};
  }
`;

const Content = styled.div`
  padding: 7px 0px;
  display: flex;
  flex-direction: column-reverse;
  gap: 25px;

  ${mq("md")} {
    padding: 30px 0px;
    display: flex;
    flex-direction: row;
    gap: 45px;
    justify-content: space-between;
  }
`;

const CourseDiscription = styled.div`
  h5 {
    font-size: 18px;
    font-weight: 600;
    text-transform: capitalize;
  }
  p {
    padding: 12px 0px;
    font-size: 16px;
    letter-spacing: 1px;
  }

  li {
    font-size: 16px;
    letter-spacing: 1px;
    line-height: 26px;
  }

  ${mq("sm")} {
    margin: 12px 0px;

    h5 {
      font-size: 20px;
      font-weight: 600;
      text-transform: capitalize;
    }
    p {
      padding: 12px 0px;
      font-size: 18px;
      letter-spacing: 1px;
    }

    li {
      font-size: 18px;
      letter-spacing: 1px;
      line-height: 30px;
    }
  }


  ${mq("md")}{
  flex: 2;
    margin: 20px 0px;

    h5 {
      font-size: 20px;
      font-weight: 600;
      text-transform: capitalize;
    }
    p {
      padding: 12px 0px;
      font-size: 18px;
      letter-spacing: 1px;
    }

    li {
      font-size: 18px;
      letter-spacing: 1px;
      line-height: 30px;
    }
  }
  }
`;

// const Divider = styled.div`
//   width: 1px;
//   height: auto;
//   background-color: black;
// `;

const CourseDetail = styled.div`
  margin: 12px 0px;

  h5:first-of-type {
    border-top: 1px solid ${(props) => props.theme.colors.themeTextColor2};
  }

  h5:last-of-type {
    border-bottom: 1px solid ${(props) => props.theme.colors.themeTextColor2};
  }

  h5:nth-of-type(2) {
    background-color: ${(props) => props.theme.colors.themeColor2};
    opacity: 0.9;
    color: #4f835b;
  }

  h5:nth-of-type(4) {
    background-color: ${(props) => props.theme.colors.themeColor2};
    opacity: 0.9;
    color: #4f835b;
  }

  h5:nth-of-type(6) {
    background-color: ${(props) => props.theme.colors.themeColor2};
    opacity: 0.9;
    color: #4f835b;
  }

  h5:nth-of-type(8) {
    background-color: ${(props) => props.theme.colors.themeColor2};
    opacity: 0.9;
    color: #4f835b;
  }

  h5 {
    color: ${(props) => props.theme.colors.themeTextColor2};
    font-size: 16px;
    font-weight: 600;
    text-transform: capitalize;
    line-height: 26px;
    padding: 0px 6px 10px;

    span {
      font-weight: normal;
      font-size: 14px;
    }
  }

  ${mq("sm")} {
    flex: 1;
    margin: 20px 0px;

    h5:first-of-type {
      border-top: none;
    }

    h5 {
      color: ${(props) => props.theme.colors.themeTextColor2};
      font-size: 18px;
      font-weight: 600;
      text-transform: capitalize;
      line-height: 28px;
      padding-bottom: 16px;

      span {
        font-weight: normal;
        font-size: 18px;
        letter-spacing: 1px;
      }
    }
  }
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
  a {
    display: block;
    text-align: center;
    border: 1px solid ${(props) => props.theme.colors.themeColor};
    background: transparent;
    padding: 9px 16px;
    border-radius: 6px;
    font-weight: 500;
    color: ${(props) => props.theme.colors.themeColor};
    transition: all ease-in-out 0.5s;
    font-size: 14px;
  }

  a:hover {
    background-color: ${(props) => props.theme.colors.themeColor};
    color: #fff;
  }

  ${mq("sm")} {
    margin-top: 30px;
    a {
      display: block;
      text-align: center;
      border: 1px solid ${(props) => props.theme.colors.themeColor};
      background: transparent;
      padding: 14px 20px;
      border-radius: 6px;
      font-weight: 600;
      color: ${(props) => props.theme.colors.themeColor};
      transition: all ease-in-out 0.5s;
      font-size: 16px;
    }

    a:hover {
      background-color: ${(props) => props.theme.colors.themeColor};
      color: #fff;
    }
  }


  ${mq("md")}{
  margin-top: 50px;
    a {
      display: block;
      text-align: center;
      border: 1px solid ${(props) => props.theme.colors.themeColor};
      background: transparent;
      padding: 20px;
      border-radius: 6px;
      font-weight: 600;
      color: ${(props) => props.theme.colors.themeColor};
      transition: all ease-in-out 0.5s;
      font-size: 18px;
    }

    a:hover {
      background-color: ${(props) => props.theme.colors.themeColor};
      color: #fff;
    }
  }
  }
`;
