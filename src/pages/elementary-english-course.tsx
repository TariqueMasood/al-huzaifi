import { Container } from "react-bootstrap";
import styled from "styled-components";
import { mq } from "../styles/breakpoints";

export const ElementaryEnglishCoursePage = () => {
  return (
    <Wrapper>
      <Container>
        <Title>Elementary English Course</Title>
        <SubTitle>Al-Huzaifi Academy</SubTitle>
        <Content>
          <CourseDiscription>
            <h5>course objective:</h5>
            <p>
              The Elementary English Course is designed to provide students with
              a foundational understanding of the English language. It focuses
              on essential grammar, vocabulary, reading, writing, listening, and
              speaking skills. By the end of the course, students will be able
              to communicate effectively in everyday situations, both verbally
              and in writing.
            </p>
            {/* <h5>Course Content:</h5>
            <p>
              The Arabic prosody and rhyme (Arooz & Qafiyah) Course is divided
              into two main areas: Arabic Prosody (Arooz) and Arabic Rhyme
              patterns (Qafiyah). The curriculum is structured to guide students
              from foundational concepts to advanced techniques in Arabic
              poetry.
            </p> */}

            <h5>Levels and Duration: </h5>
            <br />
            <ol>
              <li>
                <strong>A1.1 (Beginner - Basic Communication)</strong>
              </li>
              <Duration>Duration: 40 hours</Duration>
              <p>
                <strong>Focus: </strong> Learning basic greetings,
                self-introductions, and everyday phrases. Understanding simple
                sentence structures and essential vocabulary for daily use.
              </p>
              <li>A1.2 (Elementary - Building Communication)</li>
              <Duration>Duration: 40 hours </Duration>
              <p>
                <strong>Focus:</strong> Expanding on simple interactions,
                discussing personal details, and talking about routine
                activities. Focus on building questions and basic conversation
                patterns.
              </p>
              <li>A2.1 (Pre-Intermediate - Improving Interaction)</li>
              <Duration>Duration: 40 hours</Duration>
              <p>
                <strong>Focus:</strong> Emphasis on improving fluency and
                sentence formation. Describing past and future events, talking
                about familiar topics, and handling simple transactional
                conversations.
              </p>
              <li>A2.2 (Upper Elementary - Strengthening Language Skills)</li>
              <Duration>Duration: 40 hours</Duration>
              <p>
                Focus: Engaging in more complex conversations about familiar
                subjects. Developing confidence in written and spoken English
                for common scenarios such as travel, shopping, and social
                situations.
              </p>
            </ol>

            <h5>Learning Outcomes: </h5>
            <br />
            <ol>
              <li>
                <strong>Build a Strong Foundation:</strong> Gain a solid grasp
                of essential English grammar and vocabulary.
              </li>
              <li>
                <strong>Improve Basic Communication:</strong> Engage in simple
                conversations about everyday topics with confidence.
              </li>
              <li>
                <strong>Enhance Listening Skills:</strong> Understand basic
                spoken English in real-life situations.
              </li>
              <li>
                <strong>Develop Writing Skills:</strong> Write simple
                paragraphs, letters, and emails in clear and structured English.
              </li>
              <li>
                <strong>Prepare for the Next Level:</strong> Be ready to
                progress to more advanced levels of English learning.
              </li>
            </ol>

            <h5>Who Should Enroll: </h5>
            <p>
              <strong>- Absolute Beginners:</strong> Individuals with little to
              no prior experience in English who want to start from the basics.
            </p>
            <p>
              <strong>- Students and Professionals: </strong>Those needing
              foundational English skills for academic, professional, or travel
              purposes.
            </p>
            <p>
              <strong>- Non-Native Speakers:</strong> Individuals aiming to
              build their confidence in speaking and writing English.
            </p>
            <p>
              <strong>- Everyday Learners:</strong> People looking to improve
              their language skills for social and practical interactions.
            </p>
            <p>
              By completing the Elementary English Course, students will have
              developed the core skills necessary for everyday communication and
              will be well-prepared to move on to more advanced levels of
              English learning.
            </p>
          </CourseDiscription>
          <CourseDetail>
            <h5>
              course name: <span>Elementary English Course</span>
            </h5>
            <h5>
              course code: <span>ENG01</span>
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
              Entry Requirement: <span>Open for All</span>
            </h5>
            <h5>
              Application Deadline: <span>Deadline: Open</span>
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
