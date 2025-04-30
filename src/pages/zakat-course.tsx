import { Container } from "react-bootstrap";
import styled from "styled-components";
import { mq } from "../styles/breakpoints";
import bgImg from "../../src/images/zakat-course.png";

export const ZakatCoursePage = () => {
  return (
    <>
      <div>
        <Image src={bgImg} alt="pic"></Image>
      </div>
      <Wrapper>
        <Container>
          <Title>Zakat Course</Title>
          <SubTitle>Al-Huzaifi Academy</SubTitle>
          <Content>
            <CourseDiscription>
              <h5>course objective:</h5>
              <p>
                The <strong>Zakat Course</strong> is specifically designed to
                offer students a comprehensive understanding of the rules and
                significance of Zakat, one of the five pillars of Islam. This
                course will provide detailed knowledge on calculating Zakat,
                understanding its conditions, and fulfilling this obligation in
                accordance with Islamic law. The goal is to ensure that students
                are able to fulfil Zakat with precision and awareness of its
                spiritual and social impacts.
              </p>
              <h5>Course Content:</h5>
              <p>
                The <strong>Zakat Course</strong> provides a structured
                curriculum that covers all essential aspects of Zakat. Key
                topics of the course include:
              </p>
              <ol>
                <li>
                  <strong>Definition and Importance of Zakat: </strong>An
                  introduction to the concept of Zakat, its obligatory nature,
                  and the spiritual and societal benefits it brings.
                </li>
                <li>
                  <strong>Conditions for Zakat: </strong>Understanding the
                  requirements that make Zakat obligatory, such as wealth
                  thresholds (Nisab), and who is eligible to give and receive
                  Zakat.
                </li>
                <li>
                  <strong>Calculation of Zakat: </strong>Step-by-step guidance
                  on how to calculate Zakat on various forms of wealth,
                  including savings, investments, business assets, and
                  livestock.
                </li>
                <li>
                  <strong>Zakat on Different Types of Wealth: </strong>
                  Detailed instruction on how to determine Zakat on cash, gold,
                  silver, property, agricultural produce, and more.
                </li>
                <li>
                  <strong>Zakat Recipients: </strong>Understanding the eight
                  categories of recipients of Zakat as mentioned in the Quran,
                  and the rules for ensuring proper distribution.
                </li>
                <li>
                  <strong>Voluntary Charity (Sadaqah): </strong>Learning the
                  differences between Zakat and Sadaqah, and the importance of
                  voluntary charity in Islam.
                </li>
                <li>
                  <strong>Practical Case Studies: </strong>Real-life examples
                  and scenarios to practice calculating Zakat and applying the
                  rules in various situations.
                </li>
                <li>
                  <strong>Social and Spiritual Benefits of Zakat: </strong>
                  Exploration of the role of Zakat in wealth purification,
                  social justice, and community development.
                </li>
              </ol>
              <h5>Learning Outcomes: </h5>
              <p>By completing the Zakat Course, students will:</p>
              <ol>
                <li>
                  <strong>Accurately Calculate Zakat: </strong>Gain the ability
                  to correctly calculate Zakat on different forms of wealth and
                  fulfill their obligation with confidence.
                </li>
                <li>
                  <strong>Understand Eligibility for Zakat: </strong>Learn who
                  qualifies to give and receive Zakat according to Islamic
                  guidelines.
                </li>
                <li>
                  <strong>Comprehend the Impact of Zakat: </strong>Appreciate
                  the spiritual benefits of Zakat, such as wealth purification,
                  and its role in reducing poverty and inequality in society.
                </li>
                <li>
                  <strong>Effectively Distribute Zakat: </strong>
                  Be able to identify the rightful recipients of Zakat and
                  ensure it is distributed in a manner that aligns with Islamic
                  law.
                </li>
                <li>
                  <strong>Differentiate Between Zakat and Sadaqah: </strong>
                  Understand the distinct roles of obligatory Zakat and
                  voluntary charity (Sadaqah) in a Muslim's life.
                </li>
              </ol>
              <h5>Who Should Enroll: </h5>
              <p>
                The <strong>Zakat Course</strong> is ideal for anyone looking to
                deepen their understanding of this fundamental act of worship.
                It is designed for:
              </p>
              <ol>
                <li>
                  <strong>Youth and Adults: </strong>
                  Muslims seeking to ensure that their calculation and
                  distribution of Zakat is in accordance with Islamic law.
                </li>
                <li>
                  <strong>Business Owners and Professionals: </strong>
                  Individuals who want to understand how to calculate Zakat on
                  business assets and investments.
                </li>
                <li>
                  <strong>General Learners: </strong>Anyone interested in
                  gaining a detailed understanding of Zakat as part of their
                  broader Islamic knowledge.
                </li>
              </ol>
              <p>
                By enrolling in the Zakat Course, students will be empowered to
                properly calculate and distribute Zakat, ensuring that they
                fulfill this essential obligation with precision. The course
                will also help students to appreciate the profound impact that
                Zakat has on personal wealth purification, spiritual growth, and
                societal welfare. This course provides a well-rounded education
                on Zakat, paving the way for responsible financial practice in
                Islam.
              </p>
            </CourseDiscription>
            <CourseDetail>
              <h5>
                course name: <span>Zakat Course</span>
              </h5>
              <h5>
                course code: <span>SRT02</span>
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
                Duration: <span>22 Hours</span>
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
