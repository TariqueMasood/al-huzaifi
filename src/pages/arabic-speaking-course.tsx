import { Container } from "react-bootstrap";
import styled from "styled-components";
import { mq } from "../styles/breakpoints";
import bgImg from "../../src/images/arabic-speaking-course.png";

export const ArabicSpeakingCoursePage = () => {
  return (
    <>
      <div>
        <Image src={bgImg} alt="pic"></Image>
      </div>
      <Wrapper>
        <Container>
          <Title>Arabic Speaking Course</Title>
          <SubTitle>Al-Huzaifi Academy</SubTitle>
          <Content>
            <CourseDiscription>
              <h5>course objective:</h5>
              <p>
                The Arabic Speaking Course is designed to help students develop
                fluency and confidence in spoken Arabic. This course emphasizes
                practical communication skills, enabling students to engage in
                everyday conversations with native speakers. The course is
                structured into six progressive levels, allowing learners to
                gradually improve their pronunciation, vocabulary, and
                conversational abilities.
              </p>
              <h5>Levels and Duration:</h5>
              <p>
                The Arabic Speaking Course is divided into six levels (A1, A2,
                B1, B2, C1, C2), each requiring 45 hours of study. The course is
                designed to develop speaking fluency, from basic interactions to
                advanced conversations.
              </p>

              <h5>- A1 (Beginner) </h5>
              <ContentSubTitle>Duration: 45 hours-</ContentSubTitle>
              <p>
                Introduction to simple Arabic phrases and expressions. Students
                will learn how to introduce themselves, ask basic questions, and
                engage in simple conversations such as greetings, talking about
                family, and asking for directions.
              </p>

              <h5>- A2 (Elementary) </h5>
              <ContentSubTitle>Duration: 45 hours-</ContentSubTitle>
              <p>
                Expanding on basic conversations, students will learn vocabulary
                and phrases for more common situations such as shopping,
                ordering food, and describing daily activities. This level
                focuses on improving listening comprehension and responding
                appropriately in dialogues.
              </p>
              <h5>- B1 (Intermediate) </h5>
              <ContentSubTitle>Duration: 45 hours-</ContentSubTitle>
              <p>
                At this level, students will engage in more complex
                conversations, discussing past experiences, hobbies,
                preferences, etc. Emphasis will be placed on building fluency
                and using more varied sentence structures in speaking.
              </p>
              <h5>- B2 (Upper Intermediate) </h5>
              <ContentSubTitle>Duration: 45 hours-</ContentSubTitle>
              <p>
                Focus on engaging in longer conversations, expressing opinions,
                and handling discussions on topics like culture, travel, and
                personal experiences. Students will practice handling
                spontaneous conversations and responding naturally.
              </p>
              <h5>- C1 (Advanced) </h5>
              <ContentSubTitle>Duration: 45 hours-</ContentSubTitle>
              <p>
                This level emphasizes the ability to participate in professional
                and social conversations. Students will practice formal speaking
                skills and engage in discussions about complex topics such as
                work, education, and current events.
              </p>
              <h5>- C2 (Proficiency) </h5>
              <ContentSubTitle>Duration: 45 hours-</ContentSubTitle>
              <p>
                The final level focuses on achieving near-native fluency.
                Students will engage in nuanced conversations, using idiomatic
                expressions and advanced vocabulary. They will be able to
                discuss abstract topics with clarity and precision.
              </p>

              <h5>Learning Outcomes: </h5>
              <p>
                Upon successful completion of the Arabic Speaking Course,
                students will:
              </p>
              <ol>
                <li>
                  <strong>A1 - A2: </strong>- Be able to engage in basic
                  conversations, introducing themselves, asking for information,
                  and responding to simple questions.
                </li>
                <li>
                  <strong>B1 - B2: </strong>- Engage in more complex
                  conversations, expressing opinions and discussing personal
                  experiences in a variety of contexts.
                </li>
                <li>
                  <strong>C1 - C2:</strong>- Achieve fluency in conversational
                  Arabic, confidently discussing professional, social, and
                  abstract topics with near-native fluency.
                </li>
              </ol>
              <h5>Who Should Enroll: </h5>
              <p>The Arabic Speaking Course is ideal for: </p>

              <p>
                <strong>- Students Seeking Conversational Fluency: </strong>
                Learners who wish to develop or improve their ability to speak
                Arabic fluently in everyday and professional settings.
              </p>
              <p>
                <strong>- Students Seeking Conversational Fluency: </strong>
                Learners who wish to develop or improve their ability to speak
                Arabic fluently in everyday and professional settings.
              </p>
              <p>
                <strong>- Professionals and Travelers: </strong>
                Individuals needing conversational Arabic for work or travel in
                Arabic-speaking countries.
              </p>
              <p>
                <strong>- Non-Native Speakers: </strong>
                Students who want to focus on speaking and listening skills to
                achieve fluency in Arabic.
              </p>
              <p>
                By completing the Arabic Speaking Course, students will gain the
                confidence to hold conversations in Arabic on a variety of
                topics, from everyday interactions to more complex discussions.
                This course will equip learners with the fluency and
                pronunciation skills needed to engage in smooth, natural
                conversations with native speakers. As they progress through the
                levels, students will become more adept at expressing their
                thoughts, opinions, and ideas clearly and persuasively. The
                course will also enhance their ability to listen and respond
                appropriately in real-life situations, making it easier for them
                to navigate both casual and formal conversations in
                Arabic-speaking environments. Ultimately, this course will open
                doors for learners to thrive in social, academic, and
                professional settings where Arabic communication is essential.
              </p>
            </CourseDiscription>
            <CourseDetail>
              <h5>
                course name: <span>Arabic Speaking Course</span>
              </h5>
              <h5>
                course code: <span>ARB02</span>
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
                Duration: <span>6 Levels and Each Level Requires 45 Hours</span>
              </h5>
              <h5>
                Entry Requirement:{" "}
                <span>Able to read Arabic Letters and Texts</span>
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

const ContentSubTitle = styled.p`
  padding-bottom: 0px !important;
  font-style: italic;
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
