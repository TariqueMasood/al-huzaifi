import { Container } from "react-bootstrap";
import styled from "styled-components";
import { mq } from "../styles/breakpoints";
import BgImage from "../../src/images/banner-img-1.jpeg";

export const NooraniQaedahPage = () => {
  return (
    <>
      <div>
        <Image src={BgImage} alt="pic"></Image>
      </div>
      <Wrapper>
        <Container>
          <Title>Noorani Qa'edah Course</Title>
          <SubTitle>Al-Huzaifi Academy</SubTitle>
          <Content>
            <CourseDiscription>
              <h5>course objective:</h5>
              <p>
                The Noorani Qa'edah Course is designed to lay a strong
                foundation for beginners in reading and reciting the Quran.
                Utilizing the Noorani Qa'edah method, this course aims to teach
                students the correct pronunciation of Arabic letters and sounds,
                enabling them to read the Quran fluently and accurately.
              </p>
              <h5>Course Content:</h5>
              <p>
                The Noorani Qa'edah Course provides a structured and systematic
                curriculum designed to teach students the basics of Arabic
                reading and Quranic recitation. Key components of the course
                include:
              </p>
              <ol>
                <li>
                  <strong>Introduction to Arabic Alphabets: </strong>
                  Learning the Arabic alphabet, focusing on the shape, sound,
                  and proper articulation of each letter.
                </li>
                <li>
                  <strong>Combining Letters: </strong> Understanding how to
                  combine letters to form syllables and words, practicing simple
                  and compound letter combinations.
                </li>
                <li>
                  <strong>Short Vowels (Harakat): </strong> Studying the short
                  vowels (Fatha, Kasra, Damma) and their impact on letter
                  pronunciation.
                </li>
                <li>
                  <strong>Long Vowels and Tanween: </strong> Learning long
                  vowels (Madd) and Tanween, and their application in reading.
                </li>
                <li>
                  <strong>Sukoon and Shaddah: </strong> Understanding the rules
                  of Sukoon (Jazm) and Shaddah, and how they affect letter
                  pronunciation and word formation.
                </li>
                <li>
                  <strong>Practice Reading Words: </strong> Regular practice in
                  reading words, sentences, and short passages from the Noorani
                  Qa'edah book.
                </li>
                <li>
                  <strong>Introduction to Tajweed: </strong> Basic introduction
                  to the rules of Tajweed to ensure correct pronunciation and
                  recitation.
                </li>
                <li>
                  <strong>Reading Short Surahs: </strong> Gradual progression to
                  reading and reciting short Surahs from the Quran with proper
                  Tajweed.
                </li>
              </ol>
              <h5>Learning Outcomes: </h5>
              <p>
                Upon successful completion of the Noorani Qa'edah Course,
                students will achieve the following learning outcomes:
              </p>
              <ol>
                <li>
                  <strong>Proficiency in Arabic Alphabets: </strong> Students
                  will be able to recognize and pronounce all Arabic letters
                  correctly.
                </li>
                <li>
                  <strong>Basic Reading Skills: </strong> Students will develop
                  the ability to read Arabic words and sentences with proper
                  pronunciation and fluency.
                </li>
                <li>
                  <strong>Understanding of Basic Tajweed Rules: </strong>{" "}
                  Students will have a foundational understanding of Tajweed
                  rules, ensuring accurate recitation.
                </li>
                <li>
                  <strong>Confidence in Recitation: </strong> Students will gain
                  confidence in their ability to read and recite the Quran,
                  paving the way for further Quranic studies.
                </li>
                <li>
                  <strong>Love for Quranic Learning: </strong> Students will
                  develop a love for the Quran and its recitation, fostering a
                  lifelong relationship with the holy text.
                </li>
              </ol>
              <h5>Who Should Enroll: </h5>
              <p>
                The Noorani Qa'edah Course is ideal for a wide range of learners
                who are at the beginning of their Quranic learning journey. This
                includes:
              </p>
              <ol>
                <li>
                  <strong>Young Children: </strong> Young learners who are
                  starting their Quranic education and need to build a strong
                  foundation in Arabic reading.
                </li>
                <li>
                  <strong>Adult Beginners: </strong> Adults who did not have the
                  opportunity to learn Quranic reading in their childhood and
                  wish to start now.
                </li>
                <li>
                  <strong>Parents and Educators: </strong> Parents and educators
                  who want to learn or teach their children or students the
                  basics of Quranic reading using the Noorani Qa'edah method.
                </li>
                <li>
                  <strong>Anyone Seeking Basic Quranic Skills: </strong> Anyone
                  who desires to learn the fundamental skills needed to read and
                  recite the Quran accurately.
                </li>
                <li>
                  <strong>Anyone Seeking Basic Quranic Skills: </strong> Anyone
                  who desires to learn the fundamental skills needed to read and
                  recite the Quran accurately.
                </li>
              </ol>
              <p>
                By enrolling in the Noorani Qa'edah Course, students embark on
                an essential journey to master the basics of Arabic reading and
                Quranic recitation. This course provides the foundational
                knowledge and practical skills needed to progress to more
                advanced Quranic studies, ensuring that students can read the
                Quran fluently, accurately, and with a deep sense of connection
                and reverence.
              </p>
            </CourseDiscription>
            <CourseDetail>
              <h5>
                course name: <span>Noorani Qa'edah Course</span>
              </h5>
              <h5>
                course code: <span>QRN01</span>
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
                Duration: <span>4-6 Months</span>
              </h5>
              {/* <h5>
              Fee: <span>75 USD / Per Month</span>
            </h5> */}
              <h5>
                Entry Requirement: <span>Open for all</span>
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
