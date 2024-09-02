import { Container } from "react-bootstrap";
import styled from "styled-components";
import { mq } from "../styles/breakpoints";

export const MemorizationCoursePage = () => {
  return (
    <Wrapper>
      <Container>
        <Title>Quran Memorization Course</Title>
        <SubTitle>Al-Huzaifi Academy</SubTitle>
        <Content>
          <CourseDiscription>
            <h5>course objective:</h5>
            <p>
              The Quran Memorization Course is thoughtfully crafted to guide
              students through the profound and rewarding journey of memorizing
              the Holy Quran. Memorization, or Hifz, is a time-honored tradition
              in Islamic scholarship, and this course aims to equip students
              with the skills, strategies, and spiritual support necessary to
              achieve this noble goal.
            </p>
            <h5>Course Content:</h5>
            <p>
              The Quran Memorization Course encompasses a structured curriculum
              that gradually builds students' memorization skills while
              reinforcing their understanding and recitation abilities. The key
              components of the course include:
            </p>
            <ol>
              <li>
                <strong>Introduction to Hifz:</strong>
                Understanding the virtues, significance, and responsibilities of
                memorizing the Quran.
              </li>
              <li>
                <strong>Effective Memorization Techniques:</strong>Training on
                various memorization strategies, including chunking, repetition,
                and visualization.
              </li>
              <li>
                <strong>Daily Memorization Goals:</strong>Developing a robust
                revision schedule to ensure long-term retention and avoid
                forgetfulness.
              </li>
              <li>
                <strong>Integration of Tajweed:</strong>Applying the rules of
                Tajweed to ensure correct pronunciation and articulation during
                memorization.
              </li>
              <li>
                <strong>Supportive Environment:</strong>Creating a nurturing and
                supportive learning atmosphere, including peer support and
                regular encouragement from instructors.
              </li>
              <li>
                <strong>Spiritual Practices:</strong>Incorporating
                supplications, reflections, and spiritual exercises to deepen
                the connection with the Quran.
              </li>
              <li>
                <strong>Assessment and Feedback:</strong>Regular assessments and
                feedback sessions to track progress, identify areas for
                improvement, and celebrate milestones.
              </li>
            </ol>
            <h5>Learning Outcomes:</h5>
            <p>
              Upon successful completion of the Quran Memorization Course,
              students will achieve the following learning outcomes:
            </p>
            <ol>
              <li>
                <strong>Proficient Memorization:</strong>Students will have
                memorized significant portions of the Quran, adhering to the
                highest standards of accuracy and retention.
              </li>
              <li>
                <strong>Flawless Recitation:</strong>Students will recite the
                Quran with correct pronunciation and application of Tajweed
                rules, enhancing the beauty and accuracy of their recitation.
              </li>
              <li>
                <strong>Enhanced Focus and Discipline:</strong>Students will
                cultivate a disciplined approach to daily memorization and
                revision, contributing to their overall personal and spiritual
                growth.
              </li>
              <li>
                <strong>Spiritual Connection:</strong>Students will experience a
                deepened spiritual bond with the Quran, reflecting in their
                daily lives and worship practices.
              </li>
              <li>
                <strong>Confidence in Recitation and Memorization:</strong>{" "}
                Students will gain confidence in their ability to recite and
                recall the Quran, both privately and publicly.
              </li>
            </ol>
            <h5>Who Should Enroll:</h5>
            <p>
              The Quran Memorization Course is designed for a wide range of
              learners who are dedicated to the goal of memorizing the Quran.
              This includes:
            </p>
            <ol>
              <li>
                <strong>Aspiring Huffaz:</strong>Individuals committed to the
                complete memorization of the Quran, seeking a structured and
                supportive program to achieve their goal.
              </li>
              <li>
                <strong>Students with Basic Quranic Knowledge:</strong>Those who
                have a foundational understanding of Quranic recitation and wish
                to embark on the journey of Hifz.
              </li>
              <li>
                <strong>Existing Huffaz Seeking Revision:</strong>Individuals
                who have previously memorized the Quran and want to strengthen
                their retention and recitation skills.
              </li>
              <li>
                <strong>Parents and Guardians:</strong>Adults looking to support
                and guide their children through the memorization process by
                gaining firsthand experience.
              </li>
            </ol>
            <p>
              By enrolling in the Quran Memorization Course, students undertake
              a transformative journey that not only strengthens their memory
              and recitation skills but also enriches their spiritual lives.
              This course provides the tools, guidance, and support needed to
              memorize the Quran, ensuring that this sacred text becomes an
              integral part of their hearts and minds.
            </p>
          </CourseDiscription>
          <CourseDetail>
            <h5>
              course name: <span>Quran Memorization Course</span>
            </h5>
            <h5>
              course code: <span>QRN03</span>
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
              Duration: <span>2-4 Years</span>
            </h5>
            {/* <h5>
              Fee: <span>75 USD / Per Month</span>
            </h5> */}
            <h5>
              Entry Requirement:{" "}
              <span>Must have proficiency in Quran Recitation</span>
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
