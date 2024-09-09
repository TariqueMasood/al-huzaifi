import { Container } from "react-bootstrap";
import styled from "styled-components";
import { mq } from "../styles/breakpoints";

export const SevenQiraatCoursePage = () => {
  return (
    <Wrapper>
      <Container>
        <Title>Seven Qira'ats Course</Title>
        <SubTitle>Al-Huzaifi Academy</SubTitle>
        <Content>
          <CourseDiscription>
            <h5>course objective:</h5>
            <p>
              The Seven Qira'ats Course is a specialized program aimed at
              providing students with a comprehensive understanding of the seven
              canonical modes of Quranic recitation. These Qira'ats, each with
              its unique set of rules and nuances, offer a profound insight into
              the diversity and richness of the Quranic text.
            </p>
            <h5>Course Content:</h5>
            <p>
              The Seven Qira'ats Course offers an extensive curriculum designed
              to cover all aspects of the Qira'ats, from foundational principles
              to advanced recitation practices. Key topics include:
            </p>
            <ol>
              <li>
                <strong>Introduction to the Qira'ats: </strong>
                Understanding the history, development, and classification of
                the seven canonical Qira'ats.
              </li>
              <li>
                <strong>Profiles of Renowned Qaris: </strong>Studying the lives
                and contributions of the prominent Qaris associated with each
                Qiraat.
              </li>
              <li>
                <strong>Phonetic Characteristics: </strong>Exploring the unique
                phonetic traits and articulation points specific to each Qiraat.
              </li>
              <li>
                <strong>Tajweed Rules for Each Qiraat: </strong>Detailed study
                of the Tajweed rules as they apply to each Qiraat, including
                variations in pronunciation and elongation.
              </li>
              <li>
                <strong>Comparative Analysis: </strong>Analyzing the differences
                and similarities between the Qira'ats, highlighting their unique
                features.
              </li>
              <li>
                <strong>Practical Recitation: </strong>Regular practice sessions
                to recite the Quran according to the specific rules of each
                Qiraat, with feedback from experienced instructors.
              </li>
              <li>
                <strong>Memorization and Retention: </strong>Techniques for
                memorizing verses in multiple Qira'ats and ensuring long-term
                retention.
              </li>
            </ol>
            <h5>Learning Outcomes: </h5>
            <p>
              Upon successful completion of the Seven Qira'ats Course, students
              will achieve the following learning outcomes:
            </p>
            <ol>
              <li>
                <strong>Proficient Recitation: </strong>Students will be able to
                recite the Quran proficiently according to each of the seven
                Qira'ats, adhering to their specific rules and characteristics.
              </li>
              <li>
                <strong>In-depth Knowledge of Qira'ats: </strong>Students will
                have a thorough understanding of the history, development, and
                significance of the seven canonical Qira'ats.
              </li>
              <li>
                <strong>Mastery of Tajweed: </strong>Students will apply the
                rules of Tajweed accurately within the context of each Qiraat,
                ensuring precise and melodious recitation.
              </li>
              <li>
                <strong>Enhanced Analytical Skills: </strong>Students will
                develop the ability to analyze and appreciate the differences
                and nuances between the Qira'ats.
              </li>
              <li>
                <strong>Spiritual Enrichment: </strong>Students will experience
                a deeper spiritual connection to the Quran, enriched by the
                understanding and recitation of its diverse forms.
              </li>
              <li>
                <strong>Confidence in Public Recitation: </strong>Students will
                gain confidence in reciting the Quran in various Qira'ats,
                whether in private study or public settings.
              </li>
            </ol>
            <h5>Who Should Enroll: </h5>
            <p>
              The Seven Qira'ats Course is ideal for a diverse range of learners
              who are dedicated to deepening their understanding and recitation
              of the Quran. This includes:
            </p>
            <ol>
              <li>
                <strong>Advanced Students of Quranic Studies: </strong>
                Individuals who have a solid foundation in Quranic recitation
                and Tajweed, looking to further their expertise.
              </li>
              <li>
                <strong>Aspiring Scholars: </strong>Those aiming to become
                scholars of Quranic studies, with a focus on the canonical
                Qira'ats.
              </li>
              <li>
                <strong>Quran Teachers: </strong>Educators who teach Quranic
                recitation and wish to expand their knowledge and teaching
                repertoire to include the seven Qira'ats.
              </li>
              <li>
                <strong>Imams and Qaris: </strong>Religious leaders and reciters
                who want to perfect their recitation skills and gain a deeper
                understanding of the Qira'ats.
              </li>
              <li>
                <strong>Enthusiastic Learners: </strong>Anyone with a passion
                for the Quran and a desire to explore its various recitational
                forms in greater depth.
              </li>
            </ol>
            <p>
              By enrolling in the Seven Qira'ats Course, students embark on an
              enriching journey that not only enhances their recitation skills
              but also deepens their appreciation and understanding of the
              Quran's multifaceted nature. This course provides the
              comprehensive knowledge and practical expertise needed to master
              the seven Qira'ats, ensuring that students can recite the Quran
              with confidence, accuracy, and profound spiritual insight.
            </p>
          </CourseDiscription>
          <CourseDetail>
            <h5>
              course name: <span>Seven Qira'ats Course</span>
            </h5>
            <h5>
              course code: <span>QRN05</span>
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
            {/* <h5>
              Fee: <span>75 USD / Per Month</span>
            </h5> */}
            <h5>
              Entry Requirement:{" "}
              <span>
                Must have proficiency in Quran Recitation and application of
                Basic Arabic Grammer{" "}
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
