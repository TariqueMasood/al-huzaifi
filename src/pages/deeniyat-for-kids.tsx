import { Container } from "react-bootstrap";
import styled from "styled-components";
import { mq } from "../styles/breakpoints";
import bgImg from "../../src/images/deeniyat-kids.png";

export const DeeniyatForKidsPage = () => {
  return (
    <>
      <div>
        <Image src={bgImg} alt="pic"></Image>
      </div>
      <Wrapper>
        <Container>
          <Title>Deeniyat For Kids</Title>
          <SubTitle>Al-Huzaifi Academy</SubTitle>
          <Content>
            <CourseDiscription>
              <h5>course objective:</h5>
              <p>
                The Deeniyat for Kids course is designed to introduce young
                learners to the foundational teachings of Islam in a simple and
                engaging way. The course aims to nurture love for Allah, the
                Quran, and the Prophet Muhammad (ﷺ) in children while helping
                them develop good manners, a strong moral compass, and a basic
                understanding of Islamic beliefs and practices. Through
                interactive lessons, fun activities, and age-appropriate
                content, children will begin their journey of learning and
                practicing Islam in their daily lives.
              </p>
              <h5>Course Content:</h5>
              <p>
                The Deeniyat for Kids course follows a structured curriculum
                tailored to the learning needs of young children, focusing on
                the basics of Islamic faith and practice. Key topics include:
              </p>
              <ol>
                <li>
                  <strong>Introduction to Allah and Tawheed: </strong>
                  Understanding who Allah is, His attributes, and the concept of
                  Tawheed (oneness of Allah).
                </li>
                <li>
                  <strong>Short Duas and Supplications: </strong>Learning
                  simple, everyday Duas that children can easily recite, such as
                  those for eating, sleeping, and traveling.
                </li>
                <li>
                  <strong>Five Pillars of Islam: </strong>Basic explanation of
                  the five pillars—Shahada, Salah, Zakat, Sawm, and Hajj—using
                  fun stories and activities.
                </li>
                <li>
                  <strong>Quranic Recitation: </strong>Teaching children to
                  recite short Surahs from the Quran, starting with Surah
                  Al-Fatiha, and other short Surahs like Surah Al-Ikhlas,
                  An-Naas, and Al-Falaq.
                </li>
                <li>
                  <strong>Prophetic Stories: </strong>Engaging children with
                  simple stories from the life of Prophet Muhammad (ﷺ) and other
                  Prophets, teaching important moral lessons.
                </li>
                <li>
                  <strong>Good Manners and Behavior (Adab): </strong>Teaching
                  Islamic etiquettes such as respecting parents, being kind to
                  others, sharing, and showing gratitude.
                </li>
                <li>
                  {" "}
                  <strong>Learning Salah: </strong>Introduction to the basics of
                  performing Salah, including the importance of prayer, its
                  timings, and basic movements.
                </li>
                <li>
                  <strong>Islamic Festivals: </strong>Learning about the
                  significance of Eid al-Fitr and Eid al-Adha and how Muslims
                  celebrate these joyous occasions.
                </li>
              </ol>
              <h5>Learning Outcomes: </h5>
              <p>
                By completing the Deeniyat for Kids course, children will gain:
              </p>
              <ol>
                <li>
                  <strong>Basic Understanding of Islam: </strong>Have a
                  foundational understanding of Islamic beliefs, including who
                  Allah is, the role of the Prophet (ﷺ), and the basics of
                  Islamic worship.
                </li>
                <li>
                  <strong>Memorization of Duas and Surahs: </strong>Memorize key
                  short Duas and Surahs that they can use in daily life and
                  prayer.
                </li>
                <li>
                  <strong>Manners and Good Character: </strong>Learn the
                  importance of good manners, kindness, respect, and gratitude
                  as part of their Islamic identity.
                </li>
                <li>
                  <strong>Introduction to Prayer: </strong>Be familiar with the
                  steps of Salah, understanding its significance and practicing
                  it with guidance.
                </li>
                <li>
                  <strong>Love for Islam: </strong>Develop a love for Allah, the
                  Quran, and the Prophet Muhammad (ﷺ) through stories, fun
                  activities, and interactive learning.
                </li>
              </ol>
              <h5>Who Should Enroll: </h5>
              <p>The Deeniyat for Kids course is specially designed for: </p>
              <ol>
                <li>
                  <strong>Children: </strong>
                  Kids who are just starting their journey of learning about
                  Islam and need age-appropriate guidance.
                </li>
                <li>
                  <strong>Parents Looking for Islamic Education: </strong>
                  Parents who wish to provide their children with a structured
                  and fun way to learn about their faith.
                </li>
                <li>
                  <strong>Islamic Schools and Teachers: </strong>Ideal for
                  educators in Islamic schools or those providing Islamic
                  studies at home to guide children in their early Islamic
                  education.
                </li>
              </ol>
              <p>
                The Deeniyat for Kids course lays a strong foundation for
                children's Islamic education, helping them grow spiritually
                while learning the basics of their faith. It fosters an early
                connection with Allah, the Quran, and the Prophet (ﷺ), building
                a sense of identity and pride in being a Muslim. The interactive
                and fun approach ensures that learning about Islam is a positive
                and engaging experience for young minds.
              </p>
            </CourseDiscription>
            <CourseDetail>
              <h5>
                course name: <span>Deeniyat For Kids</span>
              </h5>
              <h5>
                course code: <span>DNY01</span>
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
                Entry Requirement: <span>Open for All Children</span>
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
