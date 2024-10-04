import { Container } from "react-bootstrap";
import styled from "styled-components";
import { mq } from "../styles/breakpoints";

export const IntermediateEnglishCoursePage = () => {
  return (
    <Wrapper>
      <Container>
        <Title>Intermediate English Course</Title>
        <SubTitle>Al-Huzaifi Academy</SubTitle>
        <Content>
          <CourseDiscription>
            <h5>course objective:</h5>
            <p>
              The Intermediate English Course is designed for students who have
              a foundational knowledge of English and want to improve their
              fluency and understanding. This course focuses on enhancing
              communication skills, expanding vocabulary, and refining grammar
              to enable more complex and fluid conversations, reading, and
              writing.
            </p>

            <h5>Levels and Duration: </h5>
            <br />
            <ol>
              <li>
                <strong>
                  B1.1 (Lower Intermediate - Expanding Communication)
                </strong>
              </li>
              <Duration>Duration: 40 hours</Duration>
              <p>
                <strong>Focus:</strong> Engaging in everyday conversations on
                familiar topics, describing experiences, and discussing plans.
                Strengthening grammar structures such as past and future tenses,
                comparatives, and conditionals.
              </p>
              <li>B1.2 (Intermediate - Strengthening Interaction)</li>
              <Duration>Duration: 40 hours </Duration>
              <p>
                <strong>Focus:</strong> Discussing opinions, preferences, and
                emotions with greater clarity. Improving listening comprehension
                for longer dialogues and developing writing skills for formal
                and informal texts, such as emails and short essays.
              </p>
              <li>B2.1 (Upper Intermediate - Developing Fluency)</li>
              <Duration>Duration: 40 hours</Duration>
              <p>
                <strong>Focus:</strong> Participating in discussions on familiar
                and some unfamiliar topics, expressing thoughts clearly, and
                managing more complex conversations. Emphasis on understanding
                longer reading materials, improving listening skills, and
                writing structured paragraphs and essays.
              </p>
              <li>B2.2 (Advanced Intermediate - Refining Skills)</li>
              <Duration>Duration: 40 hours</Duration>
              <p>
                Focus: Engaging in debates, discussions, and negotiations with
                greater ease. Understanding abstract topics in written and
                spoken formats, refining grammar for more advanced sentence
                structures, and improving writing skills for reports and
                summaries.
              </p>
            </ol>

            <h5>Learning Outcomes: </h5>
            <br />
            <ol>
              <li>
                <strong>Improve Communication Skills:</strong> Communicate more
                effectively in both spoken and written English.
              </li>
              <li>
                <strong>Expand Vocabulary and Grammar:</strong> Learn advanced
                vocabulary and grammar to discuss a wider range of topics.
              </li>
              <li>
                <strong>Enhance Listening and Reading Skills:</strong>{" "}
                Understand more complex spoken and written English in a variety
                of contexts.
              </li>
              <li>
                <strong>Develop Writing Proficiency:</strong> Write clearer,
                more organized essays, reports, and formal correspondence.
              </li>
              <li>
                <strong>Prepare for Advanced Learning:</strong> Gain the
                necessary skills to progress to the advanced level of English
                proficiency.
              </li>
            </ol>

            <h5>Who Should Enroll: </h5>
            <p>
              <strong>- Intermediate Learners:</strong> Individuals who have
              basic knowledge of English and want to build fluency and accuracy
              in communication.
            </p>
            <p>
              <strong>- Students and Professionals:</strong> Those needing to
              improve their English for academic purposes or work-related
              communication.
            </p>
            <p>
              <strong>- Non-Native English Speakers:</strong> Learners looking
              to refine their language skills for better comprehension and
              expression in daily life.
            </p>
            <p>
              <strong>- Travelers and Expats:</strong> Individuals preparing for
              travel or relocation to English-speaking countries who need a
              higher level of language proficiency.
            </p>
            <p>
              By completing the Intermediate English Course, students will be
              more confident and effective in a variety of settings, both
              professionally and socially, and will be well-prepared to advance
              to the higher levels of English proficiency.
            </p>
          </CourseDiscription>
          <CourseDetail>
            <h5>
              course name: <span>Intermediate English Course</span>
            </h5>
            <h5>
              course code: <span>ENG02</span>
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
                Certificate of Elementary English Course ENG01 or equivalent
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
