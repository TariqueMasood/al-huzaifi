import { Container } from "react-bootstrap";
import styled from "styled-components";
import { mq } from "../styles/breakpoints";
import bgImage from "../../src/images/quran-translation.png";

export const TranslationCoursePage = () => {
  return (
    <>
      <div>
        <Image src={bgImage} alt="pic"></Image>
      </div>
      <Wrapper>
        <Container>
          <Title>Quran Translation Course</Title>
          <SubTitle>Al-Huzaifi Academy</SubTitle>
          <Content>
            <CourseDiscription>
              <h5>course objective:</h5>
              <p>
                The Quran Translation Course is meticulously designed to equip
                students with the skills and knowledge required to accurately
                translate the Quran into various languages. Our aim is to run
                programs for translating the Quran into all major international
                languages, beginning with English and Urdu. This course will
                provide students with a deep understanding of the linguistic,
                cultural, and theological nuances necessary for faithful and
                effective translation.
              </p>
              <h5>Course Content:</h5>
              <p>
                The Quran Translation Course covers a comprehensive curriculum
                that prepares students for the intricate task of Quranic
                translation. Key components of the course include:
              </p>
              <ol>
                <li>
                  <strong>Introduction to Quranic Arabic: </strong>
                  Detailed study of Quranic Arabic, focusing on vocabulary,
                  grammar, and syntax.
                </li>
                <li>
                  <strong>Principles of Translation: </strong>Exploring
                  fundamental principles and methodologies for translating
                  religious texts, with emphasis on fidelity to the original
                  meaning.
                </li>
                <li>
                  <strong>Cultural and Historical Context: </strong>
                  Understanding the historical and cultural context of Quranic
                  revelations to ensure accurate interpretation.
                </li>
                <li>
                  <strong>Translation Techniques: </strong>Techniques for
                  handling linguistic challenges, idiomatic expressions, and
                  theological concepts in translation.
                </li>
                <li>
                  <strong>Comparative Translation Studies: </strong>Analyzing
                  existing translations to understand different approaches and
                  identify best practices.
                </li>
                <li>
                  <strong>Theological Considerations: </strong>Integrating
                  theological insights to ensure the translations convey the
                  intended religious messages accurately.
                </li>
              </ol>
              <h5>Learning Outcomes: </h5>
              <p>
                Upon successful completion of the Quran Translation Course,
                students will achieve the following learning outcomes:
              </p>
              <ol>
                <li>
                  <strong>Proficient in Quranic Arabic: </strong>Students will
                  gain a strong command of Quranic Arabic, enabling them to
                  understand and translate its text accurately.
                </li>
                <li>
                  <strong>Skilled Translators: </strong>Students will develop
                  the skills necessary to produce clear, accurate, and
                  meaningful translations of the Quran.
                </li>
                <li>
                  <strong>Contextual Sensitivity: </strong>Students will
                  demonstrate an understanding of the cultural and historical
                  contexts of Quranic verses, essential for effective
                  translation.
                </li>
                <li>
                  <strong>Theological Integrity: </strong>Students will ensure
                  their translations reflect the theological depth and religious
                  significance of the Quran.
                </li>
                <li>
                  <strong>Practical Experience: </strong>Students will gain
                  hands-on experience in translating Quranic text, with a focus
                  on Arabic and English / Urdu.
                </li>
                <li>
                  <strong>Critical Analysis: </strong>Students will be able to
                  critically analyze existing translations and apply best
                  practices in their work.
                </li>
              </ol>
              <h5>Who Should Enroll: </h5>
              <p>
                The Quran Translation Course is ideal for a wide range of
                learners dedicated to mastering the art of Quranic translation.
                This includes:
              </p>
              <ol>
                <li>
                  <strong>Aspiring Translators: </strong>
                  Individuals seeking to become proficient translators of the
                  Quran, starting with English and Arabic.
                </li>
                <li>
                  <strong>Quranic Scholars: </strong>Scholars who wish to deepen
                  their understanding of Quranic Arabic and enhance their
                  translation skills.
                </li>
                <li>
                  <strong>Religious Educators: </strong>Educators who aim to
                  teach Quranic translation and interpretation in educational
                  settings.
                </li>
                <li>
                  <strong>Linguists and Language Enthusiasts: </strong>Those
                  with a passion for languages who want to apply their skills to
                  translating the Quran.
                </li>
                <li>
                  <strong>Imams and Community Leaders: </strong>Religious
                  leaders who seek to provide accurate translations and
                  explanations of the Quran to their communities.
                </li>
              </ol>
              <p>
                By enrolling in the Quran Translation Course, students embark on
                a meaningful journey that not only enhances their linguistic
                skills but also contributes to making the sacred text of the
                Quran accessible to people around the world. Starting with
                translations into English and Arabic, this course provides the
                foundational knowledge and practical experience needed to
                produce translations that are both accurate and impactful,
                preserving the Quran's profound message for diverse audiences.
              </p>
            </CourseDiscription>
            <CourseDetail>
              <h5>
                course name: <span>Quran Translation Course</span>
              </h5>
              <h5>
                course code: <span>QRN07</span>
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
                <span>
                  Must have proficiency in Quran Recitation and Basic Arabic
                  Knowledge
                </span>
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
