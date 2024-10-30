import { Container } from "react-bootstrap";
import styled from "styled-components";
import { mq } from "../styles/breakpoints";

export const ImamatCoursePage = () => {
  return (
    <Wrapper>
      <Container>
        <Title>Imamat Course</Title>
        <SubTitle>Al-Huzaifi Academy</SubTitle>
        <Content>
          <CourseDiscription>
            <h5>course objective:</h5>
            <p>
              The <strong>Imamat Course</strong> is designed to train students
              in the principles and responsibilities of leading congregational
              prayers (Imamat) in accordance with Islamic teachings. This course
              aims to prepare individuals to serve as knowledgeable and
              confident Imams in their communities, ensuring they are
              well-versed in Fiqh (Islamic jurisprudence) related to prayer,
              leadership qualities, and the ethical duties of an Imam. The
              course also focuses on enhancing public speaking skills and the
              ability to provide spiritual guidance.
            </p>
            <h5>Course Content:</h5>
            <p>
              The Imamat Course offers a comprehensive curriculum that equips
              students with the essential knowledge and skills required to lead
              prayers and offer spiritual leadership. Key topics of the course
              include:
            </p>
            <ol>
              <li>
                <strong>Introduction to Imamat: </strong>Understanding the role
                of an Imam in Islam, his responsibilities, and the importance of
                spiritual leadership in the Muslim community.
              </li>
              <li>
                <strong>Fiqh of Salah (Prayer): </strong>A detailed study of the
                rulings related to leading the five daily prayers, Jumu'ah
                (Friday) prayers, Taraweeh, Eid prayers, and Janazah (funeral)
                prayers.
              </li>
              <li>
                <strong>Correct Pronunciation and Recitation: </strong>Learning
                the correct recitation of the Quran with proper Tajweed,
                focusing on the Surahs commonly recited in Salah.
              </li>
              <li>
                <strong>Congregational Prayers (Salat al-Jama'ah): </strong>
                Understanding the etiquettes and rulings of leading group
                prayers, including the proper organization of the congregation
                and dealing with various situations.
              </li>
              <li>
                <strong>Public Speaking and Khutbah (Sermon): </strong>Training
                in delivering effective sermons for Jumu'ah and other occasions,
                with a focus on eloquence, relevant content, and addressing
                contemporary issues.
              </li>
              <li>
                <strong>
                  Spiritual and Ethical Responsibilities of an Imam:{" "}
                </strong>
                Exploring the personal qualities, moral conduct, and ethical
                standards expected of an Imam, including his role as a spiritual
                mentor.
              </li>
              <li>
                <strong>Leading Special Prayers: </strong>Learning how to lead
                Taraweeh during Ramadan, Eid prayers, and funeral prayers, with
                attention to their specific rulings.
              </li>
              <li>
                <strong>Counseling and Community Leadership: </strong>Gaining
                skills in providing religious counseling and guidance to
                individuals, families, and the wider community.
              </li>
              <li>
                <strong>Crisis Management: </strong>Understanding the role of an
                Imam during community crises, including how to provide spiritual
                support during difficult times.
              </li>
              <li>
                <strong>Contemporary Challenges for Imams: </strong>Addressing
                modern-day issues faced by Imams, such as navigating interfaith
                dialogues, addressing social issues, and maintaining unity in
                diverse communities.
              </li>
            </ol>
            <h5>Learning Outcomes: </h5>
            <p>By completing the Imamat Course, students will:</p>
            <ol>
              <li>
                <strong>Master the Fiqh of Leading Prayers: </strong>Gain a
                thorough understanding of the rules and etiquettes for leading
                different types of prayers.
              </li>
              <li>
                <strong>Become Proficient in Quranic Recitation: </strong>
                Improve their Quranic recitation skills with Tajweed, ensuring
                proper pronunciation during prayers.
              </li>
              <li>
                <strong>Develop Leadership and Public Speaking Skills: </strong>
                Build confidence in delivering sermons and leading
                congregational prayers with clarity and wisdom.
              </li>
              <li>
                <strong>Provide Spiritual Guidance: </strong>Learn how to offer
                effective religious counseling and support to individuals and
                families in their communities.
              </li>
              <li>
                <strong>Uphold the Ethical Standards of an Imam: </strong>Embody
                the moral and ethical responsibilities of an Imam, leading with
                humility, patience, and wisdom.
              </li>
              <li>
                <strong>Address Modern-Day Challenges: </strong>Equip themselves
                with the knowledge and skills to tackle contemporary issues
                facing Muslim communities.
              </li>
            </ol>
            <h5>Who Should Enroll: </h5>
            <p>
              The Imamat Course is ideal for those aspiring to take on the role
              of an Imam or community leader, as well as those who want to
              deepen their understanding of Islamic leadership. It is suited
              for:
            </p>
            <ol>
              <li>
                <strong>Aspiring Imams: </strong>Individuals preparing to serve
                as Imams in mosques or community centers.
              </li>
              <li>
                <strong>Community Leaders and Teachers: </strong>Those involved
                in Islamic education or community work who want to enhance their
                leadership skills.
              </li>
              <li>
                <strong>Advanced Students of Islamic Studies: </strong>Students
                seeking to specialize in Fiqh related to Salah and leadership.
              </li>
              <li>
                <strong>General Learners: </strong>Individuals who wish to
                improve their Quranic recitation and knowledge of prayer
                leadership.
              </li>
            </ol>
            <p>
              Enrolling in the <strong>Imamat Course</strong> will equip
              students with the knowledge and skills required to lead prayers
              confidently and provide spiritual guidance to their communities.
              The course also fosters personal development, enhancing both
              religious and leadership capabilities, ensuring students are
              well-prepared to serve as Imams and community leaders.
            </p>
          </CourseDiscription>
          <CourseDetail>
            <h5>
              course name: <span>Imamat Course</span>
            </h5>
            <h5>
              course code: <span>SRT07</span>
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
              Duration: <span>24 Hours</span>
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
