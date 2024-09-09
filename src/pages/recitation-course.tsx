import { Container } from "react-bootstrap";
import styled from "styled-components";
import { mq } from "../styles/breakpoints";

export const RecitationCoursePage = () => {
  return (
    <Wrapper>
      <Container>
        <Title>Quran Recitation Course</Title>
        <SubTitle>Al-Huzaifi Academy</SubTitle>
        <Content>
          <CourseDiscription>
            <h5>course objective:</h5>
            <p>
              The Quran Recitation Course is designed to enhance the recitation
              skills of students by focusing on the accurate pronunciation,
              rhythm, and melody of Quranic verses. This course aims to instill
              a deep appreciation for the beauty of Quranic recitation while
              ensuring that students adhere to the rules of Tajweed.
            </p>
            <h5>Course Content:</h5>
            <p>
              The Quran Recitation Course offers a comprehensive curriculum that
              covers all aspects of Quranic recitation. Key components of the
              course include:
            </p>
            <ol>
              <li>
                <strong>Introduction to Tajweed: </strong>
                Learning the fundamental rules of Tajweed, including
                articulation points (Makharij) and characteristics of letters
                (Sifaat).
              </li>
              <li>
                <strong>Pronunciation Practice: </strong>Intensive practice of
                proper pronunciation for all Arabic letters and sounds.
              </li>
              <li>
                <strong>Rules of Prolongation (Madd): </strong>Understanding and
                applying the rules of prolongation, including different types of
                Madd and their appropriate usage.
              </li>
              <li>
                <strong>Stopping and Pausing (Waqf and Ibtida): </strong>{" "}
                Learning the rules of stopping and pausing, ensuring continuity
                and coherence in recitation.
              </li>
              <li>
                <strong>Practical Recitation Sessions: </strong>Regular
                recitation practice with feedback from experienced instructors
                to refine students' skills.
              </li>
              <li>
                <strong>Listening and Imitation: </strong>Listening to renowned
                Qaris and practicing imitation to develop a strong sense of
                rhythm and melody.
              </li>
              <li>
                <strong>Group Recitation: </strong>Group recitation exercises to
                build confidence and foster a sense of community among students.
              </li>
              <li>
                <strong>Spiritual Reflections: </strong>Integrating spiritual
                reflections and meditations to deepen the connection with the
                recited verses.
              </li>
            </ol>
            <h5>Learning Outcomes: </h5>
            <p>
              Upon successful completion of the Quran Recitation Course,
              students will achieve the following learning outcomes:
            </p>
            <ol>
              <li>
                <strong>Proficient in Tajweed: </strong>Students will have a
                solid understanding of Tajweed rules and be able to apply them
                in their recitation.
              </li>
              <li>
                <strong>Basic Reading Skills: </strong> Students will develop
                the ability to read Arabic words and sentences with proper
                pronunciation and fluency.
              </li>
              <li>
                <strong>Fluent Recitation: </strong> Students will have a
                foundational understanding of Tajweed rules, ensuring accurate
                recitation.
              </li>
              <li>
                <strong>Confidence in Recitation: </strong>Students will be able
                to recite the Quran fluently, with clear articulation and proper
                pronunciation.
              </li>
              <li>
                <strong>Enhanced Melody and Rhythm: </strong>Students will
                develop the ability to recite the Quran melodiously, following
                established rhythmic patterns.
              </li>
            </ol>
            <h5>Confident Reciters: </h5>
            <p>
              Students will gain confidence in their recitation skills, enabling
              them to recite in various settings, including public recitations.
            </p>
            <ol>
              <li>
                <strong>Deep Spiritual Connection: </strong>Students will
                experience a profound spiritual connection with the Quran
                through its recitation, enriching their faith and practice.
              </li>
            </ol>
            <h5>Who Should Enroll</h5>
            <p>
              The Quran Recitation Course is ideal for a wide range of learners
              who wish to improve their Quranic recitation skills. This
              includes:
            </p>
            <ol>
              <li>
                <strong>Beginner Reciters: </strong>Individuals who have basic
                reading skills and wish to enhance their recitation with proper
                Tajweed.
              </li>
              <li>
                <strong>Intermediate Reciters: </strong>Those who can read the
                Quran but seek to improve their fluency, pronunciation, and
                melodic recitation.
              </li>
              <li>
                <strong>Advanced Reciters: </strong>Experienced reciters who
                want to refine their skills and master the art of melodious
                recitation.
              </li>
              <li>
                <strong>Imams and Qaris: </strong>Religious leaders who wish to
                enhance their recitation skills for leading prayers and
                delivering public recitations.
              </li>
              <li>
                <strong>Parents and Educators: </strong>Those who aim to teach
                proper Quranic recitation to their children or students.
              </li>
              <li>
                <strong>Anyone Seeking Spiritual Enrichment: </strong>Anyone who
                desires to deepen their spiritual connection with the Quran
                through its recitation.
              </li>
            </ol>
            <p>
              By enrolling in the Quran Recitation Course, students embark on a
              transformative journey to master the art of Quranic recitation.
              This course provides the foundational knowledge, practical skills,
              and spiritual insights needed to recite the Quran beautifully and
              accurately, ensuring that students can connect deeply with the
              divine text and convey its profound messages through their
              recitation.
            </p>
          </CourseDiscription>
          <CourseDetail>
            <h5>
              course name: <span>Quran Recitation Course</span>
            </h5>
            <h5>
              course code: <span>QRN02</span>
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
              Duration: <span>1 Year</span>
            </h5>
            <h5>
              Entry Requirement:{" "}
              <span>
                Must hold QRN01 Certificate or an equivalent that demonstrates
                proficiency in basic Quranic reading skills.{" "}
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
