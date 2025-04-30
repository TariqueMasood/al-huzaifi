import { Container } from "react-bootstrap";
import styled from "styled-components";
import { mq } from "../styles/breakpoints";
import bgImg from "../../src/images/ramadan-special-course.png";

export const RamadanSpecialCoursePage = () => {
  return (
    <>
      <div>
        <Image src={bgImg} alt="pic"></Image>
      </div>
      <Wrapper>
        <Container>
          <Title>Ramadan Special Course</Title>
          <SubTitle>Al-Huzaifi Academy</SubTitle>
          <Content>
            <CourseDiscription>
              <h5>course objective:</h5>
              <p>
                The <strong>Ramadan Special Course</strong> is designed to help
                students gain a deep understanding of the significance of
                Ramadan, its spiritual benefits, and how to make the most of
                this sacred month. This course aims to guide students through
                the essential practices of fasting, worship, and personal
                reflection, empowering them to experience Ramadan as a time of
                spiritual rejuvenation and growth. The course also offers
                practical tips on maintaining devotion and spiritual discipline
                throughout the month.
              </p>
              <h5>Course Content:</h5>
              <p>
                The <strong>Ramadan Special Course</strong> offers a
                comprehensive curriculum focused on preparing for and making the
                most of Ramadan. Key topics of the course include:
              </p>
              <ol>
                <li>
                  <strong>The Significance of Ramadan: </strong>Understanding
                  the spiritual importance of Ramadan, its role as the month of
                  the Quran, and its position as a time for repentance, mercy,
                  and forgiveness.
                </li>
                <li>
                  <strong>The Rules of Fasting (Sawm): </strong>Detailed
                  instruction on the obligations of fasting, its conditions,
                  what breaks the fast, and how to observe it in accordance with
                  Islamic law.
                </li>
                <li>
                  <strong>Spiritual Goals for Ramadan: </strong>Setting personal
                  goals for increased worship, Quran recitation, and reflection
                  to maximize the spiritual benefits of the month.
                </li>
                <li>
                  <strong>Taraweeh and Night Prayers: </strong>
                  Learning the significance of Taraweeh prayers, Qiyam-ul-Layl,
                  and how to engage in additional worship during the nights of
                  Ramadan.
                </li>
                <li>
                  <strong>The Quran in Ramadan: </strong>Guidance on how to
                  increase Quran recitation, study, and reflection, with a focus
                  on developing a closer connection to the Quran during the
                  month.
                </li>
                <li>
                  <strong>Charity and Zakat: </strong>Emphasizing the importance
                  of generosity, the rules for giving Zakat during Ramadan, and
                  the significance of Sadaqah (voluntary charity).
                </li>
                <li>
                  <strong>I'tikaf (Spiritual Retreat): </strong>Understanding
                  the purpose and guidelines of I'tikaf, and how to observe it
                  during the last ten days of Ramadan for increased spiritual
                  reflection.
                </li>
                <li>
                  <strong>The Last Ten Nights and Laylat al-Qadr: </strong>
                  Exploring the virtues of the last ten nights of Ramadan,
                  including how to seek Laylat al-Qadr, the Night of Decree, for
                  maximum spiritual reward.
                </li>
                <li>
                  <strong>Maintaining Spirituality Beyond Ramadan: </strong>
                  Practical tips on how to continue the positive habits and
                  spiritual discipline developed during Ramadan throughout the
                  rest of the year.
                </li>
              </ol>
              <h5>Learning Outcomes: </h5>
              <p>By completing the Ramadan Special Course, students will:</p>
              <ol>
                <li>
                  <strong>Maximize the Spiritual Benefits of Ramadan: </strong>
                  Gain a thorough understanding of how to approach Ramadan with
                  focus, discipline, and devotion.
                </li>
                <li>
                  <strong>Observe Fasting with Confidence: </strong>Learn the
                  correct rules of fasting and how to maintain physical and
                  spiritual strength throughout the day.
                </li>
                <li>
                  <strong>Enhance Worship and Quran Recitation: </strong>
                  Develop a personal plan for increased worship and Quranic
                  study during the month.
                </li>
                <li>
                  <strong>Understand the Role of Charity: </strong>
                  Appreciate the importance of charity during Ramadan and know
                  how to calculate and distribute Zakat correctly.
                </li>
                <li>
                  <strong>Prepare for the Last Ten Nights: </strong>
                  Learn how to engage in I'tikaf and make the most of the last
                  ten nights of Ramadan, including seeking Laylat al-Qadr.
                </li>
                <li>
                  <strong>Sustain Spiritual Growth After Ramadan: </strong>Be
                  equipped with the tools to maintain the spiritual momentum and
                  discipline cultivated during Ramadan throughout the rest of
                  the year.
                </li>
              </ol>
              <h5>Who Should Enroll: </h5>
              <p>
                The <strong>Ramadan Special Course</strong> is ideal for anyone
                looking to enhance their spiritual experience during Ramadan. It
                is designed for:
              </p>
              <ol>
                <li>
                  <strong>Youth and Adults: </strong>
                  Muslims of all ages who want to deepen their understanding of
                  Ramadan and make the most of its spiritual opportunities.
                </li>
                <li>
                  <strong>Busy Professionals and Students: </strong>Individuals
                  looking for practical guidance on balancing work, study, and
                  worship during Ramadan.
                </li>
                <li>
                  <strong>General Learners: </strong>Anyone interested in
                  learning more about the spiritual significance of Ramadan and
                  how to maximize its rewards.
                </li>
              </ol>
              <p>
                By enrolling in the <strong>Ramadan Special Course</strong>,
                students will be fully prepared to enter the month of Ramadan
                with clear objectives, practical knowledge, and a spiritual
                mindset. The course provides the tools and strategies necessary
                to make Ramadan a time of profound personal and spiritual
                growth. Students will leave the course with the knowledge and
                inspiration to carry the lessons of Ramadan into the rest of the
                year.
              </p>
            </CourseDiscription>
            <CourseDetail>
              <h5>
                course name: <span>Ramadan Special Course</span>
              </h5>
              <h5>
                course code: <span>SRT03</span>
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
