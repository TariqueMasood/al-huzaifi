import { Container } from "react-bootstrap";
import styled from "styled-components";
import { mq } from "../styles/breakpoints";

export const IjazahProgramPage = () => {
  return (
    <Wrapper>
      <Container>
        <Title>Quran Ijazah Program</Title>
        <SubTitle>Al-Huzaifi Academy</SubTitle>
        <Content>
          <CourseDiscription>
            <h5>course objective:</h5>
            <p>
              The Quran Ijazah Program is an advanced and esteemed course
              designed to certify students in Quranic recitation and
              memorization. This program culminates in the awarding of an Ijazah
              (authorization) by a renowned Egyptian Qari, signifying the
              highest level of mastery and proficiency.
            </p>
            <h5>Course Content:</h5>
            <p>
              The Quran Ijazah Program encompasses a rigorous curriculum
              designed to thoroughly prepare students for certification. The key
              components include:
            </p>
            <ol>
              <li>
                <strong>Advanced Tajweed:</strong>
                Detailed study and application of the advanced rules of Tajweed
                to ensure perfect recitation.
              </li>
              <li>
                <strong>Intensive Memorization:</strong>Systematic memorization
                of the entire Quran, focusing on accuracy and consistency.
              </li>
              <li>
                <strong>Revision Techniques:</strong>Strategies for effective
                revision and retention of memorized portions.
              </li>
              <li>
                <strong>Personal Mentorship:</strong>One-on-one guidance from a
                qualified Egyptian Qari, providing personalized feedback and
                support.
              </li>
              <li>
                <strong>Recitation Practice:</strong>Regular recitation sessions
                to practice and refine skills, including public recitation
                opportunities.
              </li>
              <li>
                <strong>Assessment and Evaluation:</strong>Continuous assessment
                of recitation and memorization, culminating in a final
                evaluation by the Egyptian Qari.
              </li>
            </ol>
            <h5>Learning Outcomes:</h5>
            <p>
              Upon successful completion of the Quran Ijazah Program, students
              will achieve the following learning outcomes:
            </p>
            <ol>
              <li>
                <strong>Certified Mastery:</strong>Students will receive an
                Ijazah from a renowned Egyptian Qari, certifying their mastery
                in Quranic recitation and memorization.
              </li>
              <li>
                <strong>Flawless Recitation:</strong>Students will recite the
                Quran with impeccable pronunciation and application of Tajweed
                rules.
              </li>
              <li>
                <strong>Complete Memorization:</strong>Students will have
                memorized the entire Quran accurately and effectively.
              </li>
              <li>
                <strong>Authorization to Teach:</strong>Students will be
                authorized to teach Quranic recitation and memorization,
                continuing the chain of authentic transmission.
              </li>
            </ol>
            <h5>Who Should Enroll:</h5>
            <p>
              The Quran Ijazah Program is designed for a diverse range of
              dedicated learners who aspire to achieve the highest level of
              proficiency in Quranic recitation and/or memorization. This
              includes:
            </p>
            <ol>
              <li>
                <strong>Advanced Students of Quranic Studies:</strong>
                Individuals with a strong foundation in Quranic recitation and
                memorization, seeking certification.
              </li>
              <li>
                <strong>Aspiring Quran Teachers:</strong>Those aiming to become
                certified Quran teachers, with a focus on both recitation and
                memorization.
              </li>
              <li>
                <strong>Imams and Qaris:</strong>Religious leaders and reciters
                who want to formalize their expertise with an Ijazah.
              </li>
              <li>
                <strong>Dedicated Huffaz:</strong>Individuals who have memorized
                the Quran and wish to receive formal certification and
                authorization.
              </li>
            </ol>
            <p>
              By enrolling in the Quran Ijazah Program, students undertake a
              transformative journey that not only certifies their skills but
              also connects them to a prestigious scholarly tradition. The
              Ijazah, awarded by a distinguished Egyptian Qari, is a testament
              to their dedication and mastery, empowering them to teach and
              transmit the sacred text with authority and authenticity.
            </p>
          </CourseDiscription>
          <CourseDetail>
            <h5>
              course name: <span>Quran Ijazah Program</span>
            </h5>
            <h5>
              course code: <span>QRN06</span>
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
              <span>An outstanding Hafiz aware of Basic Tajweed rules</span>
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
