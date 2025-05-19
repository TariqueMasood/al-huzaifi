import { Container } from "react-bootstrap";
import styled from "styled-components";
import { mq } from "../styles/breakpoints";
import bgImg from "../../src/images/quranic-arabic-course.png";

export const QuranicArabicCoursePage = () => {
  return (
    <>
      <div>
        <Image src={bgImg} alt="pic"></Image>
      </div>
      <Wrapper>
        <Container>
          <Title>Quranic Arabic Course</Title>
          <SubTitle>Al-Huzaifi Academy</SubTitle>
          <Content>
            <CourseDiscription>
              <h5>course objective:</h5>
              <p>
                The Quranic Arabic Course is designed to enable students to
                understand the language of the Quran by focusing on the grammar,
                vocabulary, and structure used in Quranic verses. This course
                equips students with the skills needed to comprehend the Quran
                directly from the original Arabic text, deepening their
                connection with the divine message. The course is structured
                into five levels, with an emphasis on both grammatical
                foundations and practical application in Quranic texts.
              </p>
              <h5>Levels and Duration:</h5>
              <p>
                The Quranic Arabic Course is divided into five levels, each
                requiring 60 hours of study. Levels 1 and 2 focus on
                understanding basic grammar and vocabulary in the Quranic
                context, while levels 3, 4, and 5 focus on applying that
                knowledge by practicing with Quranic texts and verses.
              </p>

              <h5>- Level 1 </h5>
              <ContentSubTitle>Duration: 60 hours-</ContentSubTitle>
              <p>
                This level introduces students to the fundamentals of Arabic
                grammar in the context of the Quran. Key topics include
                noun-adjective agreement, basic verb conjugation, and essential
                Quranic vocabulary. Students will learn the structure of simple
                sentences found in Quranic verses.
              </p>

              <h5>- Level 2 </h5>
              <ContentSubTitle>Duration: 60 hours-</ContentSubTitle>
              <p>
                In this level, students will expand their understanding of basic
                grammar, focusing on more complex sentence structures and verb
                forms. The emphasis will be on learning additional Quranic
                vocabulary and applying grammatical concepts in simple Quranic
                phrases.
              </p>
              <h5>- Level 3 </h5>
              <ContentSubTitle>Duration: 60 hours-</ContentSubTitle>
              <p>
                This level transitions to practicing the grammar learned in
                levels 1 and 2 by analyzing Quranic verses. Students will begin
                applying their knowledge to interpret verses, focusing on
                understanding the meanings of commonly recited sections of the
                Quran.
              </p>
              <h5>- Level 4 </h5>
              <ContentSubTitle>Duration: 60 hours-</ContentSubTitle>
              <p>
                At this level, students will engage in deeper analysis of
                Quranic texts, practicing with longer and more complex verses.
                Emphasis will be placed on understanding how grammatical
                structures influence meaning and how different verb forms are
                used in the Quran.
              </p>
              <h5>- Level 5 </h5>
              <ContentSubTitle>Duration: 60 hours-</ContentSubTitle>
              <p>
                In the final advanced level, students will achieve proficiency
                in interpreting Quranic verses, using advanced grammar and
                vocabulary. Students will analyze entire sections of the Quran,
                exploring themes, context, and linguistic nuances in greater
                detail.
              </p>

              <h5>Learning Outcomes: </h5>
              <p>By the end of the Quranic Arabic Course, students will:</p>
              <ol>
                <li>
                  Understand essential grammar concepts used in Quranic Arabic,
                  including noun-adjective agreement, verb conjugations, and
                  sentence structure.
                </li>
                <li>
                  Build a strong Quranic vocabulary that will enhance
                  comprehension of commonly recited verses.
                </li>
                <li>
                  Analyze Quranic verses and apply grammatical concepts to
                  interpret the meanings of these verses directly from the
                  Arabic text.
                </li>
                <li>
                  Engage deeply with Quranic texts, appreciating the linguistic
                  beauty and underlying meanings of the divine message.
                </li>
                <li>
                  Develop the skills to interpret and reflect on Quranic
                  passages, applying the lessons in personal recitations and
                  reflections.
                </li>
                <li>
                  Gain the foundation necessary to pursue advanced Quranic
                  studies or linguistic studies related to the Quran.
                </li>
              </ol>
              <h5>Who Should Enroll: </h5>
              <p>This course is ideal for: </p>

              <p>
                <strong>- Students of the Quran: </strong>
                Those who want to understand the Quran in its original Arabic
                form and deepen their connection with its message.
              </p>
              <p>
                <strong>- Islamic Studies Students: </strong>
                Individuals pursuing Islamic knowledge who need a comprehensive
                understanding of Quranic Arabic to engage with tafseer, hadith,
                and other Islamic sciences.
              </p>
              <p>
                <strong>- Arabic Learners: </strong>
                Those with a basic knowledge of Arabic grammar and vocabulary
                who wish to apply their skills to Quranic studies.
              </p>
              <p>
                <strong>- Imams and Teachers: </strong>
                Islamic educators and community leaders who want to strengthen
                their Quranic Arabic for teaching and leading Quranic
                recitations.
              </p>
              <p>
                <strong>- Devout Muslims: </strong>
                Individuals who regularly recite the Quran and want to enhance
                their understanding and spiritual connection by learning the
                meanings behind the verses.
              </p>
              <p>
                By the end of the Quranic Arabic Course, students will have
                gained the ability to understand Quranic verses in their
                original Arabic form, without relying on translations. They will
                master essential grammar and vocabulary, allowing them to engage
                deeply with Quranic texts. Through extensive practice, students
                will develop the skills needed to analyze Quranic passages and
                appreciate the linguistic beauty and profound meaning of the
                Quran. This course will provide students with the foundation to
                continue their Quranic studies or to use their newfound
                understanding in daily recitations and reflections.
              </p>
            </CourseDiscription>
            <CourseDetail>
              <h5>
                course name: <span>Quranic Arabic Course</span>
              </h5>
              <h5>
                course code: <span>ARB03</span>
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
                Duration: <span>5 Levels and Each Level Requires 60 Hours</span>
              </h5>
              <h5>
                Entry Requirement: <span>Able to Read Quranic Texts</span>
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
