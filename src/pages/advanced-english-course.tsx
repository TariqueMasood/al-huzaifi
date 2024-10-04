import { Container } from "react-bootstrap";
import styled from "styled-components";
import { mq } from "../styles/breakpoints";

export const AdvancedEnglishCoursePage = () => {
  return (
    <Wrapper>
      <Container>
        <Title>Advanced English Course</Title>
        <SubTitle>Al-Huzaifi Academy</SubTitle>
        <Content>
          <CourseDiscription>
            <h5>course objective:</h5>
            <p>
              The Advanced English Course is designed for learners who have a
              strong foundation in English and seek to refine their skills for
              academic, professional, or personal purposes. This course focuses
              on mastering complex language structures, enhancing fluency in
              both formal and informal contexts, and improving writing and
              comprehension for sophisticated interactions. By the end of the
              course, students will have the confidence and ability to engage in
              high-level communication.
            </p>

            <h5>Levels and Duration: </h5>
            <br />
            <ol>
              <li>
                <strong>C1.1 (Advanced - Strengthening Accuracy)</strong>
              </li>
              <Duration>Duration: 40 hours</Duration>
              <p>
                <strong>Focus:</strong> Improving fluency in complex
                discussions, understanding abstract concepts, and mastering
                advanced grammatical structures. Emphasis on developing the
                ability to explain detailed information and articulate opinions
                on a wide range of topics.
              </p>
              <li>C1.2 (Advanced - Fluency in Communication)</li>
              <Duration>Duration: 40 hours </Duration>
              <p>
                <strong>Focus:</strong> Engaging in more nuanced conversations,
                debates, and presentations with accuracy and clarity. Focus on
                enhancing listening and reading comprehension for detailed texts
                such as news articles, reports, and academic journals.
              </p>
              <li>C2.1 (Proficiency - Mastering Language Skills)</li>
              <Duration>Duration: 40 hours</Duration>
              <p>
                <strong>Focus:</strong> Handling complex and specialized
                conversations in professional and academic settings. Emphasis on
                refining writing skills for reports, essays, and official
                documents, as well as mastering idiomatic expressions and
                advanced language use.
              </p>
              <li>C2.2 (Proficiency - Achieving Native-Like Fluency)</li>
              <Duration>Duration: 40 hours</Duration>
              <p>
                Focus: Reaching near-native proficiency in both spoken and
                written English. Emphasis on understanding and discussing
                high-level texts, such as literary works and academic research,
                and producing sophisticated written and spoken content with
                ease.
              </p>
            </ol>

            <h5>Learning Outcomes: </h5>
            <br />
            <ol>
              <li>
                <strong>Achieve High-Level Communication:</strong> Communicate
                effectively in both casual and formal settings with native-like
                fluency.
              </li>
              <li>
                <strong>Master Complex Grammar and Vocabulary:</strong> Use
                advanced grammar structures and a wide range of vocabulary to
                express ideas clearly and concisely.
              </li>
              <li>
                <strong>Develop Advanced Reading and Listening Skills:</strong>{" "}
                Understand detailed, complex texts and spoken English in various
                contexts, including academic, professional, and media
                environments.
              </li>
              <li>
                <strong>Refine Writing Skills:</strong> Produce clear,
                well-structured essays, reports, and formal communications
                tailored to specific purposes.
              </li>
              <li>
                <strong>Prepare for Academic and Professional Success:</strong>{" "}
                Gain the skills needed to excel in academic writing,
                presentations, and high-level professional communication.
              </li>
            </ol>

            <h5>Who Should Enroll: </h5>
            <p>
              <strong>- Advanced Learners:</strong> Individuals who already have
              strong English skills and want to achieve a higher level of
              fluency and accuracy.
            </p>
            <p>
              <strong>- Professionals:</strong> Those needing advanced English
              proficiency for work-related communication, including
              presentations, negotiations, and report writing.
            </p>
            <p>
              <strong>- Academic Students:</strong> Learners preparing for
              university-level education in English-speaking institutions, or
              for advanced studies requiring high-level English.
            </p>
            <p>
              <strong>- Expatriates and Travelers:</strong> Individuals looking
              to refine their language skills for living and working in
              English-speaking environments.
            </p>
            <p>
              By completing the Advanced English Course, students will master
              the English language, enabling them to communicate effectively in
              all settings and reach their full potential in academic and
              professional contexts. This course prepares learners for
              real-world challenges requiring advanced English proficiency.
            </p>
          </CourseDiscription>
          <CourseDetail>
            <h5>
              course name: <span>Advanced English Course</span>
            </h5>
            <h5>
              course code: <span>ENG03</span>
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
              Duration: <span>4 Levels, each requiring 40 hours</span>
            </h5>
            <h5>
              Entry Requirement:{" "}
              <span>
                Certificate of Intermediate English Course ENG02 or equivalent
              </span>
            </h5>
            <h5>
              Application Deadline: <span>Open</span>
            </h5>
            <ButtonContainer>
              <a href="/registration">Apply Here</a>
            </ButtonContainer>
          </CourseDetail>
        </Content>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

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

const Duration = styled.div`
  margin-top: 3px;
  font-style: italic;

  ${mq("sm")} {
    font-size: 16px;
    margin-top: 9px;
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
