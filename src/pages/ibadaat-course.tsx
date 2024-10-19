import { Container } from "react-bootstrap";
import styled from "styled-components";
import { mq } from "../styles/breakpoints";

export const IbadaatCoursePage = () => {
  return (
    <Wrapper>
      <Container>
        <Title>Ibadaat Course</Title>
        <SubTitle>Al-Huzaifi Academy</SubTitle>
        <Content>
          <CourseDiscription>
            <h5>course objective:</h5>
            <p>
              The <strong>Ibadaat Course</strong> is carefully crafted to offer
              students a comprehensive understanding of the essential acts of
              worship in Islam. This course aims to provide detailed guidance on
              performing the core pillars of Islamic worship, helping students
              fulfill their religious duties in a manner that aligns with the
              teachings of the Quran and Sunnah. The course is designed to
              strengthen student's connection with Allah through proper
              knowledge and practice of these obligations.
            </p>
            <h5>Course Content:</h5>
            <p>
              The Ibadaat Course offers a structured curriculum that focuses on
              the correct performance and understanding of the primary acts of
              worship. Key topics of the course include:
            </p>
            <ol>
              <li>
                <strong>Salah (Namaz):</strong> In-depth study of the importance
                of Salah, its obligatory elements, recommended practices, and
                the correct method of performing daily prayers, along with the
                spiritual significance behind them.
              </li>
              <li>
                <strong>Zakat: </strong>Understanding the rules and regulations
                of Zakat, the conditions under which it is obligatory, how to
                calculate Zakat, and its role in social welfare and wealth
                purification.
              </li>
              <li>
                <strong>Fasting (Sawm): </strong>Detailed guidance on the
                spiritual and physical dimensions of fasting, including the
                rules for Ramadan, voluntary fasts, and the correct way to
                observe Sawm.
              </li>
              <li>
                <strong>Hajj: </strong>Comprehensive overview of the rites and
                rituals of Hajj, including the preparation, obligations, and
                spiritual meaning of each step, along with a brief introduction
                to Umrah.
              </li>
            </ol>
            <h5>Learning Outcomes: </h5>
            <p>By the end of the Ibadaat Course, students will:</p>
            <ol>
              <li>
                <strong>Master the Fundamentals of Worship: </strong>Gain a
                solid understanding of the correct performance of Salah, Zakat,
                Sawm, and Hajj, in accordance with Islamic law.
              </li>
              <li>
                <strong>Spiritual Growth: </strong>Develop a deeper spiritual
                connection with Allah through proper knowledge and
                implementation of these obligatory acts.
              </li>
              <li>
                <strong>Understanding of Zakat and Charity: </strong>Learn how
                to calculate and distribute Zakat, and understand its
                significance in promoting social justice.
              </li>
              <li>
                <strong>Comprehensive Knowledge of Hajj and Sawm: </strong>
                Acquire detailed knowledge of the pillars of Hajj and Sawm, and
                how to prepare for and fulfill these essential obligations.
              </li>
              <li>
                {" "}
                <strong>Application in Daily Life: </strong>Be able to
                confidently apply the teachings from the course to daily
                religious practices and rituals.
              </li>
            </ol>
            <h5>Who Should Enroll: </h5>
            <p>
              The <strong>Ibadaat Course</strong> is suitable for anyone looking
              to enhance their understanding of Islamic worship. It is designed
              for:
            </p>
            <ol>
              <li>
                <strong>Youth and Adults: </strong>
                Muslims of all ages who want to ensure their worship practices
                are correct and complete, both in knowledge and performance.
              </li>
              <li>
                <strong>Parents and Educators: </strong>Those who wish to teach
                their children or students the correct way to fulfill these
                religious duties.
              </li>
              <li>
                <strong>General Learners: </strong>Anyone interested in
                solidifying their knowledge and practice of the fundamental acts
                of Islamic worship.
              </li>
            </ol>
            <p>
              Enrolling in the Ibadaat Course will allow students to fulfill
              their religious duties with confidence, develop a closer
              relationship with Allah, and gain the knowledge needed to practice
              and teach others the essential pillars of worship. This course
              offers a well-rounded and detailed understanding of these
              commands, paving the way for personal and spiritual growth.
            </p>
          </CourseDiscription>
          <CourseDetail>
            <h5>
              course name: <span>Ibadaat Course</span>
            </h5>
            <h5>
              course code: <span>SRT01</span>
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
              Duration: <span>3 Months</span>
            </h5>
            <h5>
              Entry Requirement: <span>Open for All</span>
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
